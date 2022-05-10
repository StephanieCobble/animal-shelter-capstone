import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import { Link } from "react-router-dom";
import AddNewAdoptable from "../AdoptPage/AddNewAdoptable";




const EmployeeAccountPage = () => {
  const [user, token] = useAuth();
  const [adopters, setAdopters] = useState([]);

  useEffect(() => {
    const fetchAdopters = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/adopters/`, {
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


    return ( 
        <div>
            <h1>Employee Account Page</h1>
            <div> add links to add/delete/update pets (adoptable + lost)</div>
        <Link to="/empaddpet">
            Add New Adoptable Pet
        </Link>
        <br/>
        <Link to="/empaddlost">
            Add New Lost Pet
        </Link>
            <div>
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


        </div>

     );
}
 
export default EmployeeAccountPage;