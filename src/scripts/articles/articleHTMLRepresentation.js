/*
    - Author: Meghan Semrad
    - Purpose of Module: To create the HTML representation for each saved article
*/
const contentTarget = document.querySelector(".createArticleButton");
const contentElement = document.querySelector(".articles__dialog");
const eventHub = document.querySelector(".container");



import { createNewArticle } from './articleForm.js';



export const articleHTML = (articleObject) => {
    return `
        <section class="article">
            <div class="article__title">Title: ${articleObject.title}</div>
            <div class="article__url">URL: ${articleObject.url}</div>
            <div class="article__synopsis">Synopsis: ${articleObject.synopsis}</div>
            <button id="deleteArticle--${articleObject.id}">Delete</button>
        </section>
    `
};



// ------------------------------------------------------------------------------------------------------



export const createArticleButton = () => {
    contentTarget.innerHTML = "<button id='createArticle'>Create Article</button>"
};



// ------------------------------------------------------------------------------------------------------


// This event is dispatched to eventHub and heard through that in NoteList.js

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "createArticle") {
        contentElement.showModal()
        createNewArticle()

        // need contentTarget.showModal()
    }
});