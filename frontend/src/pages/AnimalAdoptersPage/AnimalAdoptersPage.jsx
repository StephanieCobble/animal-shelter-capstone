import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AnimalAdoptersPage = () => {
    const [petParents, setPetParents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getAnimalAdopters = async() => {
            try {
                let response = await axios.get(`http://127.0.0.1:8000/api/animaladopters/`);
                setPetParents(response.data);
              } catch (error) {
                console.log(error.message);
              }
            };
            getAnimalAdopters();
    }, []);

    return ( 
        <>
        <h1 className="container">Adopters' Pets</h1>
        <div>
            {petParents && petParents.map((petParent, index) => (
                <div key={index}>
                    <div> Adopter: {petParent.adopter} </div>
                    <div> Pet: {petParent.animal} </div>
                    <div> Adoption Date: {petParent.adoption_date} </div>
                    </div>
            ))}
        </div>
        </>
     );
}
 
export default AnimalAdoptersPage;