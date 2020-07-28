import React, { useState } from 'react'
import './download.css'
import firebase from 'firebase/app';
import 'firebase/database';

export default function Download({isMounted, setFileBucket, setIsDownload}){
    const [isFetching, setIsFetching] = useState(false)
    const [shareID, setShareID] = useState("")

    const handleInput = ({target: {value}}) => {
        if(String(value).length <= 6) {
            setShareID(value)
        }
    }

    const handleFetch = () => {
        setIsFetching(true)
        firebase.database().ref('UID/' + shareID).once('value',function(snapshot){
            setFileBucket(snapshot.val())
            setIsDownload(false)
        })
    }
    return(
        <div className={isMounted ? "download-section" : "download-section removed-animtion"}>
            <div className="title">Download Files</div>
            <div className={
                        isFetching ? "wrapper is-fetching-wrapper" : "wrapper" 
                    }>
                <input type="number" value={shareID} onChange={handleInput} placeholder="XXX-XXX" />
                <div 
                    className={
                        isFetching ? "icon-wrapper is-fetching" : "icon-wrapper" 
                    }
                    onClick={handleFetch}>
                        {isFetching && (
                            <p>Fetching ... </p>
                        )}
                    <img src="download.svg" height="20px" alt="download"/>
                </div>
            </div>
        </div>
    )
}