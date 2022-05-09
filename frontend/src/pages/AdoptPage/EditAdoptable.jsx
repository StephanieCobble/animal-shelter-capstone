import React, { useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import { Modal } from 'react-bootstrap';

const EditAdoptable = (props) => {

    const [user, token] = useAuth();
    const navigate = useNavigate();
    const [formData, handleInputChange, handleSubmit] = useCustomForm(
        // initialValues,
        editPet
      );

    async function editPet() {
        try {
          let response = await axios.put(
            `http://127.0.0.1:8000/api/animals/create/${props.pet.id}`,
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
        <div>
            {/* <h1>Edit Adoptable Pet Listing</h1> */}
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
        <button>Submit</button>
            </form>
        </div>
     );
}
 
 
export default EditAdoptable;