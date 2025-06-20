import axios from "axios";

import { makeAutoObservable, runInAction } from "mobx";

let api = "http://37.27.29.18:8001/api/categories";

class AsyncTodo {
  data = [];
  constructor() {
    makeAutoObservable(this);
  }

  async get() {
    try {
      const { data } = await axios.get(api);
      runInAction(() => {
        this.data = data.data;
      });
    } catch (error) {
      console.error(error);
    }
  }
  async delka(id) {
    try {
      await axios.delete(`${api}?id=${id}`);
      this.get();
    } catch (error) {
      console.error(error);
    }
  }

  async addFunc(user) {
    try {
      await axios.post(api, user);
      this.get();
    } catch (error) {
      console.error(error);
    }
  }
  async editor(user) {
    try {
      await axios.put(api, user);
      this.get();
    } catch (error) {
      console.error(error);
    }
  }
}

export default new AsyncTodo();
