import React, { Component } from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import { Dropdown } from "bootstrap";
// import Select from "react-select";
import "./AdoptPage.css";
import EditAdoptable from "./EditAdoptable";
import DeleteAdoptable from "./DeleteAdoptable";


const AdoptPage = () => {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAnimals = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/animals/`);
        setPets(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAnimals();
  }, []);

  return (
    <>
      <h1 className="container">Adoptable Pets</h1>

      <Link to="/adoptsearch" style={{textDecoraction: "none"}}>
          <p className="font2">Search Adoptable Pets</p>
      </Link>


      <div>
        {pets &&
          pets
            .map((pet, index) => (
              <div key={index}>
                <h3> Name: {pet.name} </h3> <h4> Species: {pet.species} </h4>{" "}
                <h4>Breed: {pet.breed} </h4> <h4>Male/Female: {pet.sex} </h4>{" "}
                <h4>Age: {pet.age} </h4>  <img width="10%" height="10%" src= {pet.image} alt=""></img> {" "}
                <h6> {pet.description}</h6>
                <EditAdoptable pet={pet} />
                <DeleteAdoptable pet={pet} />
              </div>
            ))}
      </div>
    </>
  );
};

export default AdoptPage;