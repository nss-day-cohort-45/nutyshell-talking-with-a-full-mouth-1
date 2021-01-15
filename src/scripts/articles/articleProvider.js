/*
    - Author: Meghan Semrad
    - Purpose of Module: 
        1. GET, POST, DELETE articles to API
        2. Dispatch a custom event to eventHub when the state has changed due to one of the above functions
        3. Have a useArticles() function that places a .slice() of the raw article data into an array 
*/


const eventHub = document.querySelector(".container");



// ------------------------------------------------------------------------------------------------------



const dispatchStateChangeEvent = () => {
    const articleStateChangedEvent = new CustomEvent("articleStateChanged")

    eventHub.dispatchEvent(articleStateChangedEvent)
};



// ------------------------------------------------------------------------------------------------------



let articles = [];

export const useArticles = () => {
    const articlesArrangedByDate = articles.sort(
        (currentArticle, nextArticle) =>
            Date.parse(currentArticle.date) - Date.parse(nextArticle.date)
    )
    return articlesArrangedByDate
};



// ------------------------------------------------------------------------------------------------------



export const getArticles = () => {
    return fetch("http://localhost:8088/articles")
    .then(response => response.json())
    .then(parsedArticles => {
        articles = parsedArticles
    })
};



// ------------------------------------------------------------------------------------------------------



export const saveArticle = article => {
    return fetch("http://localhost:8088/articles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(article)
    })
    .then(dispatchStateChangeEvent)
};



// ------------------------------------------------------------------------------------------------------



export const deleteArticle = articleId => {
    return fetch(`http://localhost:8088/articles/${articleId}`, {
        method: "DELETE"
    })
        .then(dispatchStateChangeEvent)
};