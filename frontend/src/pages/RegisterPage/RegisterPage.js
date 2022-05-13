import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    isEmployee: Boolean(false),
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

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
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label className="font3">
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label className="font3">
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
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

        <div className="form-check form-switch">
          <label className="font4">Are you an employee?</label>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            name="isEmployee"
            value={formData.isEmployee}
            onChange={handleInputChange}
           
          />
        </div>

        <p style={{ fontSize: "12px" }}>
          NOTE: Make this an uncommon password with characters, numbers, and
          special characters!
        </p>
        <Button
          variant="light"
          style={{ background: "#800080", margin: ".5%", color: "whitesmoke" }}
          type="submit"
        >
          Register!
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
    </div>
  );
};

export default RegisterPage;
