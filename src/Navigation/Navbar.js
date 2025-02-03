import "./Navbar.css"
import {Link} from "react-router-dom";
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <nav id="navbar">
            <Link to="/main">
                <h3 className="arcadeFont">Hackathon Arena</h3>
            </Link>
            <motion.div
                id="navbar-linksWrapper"
                initial={{opacity: 0, x: 40}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.5, ease: "easeIn"}}
            >
                <Link to="/auth" style={{color: 'var(--orange)', }} className="arcadeFont">Hackathons</Link>
                <Link to="/auth" style={{color: 'var(--lightGreen)', }} className="arcadeFont">Users</Link>
                <Link to="/account" style={{color: 'var(--red)', }} className="arcadeFont">Profile</Link>
            </motion.div>
        </nav>
    )
}