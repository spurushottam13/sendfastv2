import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { getFingerprintId, getIPLocation } from "../utils";

// SF0 -3-8-22
firebase.initializeApp({
  apiKey: "AIzaSyCElDMFlty6rxcf3VpbmlcnpJtuWlXXRO4",
  authDomain: "sfo-3-8-22.firebaseapp.com",
  databaseURL: "https://sfo-3-8-22-default-rtdb.firebaseio.com",
  projectId: "sfo-3-8-22",
  storageBucket: "sfo-3-8-22.appspot.com",
  messagingSenderId: "1070869152003",
  appId: "1:1070869152003:web:035fd9c39346a7a04fe936",
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
