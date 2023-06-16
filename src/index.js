import ToDoList from './modules/ToDoList.js';
import renederToDos from './modules/render-to-dos.js';
import './styles/reset.css';
import './styles/main.css';

const myToDoList = new ToDoList();

window.addEventListener('load', () => renederToDos(myToDoList.toDoList));
