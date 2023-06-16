class ToDoList {
  #toDoList;

  constructor() {
    const storedToDos = localStorage.getItem('to-do-list');
    this.#toDoList = storedToDos ? JSON.parse(storedToDos) : [];
  }

  get toDoList() {
    return this.#toDoList;
  }

  saveToLocalstorage() {
    localStorage.setItem('to-do-list', JSON.stringify(this.#toDoList));
  }

  createToDoItem(description) {
    const newToDo = {
      index: this.#toDoList.length + 1,
      description,
      completed: false,
    };

    this.#toDoList.push(newToDo);
    this.saveToLocalstorage();
    return newToDo;
  }

  deleteToDoItem(index) {
    const idx = parseInt(index, 10);
    this.#toDoList = this.#toDoList.filter(
      (toDoItem) => toDoItem.index !== idx,
    );

    // Update indexes
    this.#toDoList.sort((toDo1, toDo2) => {
      if (toDo1.index > toDo2.index) {
        return 1;
      }
      return -1;
    });

    this.#toDoList.forEach((toDoItem, index) => {
      toDoItem.index = index + 1;
    });

    this.saveToLocalstorage();
  }

  updateToDoDescription(index, newDescription) {
    this.#toDoList = this.#toDoList.map((toDoItem) => {
      if (toDoItem.index === index) {
        return { ...toDoItem, description: newDescription };
      }
      return toDoItem;
    });

    this.saveToLocalstorage();
  }

  toggleToDoCompleted(index) {
    this.#toDoList = this.#toDoList.map((toDoItem) => {
      if (toDoItem.index === index) {
        return { ...toDoItem, completed: !toDoItem.completed };
      }
      return toDoItem;
    });

    this.saveToLocalstorage();
  }

  removeCompleted() {
    this.#toDoList = this.#toDoList.filter((toDoItem) => !toDoItem.completed);
    this.saveToLocalstorage();
  }
}
export default ToDoList;
