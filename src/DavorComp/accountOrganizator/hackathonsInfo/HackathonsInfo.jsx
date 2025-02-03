import React, {useState} from 'react'
import "./hackathonInfo.css"
import userData from "../userDetails/organizatorDetails.json"
import goldMedal from "../images/gold-medal.png"
import certificate from "../images/award.png"
import CircularProgressBar from "../circulatProgressBar/CircularProgressBar";
import Navbar from "../navbar/Navbar";

const HackathonsInfo = () => {
    const currentOrganizatorId = 1; //test
    const currentOrganizator = userData.find(user => user.id === currentOrganizatorId);
    const totalHackathons = currentOrganizator.organizedHackathons.length;
    const upcomingHackathons = currentOrganizator.upcomingHackathons.length;

    const silverMedalSvg = (
        <svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M11.1459 7.02251C11.5259 6.34084 11.7159 6 12 6C12.2841 6 12.4741 6.34084 12.8541 7.02251L12.9524 7.19887C13.0603 7.39258 13.1143 7.48944 13.1985 7.55334C13.2827 7.61725 13.3875 7.64097 13.5972 7.68841L13.7881 7.73161C14.526 7.89857 14.895 7.98205 14.9828 8.26432C15.0706 8.54659 14.819 8.84072 14.316 9.42898L14.1858 9.58117C14.0429 9.74833 13.9714 9.83191 13.9392 9.93531C13.9071 10.0387 13.9179 10.1502 13.9395 10.3733L13.9592 10.5763C14.0352 11.3612 14.0733 11.7536 13.8435 11.9281C13.6136 12.1025 13.2682 11.9435 12.5773 11.6254L12.3986 11.5431C12.2022 11.4527 12.1041 11.4075 12 11.4075C11.8959 11.4075 11.7978 11.4527 11.6014 11.5431L11.4227 11.6254C10.7318 11.9435 10.3864 12.1025 10.1565 11.9281C9.92674 11.7536 9.96476 11.3612 10.0408 10.5763L10.0605 10.3733C10.0821 10.1502 10.0929 10.0387 10.0608 9.93531C10.0286 9.83191 9.95713 9.74833 9.81418 9.58117L9.68403 9.42898C9.18097 8.84072 8.92945 8.54659 9.01723 8.26432C9.10501 7.98205 9.47396 7.89857 10.2119 7.73161L10.4028 7.68841C10.6125 7.64097 10.7173 7.61725 10.8015 7.55334C10.8857 7.48944 10.9397 7.39258 11.0476 7.19887L11.1459 7.02251Z"
                    stroke="rgba(255,255,255,0.5" stroke-width="1"></path>
                <path
                    d="M12 16.0678L8.22855 19.9728C7.68843 20.5321 7.41837 20.8117 7.18967 20.9084C6.66852 21.1289 6.09042 20.9402 5.81628 20.4602C5.69597 20.2495 5.65848 19.8695 5.5835 19.1095C5.54117 18.6804 5.52 18.4658 5.45575 18.2861C5.31191 17.8838 5.00966 17.5708 4.6211 17.4219C4.44754 17.3554 4.24033 17.3335 3.82589 17.2896C3.09187 17.212 2.72486 17.1732 2.52138 17.0486C2.05772 16.7648 1.87548 16.1662 2.08843 15.6266C2.18188 15.3898 2.45194 15.1102 2.99206 14.5509L5.45575 12"
                    stroke="rgba(255,255,255,0.5" stroke-width="1"></path>
                <path
                    d="M12 16.0678L15.7715 19.9728C16.3116 20.5321 16.5816 20.8117 16.8103 20.9084C17.3315 21.1289 17.9096 20.9402 18.1837 20.4602C18.304 20.2495 18.3415 19.8695 18.4165 19.1095C18.4588 18.6804 18.48 18.4658 18.5442 18.2861C18.6881 17.8838 18.9903 17.5708 19.3789 17.4219C19.5525 17.3554 19.7597 17.3335 20.1741 17.2896C20.9081 17.212 21.2751 17.1732 21.4786 17.0486C21.9423 16.7648 22.1245 16.1662 21.9116 15.6266C21.8181 15.3898 21.5481 15.1102 21.0079 14.5509L18.5442 12"
                    stroke="rgba(255,255,255,0.5" stroke-width="1"></path>
                <path
                    d="M5.5 6.39691C5.17745 7.20159 5 8.08007 5 9C5 12.866 8.13401 16 12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C11.0801 2 10.2016 2.17745 9.39691 2.5"
                    stroke="rgba(255,255,255,0.5" stroke-width="1" stroke-linecap="round"></path>
            </g>
        </svg>
    );

    const [todos, setTodos] = useState([]);

    return (
        <div className="organizeFormContainer">
            <div className="firstRow">
                <h3 className="organizeHackathonHeading">Organize new hackathons</h3>
                <form className="hackathonForm">
                    <input
                        type="text"
                        id="hackathonName"
                        name="hackathonName"
                        placeholder="Enter hackathon name"
                    />
                    <select
                        id="difficulty"
                        name="difficulty"
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>


                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Enter location"
                    />


                    <input
                        type="date"
                        id="date"
                        name="date"
                    />


                    <input
                        type="number"
                        id="duration"
                        name="duration"
                        placeholder="Enter duration in hours"
                    />


                    <input
                        type="number"
                        id="numTeams"
                        name="numTeams"
                        placeholder="Enter number of teams"
                    />


                    <input
                        type="number"
                        id="peoplePerTeam"
                        name="peoplePerTeam"
                        placeholder="Enter people per team"
                    />


                    <textarea
                        id="description"
                        name="description"
                        placeholder="Enter hackathon description"
                    ></textarea>


                </form>
                <button type="submit" className="buttonOrganizeHackathon" >Organize Hackathon</button>

            </div>


            <div className="secondRow">
            <div className="container organized">
                    <h3>Organized</h3>
                    <CircularProgressBar progress={totalHackathons} index={1} size={90}></CircularProgressBar>
                </div>

                <div className="container organized">
                    <h3>Upcoming</h3>
                    <CircularProgressBar progress={upcomingHackathons} index={2} size={90}></CircularProgressBar>
                </div>

                <div className="container myDescription">
                    <h3>Description</h3>
                    <div className="details">{currentOrganizator.description}</div>
                </div>
            </div>
            <Navbar></Navbar>
        </div>


    )
}
export default HackathonsInfo
