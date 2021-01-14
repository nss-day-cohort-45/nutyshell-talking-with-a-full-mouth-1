/*
    - Author: Meghan Semrad
    - Purpose of Module: 
        1. To create the HTML representation for each saved article
        2. Click Event on the Delete button  
        3. Create a "New Article" button 
        4. Click Event on the "New Article" button which pops up a <dialog> box with a form --
           but form HTML in another module
*/


const contentTarget = document.querySelector(".createArticleButton");
const contentElement = document.querySelector(".articles__dialog");
const eventHub = document.querySelector(".container");



import { createNewArticle } from './articleForm.js';
import { deleteArticle } from './articleProvider.js';



// ------------------------------------------------------------------------------------------------------


// HTML of individual saved articles

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


// clickEvent on delete button -- included article id in HTML and here so only that specific one would be removed 

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteArticle--")) {
        const [prefix, articleId] = clickEvent.target.id.split("--")
  
       deleteArticle(articleId)
    }
  }); 



// ------------------------------------------------------------------------------------------------------


// Made Create Article button here and exported to Nutshell.js so the button is rendered on dashboard load

export const createArticleButton = () => {
    contentTarget.innerHTML = "<button id='createNewArticle'>New Article</button>"
};



// ------------------------------------------------------------------------------------------------------


/* This click event on the above New Article button is dispatched to eventHub and the 
   function createNewArticle() from articleForm.js invoked */ 

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "createNewArticle") {
        contentElement.showModal()
        createNewArticle()
    }
});