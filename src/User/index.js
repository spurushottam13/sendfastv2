import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { getFingerprintId, getIPLocation } from "../utils";

// SF0 -27-03-23
console.log("// SF0 -27-03-23");
firebase.initializeApp({
  apiKey: "AIzaSyDJSDpstvm8649g1vYFaFEWoe00zAqdEJY",
  authDomain: "sfo-13-08-24.firebaseapp.com",
  databaseURL:
    "https://sfo-13-08-24-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sfo-13-08-24",
  storageBucket: "sfo-13-08-24.appspot.com",
  messagingSenderId: "143420998",
  appId: "1:143420998:web:a2922f2e582349120aa447",
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
