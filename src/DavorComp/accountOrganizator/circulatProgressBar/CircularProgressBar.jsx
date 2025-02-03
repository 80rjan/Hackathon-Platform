import React from "react";
import "./circularProgressBar.css";

const CircularProgressBar = ({progress, index,size}) => {
    const radius = 30;
    const strokeWidth = 3;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = 30;

    const colors = ["red", "cyan", "lightgreen", "yellow", "blue"];
    const color = colors[index % colors.length];

    return (
        <svg width={size} height={size} viewBox="0 0 70 70" className="progressBarContainer">
            <circle
                cx="35"
                cy="35"
                r={radius}
                stroke=""
                strokeWidth={strokeWidth}
                fill="none"
            />
            <circle
                cx="35"
                cy="35"
                r={radius}
                stroke={color}
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                style={{transition: "stroke-dashoffset 0.5s ease"}}
            />
            <text x="50%" y="50%" textAnchor="middle" stroke="#555" strokeWidth="1px" dy=".3em"
                  className="progressPercentage" stroke="white" fill="white" fontSize="0.8rem">
                {progress}
            </text>
        </svg>
    );
};

export default CircularProgressBar;
