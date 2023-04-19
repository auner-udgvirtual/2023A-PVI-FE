import axios from "axios";
import { useUrlStore } from "@/stores/url";
// import { useAuthStore } from "@/stores/authStore";

const store = useUrlStore();
// const authStore = useAuthStore();

const { hostname } = window.location;

let API_URL = "";

if (hostname.includes("localhost")) {
  API_URL = `${store.urlApiDev}/`;
} else if (hostname.includes("dev")) {
  API_URL = `${store.urlApiDev}/`;
} else {
  API_URL = `${store.urlApiDev}/`;
}

class RTSService {
  // getTaskList()
  //   login(username, password) {
  //     return axios.post(API_URL, { username: username, password: password });
  //   }
}

export default new RTSService();
