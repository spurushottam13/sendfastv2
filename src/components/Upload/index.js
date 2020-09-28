import React, { useState, Fragment, useRef, useEffect } from 'react'
import './upload.css'
import FileUpload from './upload'
import Progress from '../Progress'
import UploadFileList from '../UploadFileList'
import CodeDisplay from '../CodeDisplay'
import { convertBytes } from '../../utils'
import { User } from '../../User'

export default function Upload({ setIsDownload }) {
   const [fileBucket, updateFileBucket] = useState([])
   const [isUploading, setIsUploading] = useState(false)
   const [isUploaded, setIsUploaded] = useState(false)
   const [progress, setProgress] = useState(0)
   const [currentComponent, setCurrentComponent] = useState('DEFAULT')
   const fileInput = useRef()
   const [isLimitExceed, setLimitExceed] = useState(false)

   const handleAdd = ({ target: { files } }) => {
      setIsDownload(false)
      files = Array.from(files)
      updateFileBucket(files)
   }

   useEffect(() => {
      const LIMIT = 1073741824 // 1GB
      let totalFileSize = 0
      fileBucket.forEach(({size}) => totalFileSize += size)
      if(totalFileSize > LIMIT){
         setLimitExceed(convertBytes(totalFileSize - LIMIT))
      }else{
         setLimitExceed(false)
      }
   },[fileBucket])

   const startUploading = (expiryCode) => {
      setIsUploading(true)
      FileUpload.start({
         uid: User.uid,
         expiryCode,
         bucket: fileBucket,
         onProgress: data => setProgress(data),
         onSuccess: downloadLinks => {
            setIsUploaded(true) && setIsUploading(false)
         }
      })
   }

   const deleteFile = (index) => {
      const temp = [...fileBucket]
      temp.splice(index,1)
      updateFileBucket(temp)
   }

   useEffect(() => {
      if (fileBucket.length && isUploading) setCurrentComponent('PROGRESS')
      if (fileBucket.length && !isUploading) setCurrentComponent('FILE_LIST')
      if (fileBucket.length && isUploaded) setCurrentComponent('DISPLAY_CODE')
   }, [fileBucket, isUploading, isUploaded])

   if (currentComponent === 'PROGRESS') return (<Progress {...progress} />)
   if (currentComponent === 'FILE_LIST') return (<UploadFileList fileBucket={fileBucket} isLimitExceed={isLimitExceed} deleteFile={deleteFile} startUploading={startUploading} />)
   if (currentComponent === 'DISPLAY_CODE') return (<CodeDisplay uid={User.uid} />)

   return (
      <Fragment>
         <h1 className="title zero-margin">
            Free online files sharing
         </h1>
         <div className="share-btn" onClick={_ => fileInput.current.click()}>
            <input
               className="hidden"
               type="file"
               onChange={handleAdd}
               multiple
               ref={fileInput}
            />
            <img src="share.svg" alt="share" />
            SHARE
         </div>
         <div className="footer">
            No Signup, No Email
         </div>
      </Fragment>
   )
}
