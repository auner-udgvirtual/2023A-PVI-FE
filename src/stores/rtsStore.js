import { defineStore } from "pinia";

export const realTimeStore = defineStore("realTimeStore", {
  state: () => ({
    tasksData: [],
    feedsData: [],
  }),
  getters: {},
  actions: {},
});
