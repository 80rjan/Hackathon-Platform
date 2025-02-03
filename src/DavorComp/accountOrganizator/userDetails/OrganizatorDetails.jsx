import React, {useState} from 'react'
import "./organizatorDetails.css"
import organizatorData from "./organizatorDetails.json"
import CircularProgressBar from "../circulatProgressBar/CircularProgressBar";
import shieldStar from "../images/shield-star-line (1).png"
import userImg1test from "../images/16055462-ddd7-4167-a576-f2c605b507ed.jpg"

const avatarImages = require.context('../images', false, /\.(png|jpe?g|svg)$/);


const OrganizatorDetails = () => {

    const currentOrganizatorId = 1; //test
    const currentOrganizator = organizatorData.find(organizator => organizator.id === currentOrganizatorId);

    const [lookingForTeam, setLookingForTeam] = useState(false);
    const handleCheckboxChange = (event) => {
        setLookingForTeam(event.target.checked);
    };


    return (
        <div className="organizatorDetailsContainer">
            <div className="organizatorDetailsTop">
                {currentOrganizator && (
                    <div key={currentOrganizator.id} className="userCard">
                        <img src={userImg1test}/>
                        <h3>{currentOrganizator.companyName}</h3>
                        <div>
                                <p>Organizator</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="organizatorDetailsBottom">
                <div className="organizedHackathons">
                    {currentOrganizator.organizedHackathons.map((organizedHackathon) => (
                        <div key={organizedHackathon.name} className="hackathon">
                            <img src={shieldStar}/>
                            <span>{organizedHackathon.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default OrganizatorDetails
