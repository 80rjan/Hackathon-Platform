import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import "./Footer.css"

export default function Footer() {
    return (
        <div id="footer">
            <Link to="/main">
                <h3 className="arcadeFont">Hackathon Arena</h3>
            </Link>
            <div id="footer-linksWrapper">
                <Link to="/auth" style={{color: 'white', }} className="arcadeFont">Hackathons</Link>
                <Link to="/auth" style={{color: 'white', }} className="arcadeFont">Users</Link>
                <Link to="/auth" style={{color: 'var(--red)', }} className="arcadeFont">Profile</Link>
            </div>
            <p className="arcadeFont" style={{fontSize: "0.6rem", color: "white"}}>Copyright 2024/25</p>
        </div>
    )
}