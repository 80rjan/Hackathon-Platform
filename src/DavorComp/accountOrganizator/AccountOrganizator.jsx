import UserDetails from "./userDetails/OrganizatorDetails.jsx";
import AppName from "./appName/AppName.jsx";
import HackathonsInfo from "./hackathonsInfo/HackathonsInfo.jsx";
import Navbar from "../../Navigation/Navbar";

export default function AccountOrganizator () {
    return (
        <div className="arcadeFont">
            <AppName />
            {/*<Navbar />*/}
            <UserDetails />
            <HackathonsInfo />
        </div>
    );
}
