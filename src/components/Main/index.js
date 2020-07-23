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
                        <Download isMounted={isDownload} />
                    </Fragment>
                )
            }
            <Upload setIsDownload={setIsDownload} />
            {/* <CircularIndicator/> */}
        </div>
    )
}