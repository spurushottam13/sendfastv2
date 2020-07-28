import React from 'react'
import Icon from '../../Icons'
import './download-files.css'
import { convertBytes } from '../../utils'
export default function DownloadFiles({ downloadLinks, fileNames, totalFiles, totalSize }) {
    console.log(downloadLinks)
    const handleDownload =(fileLink) => {
        console.log("Called", fileLink)
        window.open(fileLink)
    }
    return (
        <div className="download-files">
            <div className="header">
                <div>
                    5305896
                </div>
                <div>
                    {totalFiles} Files
                </div>
            </div>
            <div className="file-list">
                {
                    fileNames.map((name, index) => (
                        <div className="upload-stick-wrapper">
                            <div className="inline">
                                <div>
                                    {
                                        name.length > 20
                                            ? (name.substr(0, 20) + "..."
                                            ) : (name)
                                    }
                                </div>
                            </div>
                            <Icon.download color={'var(--primary)'} onClick={_ => handleDownload(downloadLinks[index])} className="delete-icon" />
                        </div>
                    ))
                }
            </div>
            <div>
                <div className="footer-text mb10">
                    <div>Expiry: 1 download</div>
                    <div>Total Size: {convertBytes(totalSize)}</div>
                </div>
                <div className="footer-text">
                    You Agree with terms & condition on file download
                </div>
            </div>
        </div>
    )
}