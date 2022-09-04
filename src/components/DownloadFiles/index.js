import React, { Fragment, useState, useEffect } from "react";
import Icon from "../../Icons";
import "./download-files.css";
import { convertBytes } from "../../utils";
import useModal from "../../Modal";
import { UploadTerms } from "../Terms";
// import { EventEmitter } from '../../EventEmitter'

export default function DownloadFiles({
  downloadLinks,
  expiryCode,
  fileNames,
  totalFiles,
  shareID,
  totalSize,
}) {
  const handleDownload = (index) => {
    downloadStatus[index] = true;
    updateDownloadStatus([...downloadStatus]);
    window.open(downloadLinks[index]);
  };

  const { showModal, ModalProvider } = useModal();
  const [downloadStatus, updateDownloadStatus] = useState(
    Array(totalFiles)
      .fill()
      .map((_) => false)
  );

  useEffect(() => {
    if (
      downloadStatus.filter((i) => !!i).length === totalFiles &&
      expiryCode === "onceDownload"
    ) {
      fetch(
        `https://sfo-scheduler.netlify.app/api/killUID?uid=${shareID}`
      ).catch(console.error);
    }
  }, [downloadStatus, shareID, expiryCode, totalFiles]);

  // useEffect(() => {
  //     EventEmitter.emit('showAppIntall')
  // },[])

  return (
    <Fragment>
      <ModalProvider />
      <div className="download-files">
        <div className="header">
          <div>{shareID}</div>
          <div>{totalFiles} Files</div>
        </div>
        {expiryCode === "onceDownload" && (
          <div className="delete-warn">
            Files will be deleted after all download
          </div>
        )}
        <div className="file-list">
          {fileNames.map((name, index) => (
            <div key={shareID + index} className="upload-stick-wrapper">
              <div className="inline icon-width-limit">
                <div>
                  {name.length > 20 ? name.substr(0, 20) + "..." : name}
                </div>
              </div>
              <Icon.download
                color={"var(--primary)"}
                onClick={(_) => handleDownload(index)}
                className="delete-icon"
              />
            </div>
          ))}
        </div>
        <div>
          <div className="footer-text mb10">
            <div>Expiry: 1 download</div>
            <div>Total Size: {convertBytes(totalSize)}</div>
          </div>
          <div className="tnc">
            You Agree with
            <span
              onClick={(_) =>
                showModal({ component: UploadTerms, autoDisappear: false })
              }
              className="pointer text-primary"
            >
              {" "}
              Terms & Conditions{" "}
            </span>
            on file download
          </div>
        </div>
      </div>
    </Fragment>
  );
}
