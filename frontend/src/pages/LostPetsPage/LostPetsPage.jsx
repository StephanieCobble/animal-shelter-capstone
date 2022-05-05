import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const LostPetsPage = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getAnimals = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/lost/`);
        setPets(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAnimals();
  }, []);

  return (
    <div>
      {pets &&
        pets.map((pet) => (
          <p key={pet.id}>
           <h3> Name: {pet.name} </h3>
            {" "}
            <h4> Species: {pet.species} </h4>
            {" "}
            <h4>Breed: {pet.breed} </h4>
            {" "}
            <h4>Male/Female: {pet.sex} </h4>
            {" "}
            <h4>Age: {pet.age} </h4>
            {" "}
            <h4>  {pet.image}</h4>
            {" "}
            <h6>  {pet.description}</h6>
           <p> {" "}</p>
            <h6>Date Found: {pet.date_found}</h6>
           <p> {" "}</p>
          </p>
        ))}
    </div>
  );
};

export default LostPetsPage;