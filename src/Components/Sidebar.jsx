import burger from "../media/burger.svg";
import notification from "../media/notification.svg";
import settings from "../media/settings.svg";
import userIcon from "../media/userIcon.svg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-burger">
        <img src={burger} alt="burger" />
      </div>
      <div className="sidebar-bottom">
        <img src={notification} alt="notification" />
        <img src={settings} alt="settings" />
        <img src={userIcon} alt="user" />
      </div>
    </div>
  );
}
