
import { Link } from "react-router-dom";
import "./topbar.css";
import {NotificationsNone , Language ,Settings} from '@mui/icons-material';
export const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <Link to='/' className="link">
                <span className="logo">ReAdmin</span>
                </Link>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                    <span className="topIconBadge"></span>
                </div>
                <img src="/images/luffy.jpg" className="topAvatar"/>
            </div> 
        </div>
    </div>
  )
}


