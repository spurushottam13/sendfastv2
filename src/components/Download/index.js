import React from 'react'
import './download.css'
export default function Download({isMounted}){
    return(
        <div className={isMounted ? "download-section" : "download-section removed-animtion"}>
            <div className="title">Download Files</div>
            <div className="wrapper">
                <input type="text" placeholder="XXX-XXX" />
                <div className="icon-wrapper">
                    <img src="download.svg" height="20px" alt="download"/>
                </div>
            </div>
        </div>
    )
}