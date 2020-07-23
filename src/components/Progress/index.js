import React, { Fragment } from 'react'
import CircularIndicator from '../CircularIndicator'
import './progress.css'

export default function Progress({ percentage, size, file, name }) {
    // const progress = {
    //     percentage: 50,
    //     size: '25KB/1.2MB',
    //     file: '4/5',
    //     name: 'Helo.pdf'
    // }
    return (
        <Fragment>
            <div></div>
            <CircularIndicator progress={percentage} />
            <div className="mg-top-10">
                {
                    name && name.length > 20
                        ? (name.substr(0, 20) + "..."
                        ) : (name)
                }
            </div>
            <div className="progress-size">
                {size}
            </div>
            <div className="inline full sb text-dark">
                <div>Uploading...</div>
                <div>
                    {file}
                </div>
            </div>
        </Fragment>
    )
}