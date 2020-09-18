import React, { Fragment, useRef } from 'react'
import './code-display.css'
import { copyToClipboard } from '../../utils'

export default function CodeDisplay({ uid = 235874 }) {
    const codeRef = useRef()
    const linkRef = useRef()

    return (
        <Fragment>
            <div className="code-display-title">Share</div>
            <div className="code-display-code-section">
                <div className="mb-5">Code:</div>
                <div className="code-display-code-wrapper">
                    <div className="code-display-code" ref={codeRef}>
                        {String(uid).slice(0, 3)}-{String(uid).slice(3, 6)}
                    </div>
                    <div className="code-display-copy-icon-wrapper" onClick={_ => copyToClipboard(codeRef.current.innerText)}>
                        <img src="./copy.svg" height="18px" alt="copy"/>
                    </div>
                </div>
            </div>
            <div className="full">
                <hr className="hr-text" data-content="OR" />
            </div>
            <div className="code-display-code-section">
                <div className="mb-5">Direct download link</div>
                <div className="code-display-code-wrapper">
                    <div className="code-display-code code-display-link" ref={linkRef}>
                        https://sendfileonline.com/?sid={uid}
                    </div>
                    <div className="code-display-copy-icon-wrapper" onClick={_ => copyToClipboard(linkRef.current.innerText)}>
                        <img src="./copy.svg" height="18px" alt="copy" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}