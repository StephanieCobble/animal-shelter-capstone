import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import { useEffect, useState } from "react";
import "./AccountPage.css";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DeleteAdopter from "./DeleteAdopter";


let initialValues = {
  user: "",
  first_name: "",
  last_name: "",
  street: "",
  city: "",
  state: "",
  zipcode: "",
  phone: "",
  pets: "",
  pets_age: "",
  pets_species: "",
  pets_breed: "",
  pets_sex: "",
  adoption_date: "",
};

const AccountPage = () => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    initialValues,
    postNewAdopter,
    user.id
  );

  const [adopters, setAdopters] = useState([]);

  useEffect(() => {
    const fetchAdopters = async () => {
      try {
        let response = await axios.get(
          `http://127.0.0.1:8000/api/adopters/user/${user.id}/`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setAdopters(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAdopters();
  }, [token]);

  async function postNewAdopter() {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/adopters/account/",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="home-container">
      <h1> Create a New Adoption form for {user.username} </h1>

      <form
        striped
        bordered
        hover
        className="form-layout"
        onSubmit={handleSubmit}
      >
        <div className="form-layout2">
          <label className="form-layout2">
            <center> User: &nbsp;&nbsp;</center>
            <select
              name="user"
              required="user"
              value={formData.user.id}
              onChange={handleInputChange}
            >
              <option value selected>
                ------
              </option>
              <option value={user.id}>{user.username}</option>
            </select>

            {/* <input
              // placeholder="User"
              type="text"
              name="user"
              value={formData.user.id}
              onChange={handleInputChange}
            /> */}
          </label>
          <label className="form-layout2">
            <center> First Name:&nbsp;</center>

            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-layout2">
            Last Name:&nbsp;
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-layout2">
            <center> Street:&nbsp;</center>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-layout2">
            <center> City:&nbsp;</center>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-layout2">
            <center> State:&nbsp;</center>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-layout2">
            <center>Zipcode:&nbsp;</center>
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-layout2">
            <center>Phone:&nbsp;</center>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-layout2">
          <label className="form-layout2">
            <center>Pets:&nbsp;</center>
            <input
              type="text"
              name="pets"
              value={formData.pets}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-layout2">
            <center>Pet's Age:&nbsp;</center>
            <input
              type="text"
              name="pets_age"
              value={formData.pets_age}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-layout2">
            <center>Pet's Species:&nbsp;</center>
            <input
              type="text"
              name="pets_species"
              value={formData.pets_species}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-layout2">
            <center>Pet's Breed:&nbsp;</center>
            <input
              type="text"
              name="pets_breed"
              value={formData.pets_breed}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-layout2">
            <center>Pet's Gender:&nbsp;</center>
            <input
              type="text"
              name="pets_sex"
              value={formData.pets_sex}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-layout2">
            <center>Adoption Date:&nbsp;</center>
            <input
              placeholder="YYYY-MM-DD"
              type="text"
              name="adoption_date"
              value={formData.adoption_date}
              onChange={handleInputChange}
            />
          </label>

          <Button
            variant="light"
            style={{
              background: "#800080",
              margin: ".5%",
              outline: "none",
              color: "whitesmoke",
            }}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>

      <br />

      <div className="container2">
        <Table striped bordered hover className="table-specs">
          <thead className="font-account">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Currrent Pets</th>
              <th scope="col">Pet's Age</th>
              <th scope="col">Species</th>
              <th scope="col">Breed</th>
              <th scope="col">Gender</th>
              <th scope="col">Adoption Date</th>
            </tr>
          </thead>

          <tbody className="font-account">
            {adopters &&
              adopters.map((adopter) => (
                <tr>
                  <td>
                    {adopter.first_name} {adopter.last_name}
                  </td>

                  <td>
                    {adopter.street}
                    {", "} &nbsp;{adopter.city}
                    {", "}&nbsp;
                    {adopter.state}
                    {", "}&nbsp;
                    {adopter.zipcode}
                  </td>

                  <td>{adopter.phone}</td>

                  <td>{adopter.pets}</td>

                  <td>{adopter.pets_age}</td>

                  <td>{adopter.pets_species}</td>

                  <td>{adopter.pets_breed}</td>

                  <td>{adopter.pets_sex}</td>

                  <td>{adopter.adoption_date}</td>
                  <td>
                    <DeleteAdopter adopter={adopter}/>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <img
      className="container3"
        src={require("file:///Users/stephaniecobble/Desktop/devCodeCamp/Capstone/Code/animal-shelter-capstone/frontend/src/srcAssets/banner3.png")}
        height="20%"
        width="100%"
        alt="animals"
      />
 
    </div>
  );
};

export default AccountPage;
