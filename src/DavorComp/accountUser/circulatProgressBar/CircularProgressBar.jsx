import React from "react";
import "./circularProgressBar.css";

const CircularProgressBar = ({progress, index,size,str}) => {
    const radius = 30;
    const strokeWidth = 3;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    const colors = ["red", "cyan", "lightgreen", "yellow", "blue"];
    const color = colors[index % colors.length];

    const abbreviateName = (name) => {
        if (name === "JavaScript") {
            return "JS";
        }
        //JavaScript,C++,SQL,PYTHON
        if (name === "C++") {
            return "C++";
        }
        if (name === "SQL") {
            return "SQL";
        }
        if (name === "Python") {
            return "Python";
        }
        if (name === "C#") {
            return "C#";
        }
    }
    const abbreviation = str ? abbreviateName(str) : "";

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
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                stroke="#555"
                strokeWidth="1px"
                dy=".3em"
                className="progressPercentage"
                stroke="white"
                fill="white"
                fontSize="0.8rem"
            >
                {progress ? `${progress}%` : ""}
            </text>

            {str && (
                <text
                    x="50%"
                    y="55%"
                    textAnchor="middle"
                    stroke="#555"
                    strokeWidth="0.1px"
                    dy=".3em"
                    className="progressPercentage"
                    stroke="white"
                    fill="white"
                    fontSize="0.5rem"
                >
                    {abbreviation}
                </text>
            )}
        </svg>
    );
};

export default CircularProgressBar;
