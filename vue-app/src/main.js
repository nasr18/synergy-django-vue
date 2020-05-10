import Vue from "vue";

import BootstrapVue from "bootstrap-vue";
// import VeeValidate from "vee-validate";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import router from "./router";

Vue.use(BootstrapVue);
// Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
