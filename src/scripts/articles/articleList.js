/*
    - Author: Meghan Semrad
    - Purpose of Module: 
*/

import { getArticles, useArticles, deleteArticle } from './articleProvider.js';
import { articleHTML } from './articleHTMLRepresentation.js';


const contentTarget = document.querySelector(".articles__container");
const eventHub = document.querySelector(".container");


eventHub.addEventListener("articleStateChanged", () => {
    articleList()
});


export const articleList = () => {
    getArticles()
    .then(() => {
        const articlesArray = useArticles()
        render(articlesArray)
    })
};




const render = (articlesArray) => {
    const allArticlesConvertedToString = articlesArray.map((individualArticleObj) => articleHTML(individualArticleObj)).join(" ")
    contentTarget.innerHTML = allArticlesConvertedToString
};



eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteArticle--")) {
        const [prefix, articleId] = clickEvent.target.id.split("--")
  
       deleteArticle(articleId)
    }
  }); 