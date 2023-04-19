import axios from "axios";
import { useUrlStore } from "@/stores/url";
import { useAuthStore } from "@/stores/authStore";

const store = useUrlStore();
const authStore = useAuthStore();

const { hostname } = window.location;

let API_URL = "";

if (hostname.includes("localhost")) {
  API_URL = `${store.urlApiDev}/task-type/`;
} else if (hostname.includes("dev")) {
  API_URL = `${store.urlApiDev}/task-type/`;
} else {
  API_URL = `${store.urlApiDev}/tasks-type/`;
}

const axiosi = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Token ${authStore.token}`,
  },
});

class TaskTypeService {
  getTaskTypeList() {
    return axiosi.get(API_URL);
  }

  createTaskType(data) {
    return axiosi.post(API_URL, data);
  }

  readTaskTypeById(id) {
    return axiosi.get(`${API_URL}${id}/`);
  }

  updateTaskType(id, data) {
    return axiosi.put(`${API_URL}${id}/`, data);
  }

  deleteTaskType(id) {
    return axiosi.delete(`${API_URL}${id}/`);
  }
}

export default new TaskTypeService();
