/*
    - Author: Meghan Semrad
    - Purpose of Module: 
        1. Create articleList() through which the articles are fetched from the database and 
           the array copy passed through render()
        2. articleList() is invoked when eventHub hears the "articleStateChanged" event 
        3. render() .maps over each object in the array copy to .join it in one HTML 
           sting and renders it in DOM with .innerHTML
*/


import { getArticles, useArticles } from './articleProvider.js';
import { articleHTML } from './articleHTMLRepresentation.js';


const contentTarget = document.querySelector(".articles__container");
const eventHub = document.querySelector(".container");



// ------------------------------------------------------------------------------------------------------



export const articleList = () => {
    getArticles()
    .then(() => {
        const articlesArray = useArticles()
        render(articlesArray)
    })
};



// ------------------------------------------------------------------------------------------------------



eventHub.addEventListener("articleStateChanged", () => {
    articleList()
});



// ------------------------------------------------------------------------------------------------------



const render = (articlesArray) => {
    const allArticlesConvertedToString = articlesArray.map((individualArticleObj) => articleHTML(individualArticleObj)).join(" ")
    contentTarget.innerHTML = allArticlesConvertedToString
};