import renderToDos from './render-to-dos.js';

const toDoListTarget = document.querySelector('#to-do-list-target');

const initializeDeleteBtnEventHandlers = (toDoList) => {
  toDoListTarget.addEventListener('click', (e) => {
    if (e.target.classList.contains('to-do-item__delete-btn')) {
      const index = e.target.dataset.toDoIndex;
      toDoList.deleteToDoItem(index);
      renderToDos(toDoList.toDoList);
    }
  });
};

export default initializeDeleteBtnEventHandlers;
