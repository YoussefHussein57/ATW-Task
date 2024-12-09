import { createApp } from "vue";
import App from "./App.vue";

import "@/styles/global.scss";

import CustomButton from "./components/ui/MyButton.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faObjectGroup,
  faPen,
  faPaintbrush,
  faPlay,
  faLocationDot,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// Add icons to the library
library.add(
  faFacebookSquare,
  faLinkedin,
  faTwitter,
  faObjectGroup,
  faPen,
  faPaintbrush,
  faPlay,
  faLocationDot,
  faMobileScreen,
  faEnvelope
);

// Create the Vue app
const app = createApp(App);

// Register CustomButton globally
app.component("CustomButton", CustomButton);

// Register FontAwesomeIcon as a global component
app.component("font-awesome-icon", FontAwesomeIcon);

// Mount the app
app.mount("#app");
