import React, {useEffect, useState} from 'react'
import "./appName.css"
import {Link} from "react-router-dom";

const AppName = () => {
   /* const [text, setText] = useState("");
    const fullText = "Hackathon Arena";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < fullText.length) {
                setText((prev) => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 150);

        return () => clearInterval(interval);
    }, [fullText]);*/
    return (
        <div className="appNameContainer">
            <Link to="/main">
                <h1>Hackathon <br/>Arena</h1>
            </Link>
        </div>
    )
}
export default AppName
