import React from 'react'
import './terms.css'

export function UploadTerms({ closeModal }) {
   return (
      <div className="terms-wrapper">
         <div className="heading">
            <span>Terms and Conditions &nbsp;</span>
            <span className="pointer" onClick={closeModal}>Close</span>
         </div>
         <ul className="point">
            <li>We collect <strong>NO Personal data</strong> of yours, we only store two anayltic data.
               <ul>
                  <li>Number of time user visted</li>
                  <li>source info from which/where (IP location) user visited</li>
               </ul>
            </li>
            <li>We <strong>NEVER</strong> go through your files/data, so we <strong>Don't Scan</strong> also, therefore download only if you trust the sharing user. </li>
            <li>We fermily believe, cookies should only comes from your grandmother, so <strong>No third party cookies</strong>.</li>
            <li>As a Freeware app, we can't provide any Guarantee/Warranty in any type of our service.</li>
         </ul>
      </div>
   )
}