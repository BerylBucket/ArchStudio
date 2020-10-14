import Vue from "vue";
import Contact from "./Contact";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Contact),
}).$mount("#app");
