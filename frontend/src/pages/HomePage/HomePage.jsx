import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./HomePage.css"


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const navigate = useNavigate();

  return (
    <div className="background">
    <div className="home-container" >
      <div className="h1">
      <h1 >Welcome to Haven...</h1>
      </div>
      <div className="h2">
      <h2 >...helping pets find their furrever homes</h2>
      </div>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Adipiscing elit pellentesque habitant 
morbi tristique. Dignissim sodales ut eu sem integer vitae justo eget magna. 
Sollicitudin ac orci phasellus egestas. Dui sapien eget mi proin. </h4>

    <div  >
     <img  src= {require('file:///Users/stephaniecobble/Desktop/devCodeCamp/Capstone/Code/animal-shelter-capstone/frontend/public/andrew-s-ouo1hbizWwo-unsplash.jpg')} alt="" height="50%" width="50%" />
   
     <img src= {require('file:///Users/stephaniecobble/Desktop/devCodeCamp/Capstone/Code/animal-shelter-capstone/frontend/Assets/tran-mau-tri-tam-7QjU_u2vGDs-unsplash.jpg')} alt="" height="50%" width="50%" />
    </div>
   
    </div>
    </div>
  );
};


export default HomePage;

// const fetchCars = async () => {
  //       try {
  //         let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
  //           headers: {
  //             Authorization: "Bearer " + token,
  //           },
  //         });
  //         setCars(response.data);
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //     };
  //     fetchCars();
  //   }, [token]);
  //   return (
  //     <div className="container">
  //       <h1>Home Page for {user.username}!</h1>
  //       {cars &&
  //         cars.map((car) => (
  //           <p key={car.id}>
  //             {car.year} {car.make} {car.model}
  //           </p>
  //         ))}
  //     </div>
  //   );
  // };
