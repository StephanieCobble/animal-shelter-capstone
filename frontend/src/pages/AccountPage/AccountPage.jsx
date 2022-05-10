
import axios from "axios";
import reactDom from "react-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import { useEffect, useState } from "react";


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
  adoption_date: ""
};

const AccountPage = () => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    initialValues,
    postNewAdopter
  );

  const [adopters, setAdopters] = useState([]);

  useEffect(() => {
    const fetchAdopters = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/adopters/user/${user.id}/`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
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
    <div >
      <h1>Create a New Adoption form for {user.username} </h1>
      <form  onSubmit={handleSubmit}>
        <label>
          User: {user.id}
          <input
            type="text"
            name="user"
            value={formData.user.id}
            onChange={handleInputChange}
          />
        </label>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Street:{" "}
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleInputChange}
          />
        </label>
        <label>
          City:{" "}
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </label>
        <label>
          State:{" "}
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Zipcode:{" "}
          <input
            type="text"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone:{" "}
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Pets:{" "}
          <input
            type="text"
            name="pets"
            value={formData.pets}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Pet's Age:{" "}
          <input
            type="text"
            name="pets_age"
            value={formData.pets_age}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Pet's Species:{" "}
          <input
            type="text"
            name="pets_species"
            value={formData.pets_species}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Pet's Breed:{" "}
          <input
            type="text"
            name="pets_breed"
            value={formData.pets_breed}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Pet's Gender:{" "}
          <input
            type="text"
            name="pets_sex"
            value={formData.pets_sex}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Adoption Date:{" "}
          <input
          placeholder="YYYY-MM-DD"
            type="text"
            name="adoption_date"
            value={formData.adoption_date}
            onChange={handleInputChange}
          />
        </label>
        <button>Submit</button>
      </form>
      {adopters &&
        adopters
        .map((adopter, index) => (
          <div key={index}>
          <h3> User ID: {adopter.user} | Name: {adopter.first_name} {adopter.last_name}{" "}</h3>
          <h6> Address: {adopter.street} {adopter.city} {adopter.state} {adopter.zipcode} Phone: {adopter.phone} </h6> 
          <h6> Pet Info: {adopter.pets} {adopter.pets_age} {adopter.pets_species} {adopter.pets_breed} {adopter.pets_sex} {adopter.adoption_date} </h6>
          </div>
        ))}
    </div>
  );
};

export default AccountPage;
