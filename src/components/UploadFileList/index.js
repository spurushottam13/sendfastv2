import React, { Fragment, useState } from 'react'

import Icon from '../../Icons'

export default function UploadFileList({ fileBucket, startUploading }) {
    const [tnc, setTnc] = useState(true)
    return (
        <Fragment>
            <div className="file-list">
                {
                    fileBucket.map(file => (
                        <div className="upload-stick-wrapper">
                            <div className="inline">
                                <div>
                                    {
                                        file.name.length > 20
                                            ? (file.name.substr(0, 20) + "..."
                                            ) : (file.name)
                                    }
                                </div>
                            </div>
                            <Icon.delete className="delete-icon" />
                        </div>
                    ))
                }
            </div>
            <div className="full">
            <div className="delete-after-wrapper">
                <div>Delete after</div> 
                <select>
                    <option value="after24">24 hour</option>    
                    <option value="onceDownload">downloaded</option>  
                    <option value="1Week">1 week</option>    
                </select>
            </div>
                <div className="terms-n-condition">
                    <input type="checkbox" checked={tnc} onChange={({target: {checked}}) => setTnc(checked)} />
                    <label>I agree terms & condition</label>
                </div>
                <div className={tnc ? "upload-btn" : "upload-btn disable" } onClick={e => tnc && startUploading(e)}>
                    Upload
                </div>
            </div>
        </Fragment>
    )
}