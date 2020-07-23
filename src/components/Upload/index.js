import React, { useState, Fragment, useRef, useEffect } from 'react'
import './upload.css'
import FileUpload from './upload'
import Progress from '../Progress'
import UploadFileList from '../UploadFileList'
import CodeDisplay from '../CodeDisplay'

export default function Upload({ setIsDownload }) {
   const [fileBucket, updateFileBucket] = useState([])
   const [isUploading, setIsUploading] = useState(false)
   const [isUploaded, setIsUploaded] = useState(false)
   const [progress, setProgress] = useState(0)
   const [uid] = useState(Math.floor(100000 + Math.random() * 900000))
   const [currentComponent, setCurrentComponent] = useState('DEFAULT')
   const fileInput = useRef()
   const uploadRef = useRef()

   const handleAdd = ({ target: { files } }) => {
      setIsDownload(false)
      files = Array.from(files)
      updateFileBucket(files)
   }
   const startUploading = () => {
      setIsUploading(true)
      FileUpload.start({
         bucket: fileBucket,
         uid: uid,
         onProgress: data => setProgress(data),
         onSuccess: _ => setIsUploaded(true) && setIsUploading(false)
      })
  }

//   useEffect(() => {
//    if(currentComponent === 'FILE_LIST'){
//       uploadRef.current.style.height = uploadRef.current.offsetHeight > 300 ? uploadRef.current.offsetHeight + "px" : '300px'
//    }else{
//       uploadRef.current.style.height = ""
//    }
//   },[currentComponent])

  useEffect(() => {
     if(fileBucket.length && isUploading) setCurrentComponent('PROGRESS')
     if(fileBucket.length && !isUploading) setCurrentComponent('FILE_LIST')
     if(fileBucket.length && isUploaded) setCurrentComponent('DISPLAY_CODE')
  },[fileBucket, isUploading, isUploaded])

   return (
      <div className="upload-section" ref={uploadRef}>
         {
            currentComponent === 'PROGRESS' && (<Progress {...progress} />)
         }
         {
            currentComponent === 'FILE_LIST' && (
               <UploadFileList fileBucket={fileBucket} startUploading={startUploading} />
            )
         }
         {
            currentComponent === 'DISPLAY_CODE' && (
               <CodeDisplay uid={uid} />
            )
         }
         {
            currentComponent === 'DEFAULT' && (
               <Fragment>
                     <div className="title">
                        Share files with 6 digit code
                            </div>
                     <div className="share-btn" onClick={_ => fileInput.current.click()}>
                        <input
                           className="hidden"
                           type="file"
                           onChange={handleAdd}
                           multiple
                           ref={fileInput}
                        />
                        <img src="share.svg" alt="share"/>
                                    SHARE
                                </div>
                     <div className="footer">
                        No Signup, No Email
                             </div>
                  </Fragment>
            )
         }
         {/* {
            fileBucket.length ? isUploading ? (
               <Progress {...progress} />
            ) :(
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
            ) : (
                  <Fragment>
                     <div className="title">
                        Share files with 6 digit code
                            </div>
                     <div className="share-btn" onClick={_ => fileInput.current.click()}>
                        <input
                           className="hidden"
                           type="file"
                           onChange={handleAdd}
                           multiple
                           ref={fileInput}
                        />
                        <img src="share.svg" alt="share"/>
                                    SHARE
                                </div>
                     <div className="footer">
                        No Signup, No Email
                             </div>
                  </Fragment>
               )
         } */}
      </div>
   )
}
