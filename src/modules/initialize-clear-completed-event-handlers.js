import renderToDos from './render-to-dos.js';

const initializeClearCompletedEventHandlers = (toDoList) => {
  const clearCompletedBtn = document.querySelector('#clear-completed-btn');
  clearCompletedBtn.addEventListener('click', () => {
    toDoList.removeCompleted();
    renderToDos(toDoList.toDoList);
  });
};

export default initializeClearCompletedEventHandlers;
