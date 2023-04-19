import { defineStore } from "pinia";

export const useAuthStore = defineStore("useAuthStore", {
  state: () => ({
    token: null, // Estado para almacenar el token de autenticación
  }),
  getters: {
    isAuthenticated() {
      // Getter para verificar si el usuario está autenticado
      return this.token !== null;
    },
  },
  actions: {
    setToken(token) {
      // Acción para guardar el token en el estado
      this.token = token;
    },
    clearToken() {
      // Acción para borrar el token del estado
      this.token = null;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "RT_Status_Dashboard",
        storage: localStorage,
      },
    ],
  },
});
