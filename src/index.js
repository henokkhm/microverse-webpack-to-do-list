import ToDoList from './modules/ToDoList.js';
import renederToDos from './modules/render-to-dos.js';
import initializeAddToDoFormEventHandlers from './modules/initialize-add-to-do-form.js';
import './styles/reset.css';
import './styles/main.css';

const myToDoList = new ToDoList();
initializeAddToDoFormEventHandlers(myToDoList);

window.addEventListener('load', () => renederToDos(myToDoList.toDoList));
