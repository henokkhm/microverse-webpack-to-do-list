import trashSrc from '../assets/icons/trash.svg';
import dotsSrc from '../assets/icons/dots.svg';

const generateToDoItemHTML = (toDoItem) => {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  const description = document.createElement('input');
  const deleteBtn = document.createElement('button');
  const trashIcon = document.createElement('img');
  const dragBtn = document.createElement('button');
  const dragIcon = document.createElement('img');

  li.classList.add('to-do-item');
  checkbox.classList.add('to-do-item__checkbox');
  description.classList.add('to-do-item__description');
  deleteBtn.classList.add('to-do-item__delete-btn');
  trashIcon.classList.add('to-do-item__trash-icon');
  dragBtn.classList.add('to-do-item__drag-btn');
  dragIcon.classList.add('to-do-item__drag-icon');

  description.value = `${toDoItem.description}`;
  trashIcon.src = trashSrc;
  deleteBtn.appendChild(trashIcon);
  dragIcon.src = dotsSrc;
  dragBtn.appendChild(dragIcon);

  if (toDoItem.completed) {
    description.classList.add('completed');
    checkbox.checked = true;
  } else {
    description.classList.remove('completed');
    checkbox.checked = false;
  }

  checkbox.setAttribute('data-to-do-index', toDoItem.index);
  description.setAttribute('data-to-do-index', toDoItem.index);
  trashIcon.setAttribute('data-to-do-index', toDoItem.index);
  dragBtn.setAttribute('data-to-do-index', toDoItem.index);

  li.appendChild(checkbox);
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
