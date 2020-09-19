import { useEffect } from "react";

export const convertBytes = (totalBytes) => {
  if (totalBytes < 1000000) {
    return Math.floor(totalBytes / 1000) + "KB";
  } else {
    return Math.floor(totalBytes / 1000000) + "MB";
  }
};

export const copyToClipboard = (text) => {
  var input = document.createElement("input");
  input.setAttribute("value", text);
  document.body.appendChild(input);
  input.select();
  var result = document.execCommand("copy");
  document.body.removeChild(input);
  return result;
};

export const getUrlParameter = (query) =>
  new URL(window.location.href).searchParams.get(query);

export const useMountEffect = (fun) => useEffect(fun, []);

export const sleep = (time) =>
  new Promise((resolve) => setTimeout((_) => resolve(), time));

export const getFingerprintId = () => {
  let fingerprintID = localStorage.getItem("FPID");
  if (fingerprintID) return fingerprintID;
  fingerprintID = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      // eslint-disable-next-line
      var r = (Math.random() * 16) | 0,
        // eslint-disable-next-line eqeqeq
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }
  );
  localStorage.setItem("FPID", fingerprintID);
  return fingerprintID;
};

export const getIPLocation = () =>
  new Promise((resolve) => {
    fetch("https://us-central1-notzillow.cloudfunctions.net/getCoordinates")
      .then((r) => r.json())
      .then(({ data }) => {
        resolve(data)
      })
      .catch(_ => 
        resolve({ coords: "NA", country: "NA" })
      );
  });

export const generateExpiryTime = (expiryCode) =>{
  if(expiryCode === 'after24'){
    return new Date().getTime() + 86400000
  }
  if(expiryCode === '1Week'){
    return new Date().getTime() + 604800000
  }
  if(expiryCode === 'onceDownload'){
    return 'ON_DOWNLOAD'
  }
}