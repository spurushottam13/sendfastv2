import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

firebase.initializeApp({
    apiKey: "AIzaSyDZcpLH-ucE-YIM99Vz2r0ipyyixc1WEsY",
    authDomain: "send-fast-v2.firebaseapp.com",
    databaseURL: "https://send-fast-v2.firebaseio.com",
    projectId: "send-fast-v2",
    storageBucket: "send-fast-v2.appspot.com",
    messagingSenderId: "100946162990",
    appId: "1:100946162990:web:07c78dc64b10f73a95f6bf"
});

const FileUpload = (function () {
    return {
        storageRef: firebase.storage().ref(),
        progress: {
            percentage: 0,
            size: 0,
            currentIndex: 0
        },
        bytesTransferredArray: [],
        dowloadLinks:[],
        fileNames: [],
        totalFiles: 0,
        totalFileSize: 0,
        upload: function (file, index) {
            return new Promise((resolve, reject) => {
                console.log("Current filename: " + file.name)
                const metadata = {
                    'Content-Disposition': 'attachment; filename='+file.name,
                }
                const uploadTask = this.storageRef.child(this.uid + '/' + file.name).put(file, metadata)
                uploadTask.on('state_changed', ({ bytesTransferred, totalBytes }) => {
                    this.bytesTransferredArray[index] = bytesTransferred
                    const totalBytesTransfered = this.bytesTransferredArray.reduce((a,c) => (a+c))
                    this.onProgress({
                        percentage: Math.floor(totalBytesTransfered / this.totalFileSize * 100),
                        size: `${this.convertBytes(totalBytesTransfered)} / ${this.convertBytes(this.totalFileSize)}`,
                        file: `${parseInt(index) + 1 }/${this.totalFiles}`,
                        name: file.name
                    })
                },(error) => console.error(error) ,  () => {
                    console.log("File Complete", file.name)
                    uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                        this.dowloadLinks[index] = url
                        resolve()
                    })
                })
            })
        },
        start: async function ({ bucket, onProgress, uid, expiryCode, onSuccess }) {
            this.onProgress = onProgress
            this.uid = uid
            this.expiryCode = expiryCode
            bucket.forEach(({ size, name }) => {
                this.totalFileSize += size
                this.fileNames.push(name)
            })
            this.totalFiles = bucket.length
            for (const index in bucket) {
                await this.upload(bucket[index], index)
            }
            await this.updateDB()
            if (typeof onSuccess === 'function') {
                onSuccess(this.dowloadLinks)
            } else {
                console.error('Firebase Upload: onSuccess not provided')
            }
        },
        updateDB: function(){
            return new Promise((resolve, reject) => {
                firebase.database().ref('UID/'+this.uid).set({
                    fileNames: this.fileNames,
                    downloadLinks: this.dowloadLinks,
                    totalFiles: this.totalFiles,
                    totalSize: this.totalFileSize,
                    expiryCode: this.expiryCode,
                    uploadTime: new Date().getTime()
                })
                .then(resolve)
                .catch(_ => console.error("Can not update DB", _))
            })
        },        
        convertBytes: (totalBytes) => {
            if (totalBytes < 1000000) {
                return Math.floor(totalBytes / 1000) + 'KB';
            } else {
                return Math.floor(totalBytes / 1000000) + 'MB';
            }
        }
    }
})()

export default FileUpload