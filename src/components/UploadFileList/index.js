import React, { Fragment, useState } from "react";
import useModal from "../../Modal";
import { UploadTerms } from "../Terms";

import Icon from "../../Icons";

export default function UploadFileList({
  fileBucket,
  isLimitExceed,
  startUploading,
  deleteFile,
}) {
  const [expiryCode, setExpiryCode] = useState("after24");
  const [tnc, setTnc] = useState(true);
  const { showModal, ModalProvider } = useModal();

  return (
    <Fragment>
      <ModalProvider />
      <div className="file-list">
        {fileBucket.map((file, index) => (
          <div className="upload-stick-wrapper" key={file.name + index}>
            <div className="inline icon-width-limit">
              <div>
                {file.name.length > 20
                  ? file.name.substr(0, 20) + "..."
                  : file.name}
              </div>
            </div>
            <Icon.delete
              className="delete-icon"
              onClick={(_) => deleteFile(index)}
            />
          </div>
        ))}
      </div>
      <div className="full">
        <div className="delete-after-wrapper">
          <div>Delete after</div>
          <select
            onChange={({ target: { selectedOptions } }) =>
              setExpiryCode(selectedOptions[0].value)
            }
          >
            <option value="after24" defaultValue={true}>
              24 hour
            </option>
            <option value="onceDownload">download</option>
            <option value="1Week">1 week</option>
          </select>
        </div>
        {isLimitExceed && (
          <div className="limit-warn">
            File limit exceeded, please remove {isLimitExceed} of files
          </div>
        )}
        <div className="terms-n-condition">
          <input
            type="checkbox"
            checked={tnc}
            onChange={({ target: { checked } }) => setTnc(checked)}
          />
          <label
            onClick={(_) =>
              showModal({ component: UploadTerms, autoDisappear: false })
            }
          >
            I agree
            <span className="pointer text-primary"> Terms & Conditions </span>
          </label>
        </div>
        <div
          className={
            tnc && !isLimitExceed ? "upload-btn" : "upload-btn disable"
          }
          onClick={(e) => tnc && !isLimitExceed && startUploading(expiryCode)}
        >
          Upload
        </div>
      </div>
    </Fragment>
  );
}
