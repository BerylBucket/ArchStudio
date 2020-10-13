import Vue from "vue";
import Ho from "./Ho";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Ho)
}).$mount("#app");
