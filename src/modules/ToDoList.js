class ToDoList {
  #toDoList;

  constructor() {
    const storedToDos = localStorage.getItem('to-do-list');
    this.#toDoList = storedToDos ? JSON.parse(storedToDos) : [];
  }

  get toDoList() {
    return this.#toDoList;
  }

  createToDoItem(description) {
    const newToDo = {
      index: this.#toDoList.length,
      description,
      completed: false,
    };

    this.#toDoList.push(newToDo);
    localStorage.setItem('to-do-list', JSON.stringify(this.#toDoList));
    return newToDo;
  }
}
export default ToDoList;
