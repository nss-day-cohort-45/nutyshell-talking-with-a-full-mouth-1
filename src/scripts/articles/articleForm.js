/*
    - Author: Meghan Semrad
    - Purpose of Module: 
        1. To create <form> that will appear in a <dialog> box for article form 
        2. Click Event on the "Save Article" button that gathers the values of the 
           user's typed in info and sends it through the saveArticle() function 
        3. Click Event on the Close button, which will close the <dialog> box
        4. articleDialog() function, whose purpose is to ensure the <dialog> is rendered, is
           exported to Nutshell.js so the render takes place with dashboard load 

*/


import { saveArticle } from './articleProvider.js';


// This is a <dialog> box in index.html
const contentTarget = document.querySelector(".articles__dialog");
const eventHub = document.querySelector(".container");



// ------------------------------------------------------------------------------------------------------


// Creates HTML for the form inside of the <dialog> box 

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


// Click event on the Save Article Button, which captures the values entered by user, which are then saved to the database

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
            timestamp: Date.now(),
            userId: document.getElementById("tryToReachId").innerHTML = sessionStorage.getItem("activeUser")
        }
        saveArticle(newArticle)
    }
});



// ------------------------------------------------------------------------------------------------------



eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "closeDialog") {
        contentTarget.close()
    }
});



// ------------------------------------------------------------------------------------------------------



// Exported to Nutshell.js so the form function is invoked and ready for use upon dashboard load 

export const articleDialog = () => {
    createNewArticle()
};
        