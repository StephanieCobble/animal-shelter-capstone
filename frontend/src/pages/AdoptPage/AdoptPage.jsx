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
import "../AccountPage/AccountPage.css";
import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";

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
    <div className="account-buttons">
      <Button
        
        variant="light"
        style={{ background: "#800080", margin: ".5%", color: "whitesmoke" }}
        href="/adoptsearch"
      >
        Search Adoptable Pets
      </Button>
      </div>

      <h1 className="container">Adoptable Pets</h1>


      <div className="container2">
      <Table striped bordered hover className="table-specs" >
        <thead className="font-account">

          <tr>
            <th scope="col">Name</th>
            <th scope="col">Species</th>
            <th scope="col">Breed</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Picture</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        <tbody className="font-account"> 

        {pets &&
          pets.map((pet) => (

            <tr>

            <td>
            {pet.name}
            </td>
            <td>
            {pet.species}
            </td>
            <td>
            {pet.breed}
            </td>
            <td>
            {pet.sex}
            </td>
            <td>
            {pet.age}
            </td>
            <td>
            <img width="10%" height="10%" src={pet.image} alt=""></img>
            </td>
            <td>
            {pet.description}
            </td>
            <td>
            <EditAdoptable pet={pet} />
            </td>
            <td>
            <DeleteAdoptable pet={pet} />
            </td>
            </tr>
          ))}
             </tbody>
          </Table>
      </div>
    </>
  );
};

export default AdoptPage;
