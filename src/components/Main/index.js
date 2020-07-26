import React, { useState, Fragment } from 'react'
import './main.css'
import Download from '../Download'
import Upload from '../Upload'
import useDelayUnmount from '../../Hooks/useDelayUnmount'
import CircularIndicator from '../CircularIndicator'
import DownloadFiles from '../DownloadFiles'
export default function Main() {
    const [isDownload, setIsDownload] = useState(true)
    const [fileBucket, setFileBucket] = useState()
    const shouldRenderChild = useDelayUnmount(isDownload, 400);
    return (
        <div className="main-section">
            {
                shouldRenderChild && (
                    <Fragment>
                        <div className="t1">
                            <div className="t2"><span>Simple</span> <span>Free</span> & <span>Easy</span></div>
                            <div className="t3"> to share files online</div>
                        </div>
                        <Download setIsDownload={setIsDownload} setFileBucket={setFileBucket} isMounted={isDownload} />
                    </Fragment>
                )
            }
            <div className="content-section">
            {
                fileBucket ? (
                    <DownloadFiles {...fileBucket} />
                ) : (
                    <Upload setIsDownload={setIsDownload} />
                )
            }
            </div>
            
            {/* <CircularIndicator/> */}
        </div>
    )
}