import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <div >
      <ul>

      {/* <div className="navImg">

	    </div> */}


        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Haven</b>
            <b> Pet Rescue</b>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
