import renderToDos from './render-to-dos.js';

const toDoListTarget = document.querySelector('#to-do-list-target');

const initializeCheckboxEventHandlers = (toDoList) => {
  toDoListTarget.addEventListener('click', (e) => {
    if (e.target.classList.contains('to-do-item__checkbox')) {
      const indexStr = e.target.dataset.toDoIndex;
      const index = parseInt(indexStr, 10);
      toDoList.toggleToDoCompleted(index);
      renderToDos(toDoList.toDoList);
    }
  });
};

export default initializeCheckboxEventHandlers;
