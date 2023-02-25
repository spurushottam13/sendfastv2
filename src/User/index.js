import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { getFingerprintId, getIPLocation } from "../utils";

// SF0 -27-03-23
console.log("// SF0 -27-03-23");
firebase.initializeApp({
  apiKey: "AIzaSyBRD5lBie9TdjPNPh_H6tl1MAlfK7yEs5I",
  authDomain: "sfo-27-02-23.firebaseapp.com",
  databaseURL:
    "https://sfo-27-02-23-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sfo-27-02-23",
  storageBucket: "sfo-27-02-23.appspot.com",
  messagingSenderId: "988040714724",
  appId: "1:988040714724:web:2b4eaf34dc515a403e0ff1",
});

export const User = (function () {
  return {
    auth: false,
    uid: Math.floor(100000 + Math.random() * 900000),
    callbacks: [],
    onLogin: function (callback) {
      if (typeof callback === "function") {
        this.callbacks.push(callback);
      }
    },
    info: {
      href: window.location.href,
      fpid: getFingerprintId(),
      ts: new Date().getTime(),
      pwaStatus: window.localStorage.getItem("appInstall:status") || "false",
    },
    login: function () {
      firebase.auth().signInAnonymously().catch(console.error);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.info = {
            loginId: user.uid,
            loginMeta: user.metadata,
            ...this.info,
          };
          this.auth = true;
          this.callbacks.forEach((callback) => callback(this));
          getIPLocation()
            .then((data) => {
              this.info["ip-location"] = data;
              this.updateAnalytic();
            })
            .catch(this.updateAnalytic);
        } else {
          this.auth = false;
        }
      });
    },
    updateAnalytic: function () {
      firebase
        .database()
        .ref("analytic/" + this.info.fpid + "/" + this.info.ts)
        .set(this.info);
    },
  };
})();

// @type debug: Global variable export
if (window["SFO"]) {
  window["SFO"]["user"] = User;
} else {
  window["SFO"] = { user: User };
}
