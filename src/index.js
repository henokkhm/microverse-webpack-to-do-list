import './styles/reset.css';
import './styles/main.css';

const sampleToDos = [
  {
    description: 'Work on a personal coding project',
    completed: false,
    index: 0,
  },
  {
    description: 'Take part in an online coding challenge or competition',
    completed: false,
    index: 1,
  },
  {
    description: 'Attend a virtual tech meetup or webinar',
    completed: false,
    index: 2,
  },
  {
    description: 'Read a technical book or blog',
    completed: false,
    index: 3,
  },
  {
    description: 'Review and refactor existing code for optimization',
    completed: false,
    index: 4,
  },
];

const toDoListTarget = document.getElementById('to-do-list-target');

const generateToDoItemHTML = (toDoItem) => {
  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  const description = document.createElement('span');
  const deleteBtn = document.createElement('button');
  const dragBtn = document.createElement('button');

  li.classList.add('to-do-item');
  description.classList.add('to-do-item__description');
  deleteBtn.classList.add('to-do-item__delete-btn');

  description.innerText = `${toDoItem.description}`;
  deleteBtn.innerText = 'Delete';
  deleteBtn.setAttribute('data-to-do-index', toDoItem.index);
  dragBtn.setAttribute('data-to-do-index', toDoItem.index);

  li.appendChild(checkBox);
  li.appendChild(description);
  li.appendChild(deleteBtn);
  li.appendChild(dragBtn);
  return li;
};

const renederToDos = () => {
  sampleToDos.forEach((toDoItem) => {
    const html = generateToDoItemHTML(toDoItem);
    toDoListTarget.appendChild(html);
  });
};

window.addEventListener('load', renederToDos);
