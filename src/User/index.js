import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { getFingerprintId, getIPLocation } from "../utils";

// firebase.initializeApp({
//   apiKey: "AIzaSyDZcpLH-ucE-YIM99Vz2r0ipyyixc1WEsY",
//   authDomain: "send-fast-v2.firebaseapp.com",
//   databaseURL: "https://send-fast-v2.firebaseio.com",
//   projectId: "send-fast-v2",
//   storageBucket: "send-fast-v2.appspot.com",
//   messagingSenderId: "100946162990",
//   appId: "1:100946162990:web:07c78dc64b10f73a95f6bf",
// });

// firebase.initializeApp({
//   apiKey: "AIzaSyAhCPBvIrxjaO92zc3zDlBM_serfGZrfyI",
//     authDomain: "tempsendfast.firebaseapp.com",
//     databaseURL: "https://tempsendfast.firebaseio.com",
//     projectId: "tempsendfast",
//     storageBucket: "tempsendfast.appspot.com",
//     messagingSenderId: "657824223904",
//     appId: "1:657824223904:web:a22e731aa9aebe9486afc5",
//     measurementId: "G-EPPC6NGYCM"
// });

// SF0 -3-8-22
firebase.initializeApp({
  apiKey: "AIzaSyCElDMFlty6rxcf3VpbmlcnpJtuWlXXRO4",
  authDomain: "sfo-3-8-22.firebaseapp.com",
  databaseURL: "https://sfo-3-8-22.firebaseio.com",
  projectId: "sfo-3-8-22",
  storageBucket: "sfo-3-8-22.appspot.com",
  messagingSenderId: "1070869152003",
  appId: "1:1070869152003:web:035fd9c39346a7a04fe936",
});

const firebaseConfig = {};

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
