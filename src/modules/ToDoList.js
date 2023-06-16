class ToDoList {
  #toDoList;

  constructor() {
    const storedToDos = localStorage.getItem('to-do-list');
    this.#toDoList = storedToDos ? JSON.parse(storedToDos) : [];
  }

  get toDoList() {
    return this.#toDoList;
  }
}
export default ToDoList;
