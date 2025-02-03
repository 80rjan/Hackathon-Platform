
import React from 'react';
import "./SignUp.css";

import {Link} from "react-router-dom";

export default function SignUp() {
    return (
        <div id="SignUp" className="arcadeFont">
            <div id="SignUp-FormWrapper">
                <h1>Sign Up</h1>
                <form>
                    <input type="text" name="username" placeholder="Username" required></input>
                    <input type="email" name="email" placeholder="Email" required></input>
                    <input type="password" name="password" placeholder="Password" required></input>
                    <input type="password" name="password" placeholder="Confirm Password" required></input>
                    <input type="text" name="description" placeholder="Description" required></input>
                    <input type="text" name="programmingLanguages" placeholder="Programming Languages" required></input>
                </form>
                <div style={{display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center"}}>
                    <div className="buttonWrapper arcadeFont">
                        <Link to="/src/LogIn-SignUp/Auth">
                            <button>Log In</button>
                        </Link>
                        <Link to="/main">
                            <button className="btnActive">Sign Up</button>
                        </Link>
                    </div>
                    <Link to="" style={{fontSize: "0.8rem", color: "rgba(255,255,255,0.8)"}}>Enter as guest</Link>
                </div>
            </div>
            <div id="SignUp-FooterWrapper">
                <Link to="">Privacy Policy</Link>
                <Link to="">Terms of Service</Link>
                <Link to="">Contact Us</Link>
            </div>
        </div>
    )
}
