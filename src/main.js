import Vue from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import router from "./router";
import VueAnalytics from "vue-analytics";

Vue.config.productionTip = false;

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: "UA-108233351-2",
  router
});

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");
