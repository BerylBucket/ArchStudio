import Vue from "vue";
import Portfolio from "./Portfolio";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Portfolio),
}).$mount("#app");
