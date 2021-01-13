/*
    - Author: Meghan Semrad
    - Purpose of Module: 
*/

const eventHub = document.querySelector(".container");



// ------------------------------------------------------------------------------------------------------



const dispatchStateChangeEvent = () => {
    const articleStateChangedEvent = new CustomEvent("articleStateChanged")

    eventHub.dispatchEvent(articleStateChangedEvent)
};



// ------------------------------------------------------------------------------------------------------



let articles = [];

export const useArticles = () => articles.slice();



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


export const deleteArticle = articleId => {
    return fetch(`http://localhost:8088/articles/${articleId}`, {
        method: "DELETE"
    })
        .then(dispatchStateChangeEvent)
};