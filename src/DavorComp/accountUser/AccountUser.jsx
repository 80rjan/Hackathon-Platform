import UserDetails from "./userDetails/UserDetails.jsx";
import AppName from "./appName/AppName.jsx";
import HackathonsInfo from "./hackathonsInfo/HackathonsInfo.jsx";
import Navbar from "../../Navigation/Navbar";

export default function AccountUser() {
    return (
        <div className="arcadeFont">
            <AppName />
            {/*<Navbar />*/}
            <UserDetails />
            <HackathonsInfo />
        </div>
    );
}
