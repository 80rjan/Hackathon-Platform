import React from 'react'
import "./navbar.css"
import edit from "../images/edit (1).png"
import html from "../images/tags.png"
import users from "../images/team.png"
import logout from "../images/check-out.png"
import myProfile from "../images/verified.png"


const Navbar = () => {
    return (
        <div className="navabrContainer">
            <div className="hackathonsTab">
                <img src={html}/>
                <p>Hackathons</p>
            </div>
            <div className="myProfileTab">
                <img src={myProfile}/>
                <p>My Profile</p>
            </div>
            <div className="usersTab">
                <img src={users}/>
                <p>Users</p>
            </div>

            <div className="logout">
                <img src={logout}/>
                <p>LogOut</p>
            </div>
            <div className="editProfile">
                <img src={edit}/>
                <p>Edit Profile</p>
            </div>

        </div>
    )
}
export default Navbar
