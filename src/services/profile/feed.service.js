import axios from "axios";
import { useUrlStore } from "@/stores/url";
import { useAuthStore } from "@/stores/authStore";

const store = useUrlStore();
const authStore = useAuthStore();

const { hostname } = window.location;

let API_URL = "";

if (hostname.includes("localhost")) {
  API_URL = `${store.urlApiDev}/feed/`;
} else if (hostname.includes("dev")) {
  API_URL = `${store.urlApiDev}/feed/`;
} else {
  API_URL = `${store.urlApiDev}/feed/`;
}

const axiosi = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Token ${authStore.token}`,
  },
});

class FeedService {
  getFeedList() {
    return axiosi.get(API_URL);
  }

  createFeed(data) {
    return axiosi.post(API_URL, data);
  }

  readFeedById(id) {
    return axiosi.get(`${API_URL}${id}/`);
  }

  updateFeed(id, data) {
    return axiosi.put(`${API_URL}${id}/`, data);
  }

  deleteFeed(id) {
    return axiosi.delete(`${API_URL}${id}/`);
  }
}

export default new FeedService();
