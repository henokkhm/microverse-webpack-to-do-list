import ToDoList from './modules/ToDoList.js';
import renderToDos from './modules/render-to-dos.js';
import initializeAddToDoFormEventHandlers from './modules/initialize-add-to-do-form.js';
import initializeDeleteBtnEventHandlers from './modules/initialize-delete-btn-event-handlers.js';
import './styles/reset.css';
import './styles/main.css';

const myToDoList = new ToDoList();

window.addEventListener('load', () => renderToDos(myToDoList.toDoList));
initializeDeleteBtnEventHandlers(myToDoList);
initializeAddToDoFormEventHandlers(myToDoList);
