import React, { Fragment } from 'react'

import Icon from '../../Icons'

export default function UploadFileList({ fileBucket, startUploading }) {
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
                <div className="terms-n-condition">
                    <input type="checkbox" />
                    <label>I agree terms & condition</label>
                </div>
                <div className="upload-btn" onClick={startUploading}>
                    Upload
                     </div>
            </div>
        </Fragment>
    )
}