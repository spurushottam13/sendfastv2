import React, {Fragment} from 'react'
import Icon from '../../Icons'
import './download-files.css'
import { convertBytes } from '../../utils'
import useModal from '../../Modal'
import { UploadTerms } from '../Terms'

export default function DownloadFiles({ downloadLinks, fileNames, totalFiles, shareID, totalSize }) {

    const handleDownload = (fileLink) => window.open(fileLink)
    const { showModal, ModalProvider } = useModal()

    return (
        <Fragment>
            <ModalProvider />
            <div className="download-files">
                <div className="header">
                    <div>
                        {shareID}
                    </div>
                    <div>
                        {totalFiles} Files
                </div>
                </div>
                <div className="file-list">
                    {
                        fileNames.map((name, index) => (
                            <div key={shareID+index} className="upload-stick-wrapper">
                                <div className="inline icon-width-limit">
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
                    <div className="tnc">
                        You Agree with
                    <span
                            onClick={_ => showModal({ component: UploadTerms, autoDisappear: false })}
                            className="pointer text-primary"
                        > Terms & Conditions </span>
                    on file download
                </div>
                </div>
            </div>
        </Fragment>
    )
}