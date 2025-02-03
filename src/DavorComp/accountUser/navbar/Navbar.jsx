import React from 'react'
import "./navbar.css"
import edit from "../images/edit (1).png"
import html from "../images/tags.png"
import users from "../images/team.png"
import logout from "../images/check-out.png"
import myProfile from "../images/verified.png"
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navabrContainer">
            <Link to='/main' className="hackathonsTab">
                <img src={html}/>
                <p>Hackathons</p>
            </Link>
            <Link className="usersTab">
                <img src={users}/>
                <p>Users</p>
            </Link>

            <Link className="logout">
                <img src={logout}/>
                <p>LogOut</p>
            </Link>
            <Link className="editProfile">
                <img src={edit}/>
                <p>Edit Profile</p>
            </Link>

        </div>
    )
}
export default Navbar
