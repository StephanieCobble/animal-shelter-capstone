import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

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

  return (
    <div  >
      <div className="container" >
        
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            
          >
            Filter
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a href="#">HTML</a>
            </li>
            <li>
              <a href="#">CSS</a>
            </li>
            <li>
              <a href="#">JavaScript</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        {pets &&
          pets
            .filter((pet) => {
              if (query === "") {
                return pet;
              } else if (pet.id.includes(query)) {
                return pet;
              }
            })

            .map((pet) => (
              <p key={pet.id}>
                <h3> Name: {pet.name} </h3> <h4> Species: {pet.species} </h4>{" "}
                <h4>Breed: {pet.breed} </h4> <h4>Male/Female: {pet.sex} </h4>{" "}
                <h4>Age: {pet.age} </h4> <h4> {pet.image}</h4>{" "}
                <h6> {pet.description}</h6>
                <p> </p>
              </p>
            ))}
      </div>
    </div>
  );
};

export default AdoptPage;
