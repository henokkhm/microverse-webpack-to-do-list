import renederToDos from './render-to-dos.js';
import { blurAllTodos } from './initialize-edit-todo-inputs.js';

const form = document.getElementById('add-to-do-form');

const initializeAddToDoFormEventHandlers = (myToDoList) => {
  form.addEventListener('click', blurAllTodos);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = e.target.elements.description.value;
    myToDoList.createToDoItem(description);
    renederToDos(myToDoList.toDoList);
    e.target.reset();
  });
};

export default initializeAddToDoFormEventHandlers;
