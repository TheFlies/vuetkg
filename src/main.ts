import { createApp } from "vue";
import firebase from "firebase/app";
import "firebase/auth";

import App from "./App.vue";
// import router from "./router";
// import store from "./store";

// import "./plugins";
// import "./permission";

// import "./registerServiceWorker";

const app = createApp(App);

/* eslint-disable no-new */
// firebase.auth().onAuthStateChanged(() => {
//   if (!app) {
//     app = new Vue({
//       router,
//       store,
//       render: (h) => h(App),
//       data: {
//         // Chartist
//       },
//     }).$mount("#app");
//   }
// });

app.mount('#app')