import { createApp } from "vue";
import App from "./App.vue";
import firebase from "firebase/app";
import "./index.css";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFileDownload,
  faBorderStyle,
  faIgloo,
  faHandHoldingHeart,
  faUnlockAlt,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import {
  faJsSquare,
  faGithubSquare,
  faLinkedin,
  faAngular,
  faGitSquare,
  faSass,
  faGithub,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
library.add([
  faFileDownload,
  faJsSquare,
  faGithubSquare,
  faLinkedin,
  faAngular,
  faGitSquare,
  faSass,
  faGithub,
  faVuejs,
  faBorderStyle,
  faIgloo,
  faHandHoldingHeart,
  faUnlockAlt,
  faKey,
]);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
