import { CDN_LOGO } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LogIn");
  // let btnName = "login";

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            // onClick={() => {
            //   setBtnNameReact("LogOut");
            // }}
            onClick={()=>{
              btnNameReact==="LogIn"?setBtnNameReact("LogOut"):setBtnNameReact("LogIn");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
