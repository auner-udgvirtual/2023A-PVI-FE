import { defineStore } from "pinia";

export const useTaskStore = defineStore("useTaskStore", {
  state: () => ({
    data: [],
  }),
  getters: {
    getOnDemand: (state) => {
      return () => state.data.filter((record) => record.type_task == 1);
    },

    getSanityChecks: (state) => {
      return () => state.data.filter((record) => record.type_task == 2);
    },

    getLongDailyChecks: (state) => {
      return () => state.data.filter((record) => record.type_task == 3);
    },

    getBlockedPausedTasks: (state) => {
      return () => state.data.filter((record) => record.type_task == 4);
    },

    getUpcomingTasks: (state) => {
      return () => state.data.filter((record) => record.type_task == 5);
    },

    getDesignTasks: (state) => {
      return () => state.data.filter((record) => record.type_task == 6);
    },

    getTestRunsFeatureOwners: (state) => {
      return () => state.data.filter((record) => record.type_task == 7);
    },

    getTaskById: (state) => {
      return (id) => state.data.find((record) => record.id == id);
    },
  },
  actions: {},
});
