import React, { Fragment } from 'react'
import './code-display.css'

export default function CodeDisplay({ uid = 235874 }) {
    return (
        <Fragment>
            <div className="code-display-title">Share</div>
            <div className="code-display-code-section">
                <div className="mb-5">Code:</div>
                <div className="code-display-code-wrapper">
                    <div className="code-display-code">
                        {String(uid).slice(0, 3)}-{String(uid).slice(3, 6)}
                    </div>
                    <div className="code-display-copy-icon-wrapper">
                        <img src="./copy.svg" height="18px" />
                    </div>
                </div>
            </div>
            <div className="full">
                <hr className="hr-text" data-content="OR" />
            </div>
            <div className="code-display-code-section">
                <div className="mb-5">Direct download link</div>
                <div className="code-display-code-wrapper">
                    <div className="code-display-code code-display-link">
                        https://filebucket.com?u={uid}
                    </div>
                    <div className="code-display-copy-icon-wrapper">
                        <img src="./copy.svg" height="18px" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}