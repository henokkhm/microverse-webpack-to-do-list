import ToDoList from './modules/ToDoList.js';
import renderToDos from './modules/render-to-dos.js';
import initializeAddToDoFormEventHandlers from './modules/initialize-add-to-do-form.js';
import initializeDeleteBtnEventHandlers from './modules/initialize-delete-btn-event-handlers.js';
import initializeEditToDoInputs from './modules/initialize-edit-todo-inputs.js';
import initializeCheckboxEventHandlers from './modules/initialize-checkbox-event-handlers.js';
import initializeClearCompletedEventHandlers from './modules/initialize-clear-completed-event-handlers.js';
import './styles/reset.css';
import './styles/main.css';

const myToDoList = new ToDoList();

renderToDos(myToDoList.toDoList);
initializeDeleteBtnEventHandlers(myToDoList);
initializeAddToDoFormEventHandlers(myToDoList);
initializeEditToDoInputs(myToDoList);
initializeCheckboxEventHandlers(myToDoList);
initializeClearCompletedEventHandlers(myToDoList);