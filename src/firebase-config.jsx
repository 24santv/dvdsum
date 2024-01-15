// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getAnalytics } from "@firebase/analytics";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from "@firebase/app-check";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "fir-demo2-4a2a1.firebaseapp.com",
  projectId: "fir-demo2-4a2a1",
  storageBucket: "gs://fir-demo2-4a2a1.appspot.com",
  messagingSenderId: "408526100168",
  appId: "1:408526100168:web:c5f3b91e177c65354eb7fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider(
    "6LdrDiApAAAAAFLTaUO_BaCf5yNcvmeOEHAeFLaf"
  ),
  isTokenAutoRefreshEnabled: true, // Set to true to allow auto-refresh.
});
const analytics = getAnalytics(app);
export const db = getFirestore(app);
