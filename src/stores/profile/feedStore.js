import { defineStore } from "pinia";

export const useFeedStore = defineStore("useFeedStore", {
  state: () => ({
    tasksData: [],
    feedsData: [],
  }),
  getters: {},
  actions: {},
});
