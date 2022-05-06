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

import Dropdown from "./Dropdown";

const AdoptPage = () => {
  const [pets, setPets] = useState([]);

  const [query, setQuery] = useState("");

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

  //   const [open, setOpen] = useState(false)
  //   var onChange;
  //   var prompt="Select...";

  const [value, setValue] = useState(null);

  return (
    <>
      <Dropdown
        prompt="Select..."
        options={pets && pets}
        id='id'
        label='breed'
        value={value}
        onChange={(val) => setValue(val)}
      />

      <input
        placeholder="Enter Search"
        className="search-bar"
        onChange={(event) => setQuery(event.target.value)}
      />

      <h1 className="container">Adoptable Pets</h1>

      {/* <DropdownButton  id="dropdown-basic-button" title="Species">
        <Dropdown.Item onChange={(event) => setQuery(event.target.value)} >Dog</Dropdown.Item>
        <Dropdown.Item onChange={(event) => setQuery(event.target.value)} >Cat</Dropdown.Item>
        <Dropdown.Item onChange={(event) => setQuery(event.target.value)} >...</Dropdown.Item>
      </DropdownButton> */}

      <div>
        {pets &&
          pets
            .filter((pet) => {
              if (query === "") {
                return pet;
              } else if (
                pet.species.toLowerCase().includes(query.toLowerCase())
              ) {
                return pet;
              } else if (
                pet.breed.toLowerCase().includes(query.toLowerCase())
              ) {
                return pet;
              } else if (pet.age.toLowerCase().includes(query.toLowerCase())) {
                return pet;
              } else if (pet.sex.toLowerCase().includes(query.toLowerCase())) {
                return pet;
              }
            })
            .map((pet, index) => (
              <div key={index}>
                <h3> Name: {pet.name} </h3> <h4> Species: {pet.species} </h4>{" "}
                <h4>Breed: {pet.breed} </h4> <h4>Male/Female: {pet.sex} </h4>{" "}
                <h4>Age: {pet.age} </h4> <h4> {pet.image}</h4>{" "}
                <h6> {pet.description}</h6>
              </div>
            ))}
      </div>
    </>
  );
};

export default AdoptPage;
