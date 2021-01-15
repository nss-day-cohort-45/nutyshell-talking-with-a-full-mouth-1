import { friendList } from "./friends/friendList.js"
import { createArticleButton } from './articles/articleHTMLRepresentation.js';
import { articleDialog } from './articles/articleForm.js';
import { articleList } from './articles/articleList.js';
import { messageForm } from "./messages/messageForm.js"
import { messageList } from "./messages/messageList.js"
import { eventList } from "./events/eventList.js"
import { createNewEventButton } from "./events/eventForm.js"
import {newTaskButton} from './tasks/taskHTMLRep.js';
import {taskList} from './tasks/taskList.js';
import {taskDialog} from './tasks/taskForm.js';
import "./weather/weatherHTMLRep.js";


export const Nutshell = () => {
    // Render all your UI components here
    createArticleButton();
    articleDialog();
    articleList();
    messageForm()
        .then(() => {
        messageList()
    })
    
    friendList();

    newTaskButton();
    taskDialog();
    taskList();

    // Will rener the createNewEventButton and list of upcoming events on initial page load
    createNewEventButton();
    eventList();

    console.log("Nutshell has been rendered!")
    console.log("Session storage user id: ", sessionStorage.getItem("activeUser") )

    





}

