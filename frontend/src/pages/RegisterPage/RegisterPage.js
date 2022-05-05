import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

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
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>

        <div className="form-check form-switch">
          <input 
          className="form-check-input" 
          type="checkbox" 
          id="flexSwitchCheckDefault" 
          name="isEmployee"
          value={formData.isEmployee}
          onChange={handleInputChange}
          // onClick= {Boolean(true)}
          />
          <label className="form-check-label" >Are you an employee?</label>
        </div>

        {/* <label>
          Are you an employee?{" "}
          <input
            type="text"
            name="is_employee"
            value={formData.is_employee}
            onChange={handleInputChange}
          />
        </label> */}

        <p style={{ fontSize: "12px" }}>
          NOTE: Make this an uncommon password with characters, numbers, and
          special characters!
        </p>
        <button type="submit">Register!</button>
      </form>
    </div>
  );
};

export default RegisterPage;
