import React, { useState, Fragment } from "react";
import "./main.css";
import Download from "../Download";
import Upload from "../Upload";
import useDelayUnmount from "../../Hooks/useDelayUnmount";
import DownloadFiles from "../DownloadFiles";
import { AppInstall } from "../AppInstall";
// import BuyMeCoffee from "../BuyMeCoffee";
export default function Main() {
  const [isDownload, setIsDownload] = useState(true);
  const [fileBucket, setFileBucket] = useState();
  const shouldRenderChild = useDelayUnmount(isDownload, 400);
  return (
    <div className="main-section">
      {shouldRenderChild && (
        <Fragment>
          <div className="t1">
            <h1 className="t2 zero-margin">
              Now, share files online easily with just 6 digit code
            </h1>
            {/* <div className="t3">No SignUp   No Email   No Phone Number</div> */}
          </div>
          <Download
            setIsDownload={setIsDownload}
            setFileBucket={setFileBucket}
            isMounted={isDownload}
          />
        </Fragment>
      )}
      <div className="content-section">
        {fileBucket ? (
          <DownloadFiles {...fileBucket} />
        ) : (
          <Upload setIsDownload={setIsDownload} />
        )}
      </div>
      {/* <BuyMeCoffee /> */}
      <AppInstall />
      {/* <CircularIndicator/> */}
    </div>
  );
}
