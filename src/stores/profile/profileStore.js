import { defineStore } from "pinia";

export const useProfileStore = defineStore("useProfileStore", {
  state: () => ({
    tasksData: [],
    feedsData: [],
  }),
  getters: {},
  actions: {},
});
