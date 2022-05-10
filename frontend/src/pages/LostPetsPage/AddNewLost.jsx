import axios from "axios";
import reactDom from "react-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import { useEffect, useState } from "react";

let initialValues = {
    name: "",
    species: "",
    breed: "",
    sex: "", 
    age: "",
    image: "",
    description: "",
    date_found: "",

}

const AddNewLost = () => {
    const [user, token] = useAuth();
    const navigate = useNavigate();
    const [formData, handleInputChange, handleSubmit] = useCustomForm(
        initialValues,
        postNewPet
      );

    async function postNewPet() {
        try {
          let response = await axios.post(
            "http://127.0.0.1:8000/api/lost/create/",
            formData,
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );
          navigate("/lost")
        } catch (error) {
          console.log(error.message);
        }
      }

    return ( 
        <div>
            <h1>Create New Lost Pet Listing</h1>
            <form onSubmit={handleSubmit}>
            <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Species:{" "}
          <input
            type="text"
            name="species"
            value={formData.species}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Breed:{" "}
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Gender:{" "}
          <input
            type="text"
            name="sex"
            value={formData.sex}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Age:{" "}
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Image:{" "}
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:{" "}
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Date Found:{" "}
          <input
          placeholder="YYYY-MM-DD"
            type="text"
            name="date_found"
            value={formData.date_found}
            onChange={handleInputChange}
          />
        </label>
        <button>Submit</button>
            </form>
        </div>
     );
}
 
export default AddNewLost;