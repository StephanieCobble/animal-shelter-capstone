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
          <div>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <div className="font">Haven</div> <div className="font2">Pet Rescue</div>
          </Link>
          </div>
        </li>
  

 

        <div className="link-place">
        <Link  to="/" style={{ textDecoration: "none", color: "white" }}>
          <p >Home</p>
        </Link>
        </div>
        <div className="link-place">
        <Link  to="/adopt" style={{ textDecoration: "none", color: "white" }}>
          <p >Adopt</p>
        </Link>
        </div>
        <div className="link-place">
        <Link   to="/lost" style={{ textDecoration: "none", color: "white" }}>
          <p >Lost Pets</p>
        </Link>
        </div>
        <div className="link-place">
        <Link   to="/account" style={{ textDecoration: "none", color: "white" }}>
          <p >Account</p>
        </Link>
        </div>
        <li  className="link-place">
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
