import { eventList } from "./events/eventList.js"
import { createNewEventButton } from "./events/eventForm.js"
import { createArticleButton } from './articles/articleHTMLRepresentation.js';
import { articleDialog } from './articles/articleForm.js';
import { articleList } from './articles/articleList.js';

export const Nutshell = () => {
    // Render all your UI components here
    createArticleButton();
    articleDialog();
    articleList();

    console.log("Nutshell has been rendered!")
    console.log("Session storage user id: ", sessionStorage.getItem("activeUser") )

eventList();
createNewEventButton();

}
