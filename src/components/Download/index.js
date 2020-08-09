import React, { useState } from 'react'
import './download.css'
import firebase from 'firebase/app';
import 'firebase/database';
import Icon from '../../Icons';
import Loader from '../Loader';

export default function Download({isMounted, setFileBucket, setIsDownload}){
    const [isFetching, setIsFetching] = useState(false)
    const [shareID, setShareID] = useState("")
    const [isError, setIsError] = useState(false)

    const handleInput = ({target: {value}}) => {
        if(String(value).length <= 6) {
            setShareID(value)
        }
    }

    const reset = (event) => {
        event.stopPropagation()        
        setIsFetching(false)
        setIsError(false)
    }

    const handleFetch = (event) => {
        event.stopPropagation()
        setIsFetching(true)
        setIsError(false)
        firebase.database().ref('UID/' + shareID).once('value',function(snapshot){
            const response = snapshot.val()
            if(response){
                setFileBucket({...response, ...{shareID: shareID}})
                setIsDownload(false)
            }else{
                setIsError(true)
            }
        })
    }

    const iconHandler = (event) => {
        if(isError) return reset(event)
        if(!isFetching) return handleFetch(event)
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
                        isFetching ? (isError ? "icon-wrapper is-fetching inavalid" : "icon-wrapper is-fetching") : "icon-wrapper" 
                    }
                    onClick={iconHandler}
                >
                        {isFetching && !isError && (
                            <p>Fetching ... </p>
                        )}
                        {isError && (
                            <p>Invalid ShareID</p>
                        )}
                    {
                        isError ? (
                            <div className="icon-holder">
                                <Icon.cross />
                            </div>
                        ) : isFetching ? (
                            <Loader/>
                        ) : (
                            <img src="download.svg" style={{width: "50px"}} height="20px" alt="download"/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}