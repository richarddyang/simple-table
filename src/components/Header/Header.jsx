import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_logo">
        <a href="https://skywtech.sharepoint.us/sites/manufacturingoperations/SitePages/SkyApps-Portal.aspx">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <h1>RUSE Report</h1>
    </div>
  );
};

export default Header;
