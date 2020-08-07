import React from 'react'
import './left-content.css'
export default function LeftContent() {
    return (
        <div className="left-content-section">
            <div>
                <div className="hello-wrapper">
                    Hello <span className="hello-emoji" role="img" aria-label="hello">👋 </span>
                </div>
                <div className="comment">
                    Now, share your files easily with just 6 digit code
                </div>
                <div>
                    <div>
                       No SignUp &nbsp; No Email &nbsp; No Phone Number
                    </div>
                </div>
            </div>
        </div>
    )
}