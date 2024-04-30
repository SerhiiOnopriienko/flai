import updateIcon from "../media/updateIcon.svg";
import downloadIcon from "../media/downloadIcon.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-left-side">
        <p className="headerLeftText">AI Prediction</p>
      </div>
      <div className="header-right-side">
        <div className="header-right-side-info">
          <p>Last update: 13.03.2024</p>
          <p>Date added to the platform: 17.12.2023</p>
        </div>
        <div className="header-right-side-content">
          <img src={updateIcon} alt="update icon" />
          <p>Update</p>
        </div>
        <div className="header-right-side-content header-right-side-download">
          <img src={downloadIcon} alt="download icon" />
          <p>Download</p>
        </div>
      </div>
    </div>
  );
}
