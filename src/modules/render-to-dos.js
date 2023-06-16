const generateToDoItemHTML = (toDoItem) => {
  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  const description = document.createElement('input');
  const deleteBtn = document.createElement('button');
  const dragBtn = document.createElement('button');

  li.classList.add('to-do-item');
  description.classList.add('to-do-item__description');
  deleteBtn.classList.add('to-do-item__delete-btn');

  description.value = `${toDoItem.description}`;
  deleteBtn.innerText = 'Delete';

  description.setAttribute('data-to-do-index', toDoItem.index);
  deleteBtn.setAttribute('data-to-do-index', toDoItem.index);
  dragBtn.setAttribute('data-to-do-index', toDoItem.index);

  li.appendChild(checkBox);
  li.appendChild(description);
  li.appendChild(deleteBtn);
  li.appendChild(dragBtn);
  return li;
};

const renderToDos = (toDoArr) => {
  const toDoListTarget = document.getElementById('to-do-list-target');
  toDoListTarget.innerHTML = '';

  toDoArr.forEach((toDoItem) => {
    const html = generateToDoItemHTML(toDoItem);
    toDoListTarget.appendChild(html);
  });
};

export default renderToDos;
