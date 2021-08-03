import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseIcon from "@/components/BaseIcon.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";

createApp(App)
  .use(store)
  .use(router)
  .component("BaseIcon", BaseIcon)
  .component("BaseButton", BaseButton)
  .component("BaseInput", BaseInput)
  .mount("#app");
