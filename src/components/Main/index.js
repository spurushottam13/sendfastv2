import React, { useState, Fragment } from 'react'
import './main.css'
import Download from '../Download'
import Upload from '../Upload'
import useDelayUnmount from '../../Hooks/useDelayUnmount'
import CircularIndicator from '../CircularIndicator'
export default function Main() {
    const [isDownload, setIsDownload] = useState(true)
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
                        <Download isMounted={isDownload} />
                    </Fragment>
                )
            }
            <Upload setIsDownload={setIsDownload} />
            {/* <CircularIndicator/> */}
        </div>
    )
}