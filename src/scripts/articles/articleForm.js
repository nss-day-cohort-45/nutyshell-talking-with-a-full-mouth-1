/*
    - Author: Meghan Semrad
    - Purpose of Module: 
        1. To create <dialog> box for article form and a Save Article button
        2. Click Event on the Save Article button that gathers the values of the 
           user's typed in info

*/

import { saveArticle } from './articleProvider.js';


// This is a <dialog> box in index.html
const contentTarget = document.querySelector(".articles__dialog");
const eventHub = document.querySelector(".container");



// ------------------------------------------------------------------------------------------------------



export const createNewArticle = () => {
    return contentTarget.innerHTML = `
        <form class="article__form">
            <fieldset class="title">
                <label for="journalDate" class="date__label ">Title</label>
                <input type="text" id="article__title" placeholder="Title">
            </fieldset>
    
            <fieldset class="url">
                <label for="" class="">URL</label>
                <input type="text" id="article__url" placeholder="URL">
            </fieldset>

            <fieldset class="synopsis">
                <label for="" class="">Synopsis</label>
                <textarea id="article__synopsis" placeholder="synopsis"></textarea>
            </fieldset>


            <input type="submit" value="Save Article" id="saveArticle">
            <input type="submit" value="Close" id="closeDialog"> 
        </form>

    `
};
  


// ------------------------------------------------------------------------------------------------------


// Click event on the Save Article Button, which captures the values entered by user
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveArticle") {

        clickEvent.preventDefault()
       const title = document.querySelector("#article__title").value
       const url = document.querySelector("#article__url").value
       const synopsis = document.querySelector("#article__synopsis").value
       
        
        const newArticle = {
            title: title,
            url: url, 
            synopsis: synopsis,
        }
        saveArticle(newArticle)
    }
});



// ------------------------------------------------------------------------------------------------------
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "closeDialog") {
        contentTarget.close()
    }
})


// Exported to Nutshell.js 
export const articleDialog = () => {
    createNewArticle()
};
        