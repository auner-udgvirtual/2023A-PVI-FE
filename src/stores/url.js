import { defineStore } from "pinia";

export const useUrlStore = defineStore("url", {
  state: () => ({
    urlApiDev: "https://intlqa-tools-dev.partners.test-godaddy.com/rts-api",
  }),
});
