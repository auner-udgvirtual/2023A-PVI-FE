import axios from "axios";
import { useUrlStore } from "@/stores/url";
import { useAuthStore } from "@/stores/authStore";

const store = useUrlStore();
const authStore = useAuthStore();

const { hostname } = window.location;

let API_URL = "";

if (hostname.includes("localhost")) {
  API_URL = `${store.urlApiDev}/tasks/`;
} else if (hostname.includes("dev")) {
  API_URL = `${store.urlApiDev}/tasks/`;
} else {
  API_URL = `${store.urlApiDev}/tasks/`;
}

const axiosi = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Token ${authStore.token}`,
  },
});

class TaskService {
  getTaskList() {
    return axiosi.get(API_URL);
  }

  createTask(data) {
    return axiosi.post(API_URL, data);
  }

  readTaskById(id) {
    return axiosi.get(`${API_URL}${id}/`);
  }

  updateTask(id, data) {
    return axiosi.put(`${API_URL}${id}/`, data);
  }

  deactivateTask(id) {
    return axiosi.patch(`${API_URL}${id}/`, { status: "deactivated" });
  }

  deleteTask(id) {
    return axiosi.delete(`${API_URL}${id}/`);
  }
}

export default new TaskService();
