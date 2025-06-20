import { makeAutoObservable } from "mobx";
class TodoStore {
  data = [
    {
      id: 1,
      name: "shuhrat",
    },
    {
      id: 2,
      name: "shuh",
    },
    {
      id: 3,
      name: "uhrat",
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
  delete(id) {
    this.data = this.data.filter((el) => el.id !== id);
  }
  addFunc(user) {
    this.data.push(user);
  }
  editStoreFunction(user) {
    this.data = this.data.map((el) => {
      return el.id === user.id ? { ...el, ...user } : el;
    });
  }
}

export default new TodoStore();
