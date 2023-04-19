import axios from "axios";
import { useUrlStore } from "@/stores/url";
import { useAuthStore } from "@/stores/authStore";

const store = useUrlStore();
const authStore = useAuthStore();

const { hostname } = window.location;

let API_URL = "";

if (hostname.includes("localhost")) {
  API_URL = `${store.urlApiDev}/profile/`;
} else if (hostname.includes("dev")) {
  API_URL = `${store.urlApiDev}/profile/`;
} else {
  API_URL = `${store.urlApiDev}/profile/`;
}

const axiosi = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Token ${authStore.token}`,
  },
});

class ProfileService {
  getProfileList() {
    return axiosi.get(API_URL);
  }

  createProfile(data) {
    return axiosi.post(API_URL, data);
  }

  readProfileById(id) {
    return axiosi.get(`${API_URL}${id}/`);
  }

  updateProfile(id, data) {
    return axiosi.put(`${API_URL}${id}/`, data);
  }

  deleteProfile(id) {
    return axiosi.delete(`${API_URL}${id}/`);
  }
}

export default new ProfileService();
