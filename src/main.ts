import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import firebase from 'firebase';

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyDcShxj76Vs_Tuk5dzbscaaa8M2negKk7I",
    authDomain: "pwa-vuejs-5a1fe.firebaseapp.com",
    databaseURL: "https://pwa-vuejs-5a1fe.firebaseio.com",
    projectId: "pwa-vuejs-5a1fe",
    storageBucket: "gs://pwa-vuejs-5a1fe.appspot.com/",
    messagingSenderId: "14439455045",
    appId: "1:14439455045:web:d633b24a0991a1adb3862c"
}

firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.usePublicVapidKey("BMjyu6x3_fFNxZ7_z6qaMdwBoeDAlKySPZp2kWJrepiRAb2BJM6ybuqXqZFfE5vpQLC5vwJ-l-n5v42pHxB3SKU");

messaging.requestPermission().then(() => {
  console.log('Notification permission granted');

  messaging.getToken().then((token) => {
      console.log(token);
    });
}).catch((err) => {
  console.log('Unable log', err);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
