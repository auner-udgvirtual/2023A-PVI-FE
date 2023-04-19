import { defineStore } from "pinia";

export const useTaskTypeStore = defineStore("useTaskTypeStore", {
  state: () => ({
    tasksData: [],
    feedsData: [],
  }),
  getters: {},
  actions: {},
});
