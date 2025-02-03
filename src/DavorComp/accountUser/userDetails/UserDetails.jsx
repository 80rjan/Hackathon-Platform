import React, {useState} from 'react'
import "./userDetails.css"
import userData from "./UserDetails.json"
import CircularProgressBar from "../circulatProgressBar/CircularProgressBar";
import shieldStar from "../images/shield-star-line (1).png"
import userImg1test from "../images/16055462-ddd7-4167-a576-f2c605b507ed.jpg"

const avatarImages = require.context('../images', false, /\.(png|jpe?g|svg)$/);


export default function UserDetails () {

    const currentUserId = 1; //test
    const currentUser = userData.find(user => user.id === currentUserId);

    const [lookingForTeam, setLookingForTeam] = useState(false);
    const handleCheckboxChange = (event) => {
        setLookingForTeam(event.target.checked);
    };


    return (
        <div className="userDetailsContainer">
            <div className="userDetailsTop">
                {currentUser && (
                    <div key={currentUser.id} className="userCard">
                        <img src={userImg1test}/>
                        <h3>{currentUser.name}</h3>
                        <div className="specialties">
                            {currentUser.specialties.map(specialtie => (
                                <p key={specialtie} className="specialtie">{specialtie}</p>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="userDetailsMiddle">


                <div className={`lookingForTeam ${lookingForTeam ? 'lookingForTeamActive' : ''}`}>
                    <input
                        type="checkbox"
                        id="lookingForTeam"
                        name="lookingForTeam"
                        checked={lookingForTeam}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="lookingForTeam">
                        {lookingForTeam ? 'Searching for a team!' : 'Are you looking for a team?'}
                    </label>
                </div>

                <div className="programmingLanguages">
                    {currentUser.programmingLanguages.map((language,index) => (
                        <div key={language.name} className="programmingLanguage">
                            <CircularProgressBar str={language.name}  index={index} size={70}/>
                            <span>{language.name}</span>
                        </div>
                    ))}
                </div>


            </div>

            <div className="userDetailsBottom">

                <div className="skills">
                    {currentUser.skills.map((skill) => (
                        <div key={skill.name} className="skill">
                            <img src={shieldStar}/>
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}
