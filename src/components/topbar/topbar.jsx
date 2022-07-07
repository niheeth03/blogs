import { Link } from "react-router-dom";
import "./topbar.css"
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const PF = "http://localhost:5000/images/"
  return (
    <div className="top">
      <div className="topLeft">
     <i className="topIcon fa-brands fa-twitter-square"></i>
     <i className="topIcon fa-brands fa-pinterest-square"></i>
     <i className="topIcon fa-brands fa-instagram-square"></i>
     </div>
  
    <div className="topCenter">
        <ul className="topList">
        <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">
            <Link className="link" to="/write">
             WRITE
            </Link>
            </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
    </div>
    <div className="topRight">
    {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={PF+user.profilePic}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
    </div>
    </div>
  )
}