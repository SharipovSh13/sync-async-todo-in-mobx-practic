import { makeAutoObservable } from "mobx";

class counterStore {
  count = 0;
  constructor() {
    makeAutoObservable(this);
  }
  increment() {
    this.count++;
  }
}

const counter = new counterStore();
export default counter;
