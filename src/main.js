import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaAngleUp } from "oh-vue-icons/icons";

addIcons(FaAngleUp);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
