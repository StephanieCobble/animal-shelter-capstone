import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import "./LoginPage.css";
import Button from "react-bootstrap/Button";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label className="font3">
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label className="font3">
          Password:{" "}
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>

        
        {isServerError ? (
          <p className="error">Login failed, incorrect credentials!</p>
        ) : null}

        <button 
        className="border"
          variant="light"
          style={{ background: "#800080",  color: "whitesmoke" }}
          
        >
          Login!
        </button>
        <Button
          variant="light"
          size="sm"
          style={{ background: "#800080", margin: ".5%", color: "whitesmoke" }}
          href="/register"
        >
          Click to register!
        </Button>
      </form>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default LoginPage;
