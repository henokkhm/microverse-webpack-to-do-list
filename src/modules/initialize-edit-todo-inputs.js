export const blurAllTodos = () => {
  const allTodoItems = document.querySelectorAll('.to-do-item');

  allTodoItems.forEach((toDoItem) => {
    toDoItem.classList.remove('focused');
    toDoItem.getElementsByClassName('to-do-item__description')[0].blur();
  });
};

const initializeEditToDoInputs = (toDoList) => {
  const toDoItemsContainer = document.querySelector('#to-do-list-target');
  toDoItemsContainer.addEventListener('click', (e) => {
    blurAllTodos();
    if (e.target.classList.contains('to-do-item__description')) {
      const currentToDoItem = e.target.parentNode;
      currentToDoItem.classList.add('focused');
      currentToDoItem
        .getElementsByClassName('to-do-item__description')[0]
        .focus();
    }
  });

  toDoItemsContainer.addEventListener('keyup', (e) => {
    if (e.target.classList.contains('to-do-item__description')) {
      const newDescription = e.target.value;
      const indexStr = e.target.dataset.toDoIndex;
      const index = parseInt(indexStr, 10);
      toDoList.updateToDoDescription(index, newDescription);
    }
  });
};

export default initializeEditToDoInputs;
