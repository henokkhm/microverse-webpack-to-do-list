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

  deleteToDoItem(index) {
    this.#toDoList = this.#toDoList.filter(
      (toDoItem) => toDoItem.index !== index,
    );

    // Update indexes
    this.#toDoList.sort((toDo1, toDo2) => {
      if (toDo1.index > toDo2.index) {
        return 1;
      }
      return -1;
    });

    this.#toDoList.forEach((toDoItem, index) => {
      toDoItem.index = index;
    });

    localStorage.setItem('to-do-list', JSON.stringify(this.#toDoList));
  }

  updateToDoDescription(index, newDescription) {
    this.#toDoList = this.#toDoList.map((toDoItem) => {
      if (toDoItem.index === index) {
        return { ...toDoItem, description: newDescription };
      }
      return toDoItem;
    });

    localStorage.setItem('to-do-list', JSON.stringify(this.#toDoList));
  }

  toggleToDoCompleted(index) {
    this.#toDoList = this.#toDoList.map((toDoItem) => {
      if (toDoItem.index === index) {
        return { ...toDoItem, completed: !toDoItem.completed };
      }
      return toDoItem;
    });

    localStorage.setItem('to-do-list', JSON.stringify(this.#toDoList));
  }
}
export default ToDoList;
