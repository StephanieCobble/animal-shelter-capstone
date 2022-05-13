import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "./AccountPage.css";
import { Table } from "react-bootstrap";


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
    <div className="home-container">
      <h1>Employee Account Page</h1>
      <>
      <Button
        className="account-buttons"
        variant="light"
        style={{ background: "#800080", margin: ".5%", color: "whitesmoke" }}
        href="/empaddpet"
      >
        Add Adoptable Pet
      </Button>
  
      <Button
        className="account-buttons"
        variant="light"
        style={{
          background: "#800080",
          margin: ".5%",
          color: "whitesmoke",
          padding: "px",
        }}
        href="/empaddlost"
      >
        Add Lost Pet
      </Button>
      </>
        <div className="container2">
      <Table striped bordered hover className="table-specs" >
        <thead className="font-account">

          <tr>
            <th scope="col">User ID</th>
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
               {adopter.user} {" "}
              </td>

                <td>
              {adopter.first_name}{" "}{adopter.last_name}
                </td>

             <td>
               {adopter.street}{", "} {adopter.city}{", "}{adopter.state}{", "}
                {adopter.zipcode}
                </td> 

                <td>
               {adopter.phone}
                 </td>

                <td>
                 {adopter.pets} 
                </td>
                
                <td>
                  {adopter.pets_age}
                </td>

                <td>
                {adopter.pets_species} 
                </td>

                <td>
                  {adopter.pets_breed} 
                </td>

                <td>
                  {adopter.pets_sex}
                </td>

                <td>
                {adopter.adoption_date}
                </td>

          </tr>
      

          ))}

          </tbody>
          </Table>
          
          </div>
          <img src= {require('file:///Users/stephaniecobble/Desktop/devCodeCamp/Capstone/Code/animal-shelter-capstone/frontend/src/srcAssets/animal-banner.jpeg')}
          width="100%"
          alt="animals" />
    </div>
  );
};

export default EmployeeAccountPage;
