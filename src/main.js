import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
// import { loadFonts } from "./plugins/webfontloader";
import "./assets/css/app.css";

// loadFonts();

axios.defaults.baseURL =
  "https://inventory-2srom2hkb-saktialfansyahp.vercel.app/api";

// Set header dari localStorage
// const token = localStorage.getItem("token"); // Ganti 'token' dengan kunci yang Anda gunakan untuk menyimpan token di localStorage
// if (token) {
// }
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

createApp(App).use(router).use(store).use(vuetify).mount("#app");
