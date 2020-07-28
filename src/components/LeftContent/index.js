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
                    it's <span className="attribute">Simple</span>, <span className="attribute">Free</span> and <span className="attribute">Easy</span> to share files
                </div>
                <div>
                    <div>
                        No Email
                    </div>
                    <div>
                        No SignUp
                    </div>
                    <div>
                        No Phone number ..... <span className="italic">just a SIX Digit Code</span>
                    </div>
                </div>
            </div>
        </div>
    )
}