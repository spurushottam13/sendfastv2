import React, { useRef, useEffect } from 'react'
import './circular-indicator.css'
export default function CircularIndicator({ progress = 100 }) {
    const circle = useRef()
    useEffect(() => {
        const circumference = circle.current.r.baseVal.value * 2 * Math.PI;
        circle.current.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.current.style.strokeDashoffset = `${circumference}`;
    }, [])

    useEffect(() => {
        const circumference = circle.current.r.baseVal.value * 2 * Math.PI;
        const offset = circumference - progress / 100 * circumference;
        circle.current.style.strokeDashoffset = offset;
    }, [progress])

    return (
        <svg
            className="progress-ring"
            width="150"
            height="150">
            <circle
                className="progress-ring__circle"
                stroke="var(--primary)"
                strokeLinecap="round"
                strokeWidth="10"
                ref={circle}
                fill="var(--background)"
                r="67"
                cx="50%"
                cy="50%" 
            />
            <text 
                x="50%" 
                y="50%" 
                fill="var(--primary-dark)" 
                dominantBaseline="middle" 
                textAnchor="middle" 
                className="label"
            >{progress + "%"}</text>
        </svg>
    )
}