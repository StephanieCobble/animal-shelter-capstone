import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const AccountPage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // let user = user.id
    let newAdopter = {
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
      state: state,
      zipcode: zipcode,
    };
    setFirstName("");
    setLastName("");
    setStreet("");
    setCity("");
    setState("");
    setZipcode("");
    createAdopter(newAdopter);
  }

  async function createAdopter(newAdopter) {
    let res = await axios.post(
      `http://127.0.0.1:8000/api/adopters/account/` , newAdopter 
    );
    if (res.status === 201) {
      await adopters;
      window.location.reload();
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="app">
        {/* <label className="add-song-font">User</label>
      <input
      // placeholder="First Name"
        type="string"
        value={user.id}
        // onChange={(event) => setFirstName(event.target.value)}
      /> */}
        <label className="add-song-font">First Name</label>
        <input
          placeholder="First Name"
          type="string"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <label className="add-song-font">Last Name</label>
        <input
          placeholder="Last Name"
          type="string"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <label className="add-song-font">Street</label>
        <input
          placeholder="Street"
          type="string"
          value={street}
          onChange={(event) => setStreet(event.target.value)}
        />
        <label className="add-song-font">City</label>
        <input
          placeholder="City"
          type="string"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <label className="add-song-font">State</label>
        <input
          placeholder="State"
          type="string"
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
        <label className="add-song-font">Zipcode</label>
        <input
          placeholder="Zipcode"
          type="string"
          value={zipcode}
          onChange={(event) => setZipcode(event.target.value)}
        />
        <button className="add-song-button" color="white" type="submit">
          Create Adopter
        </button>
      </form>

      <h1>Home Page for {user.username}!</h1>

      {adopters &&
        adopters.map((adopter) => (
          <p key={adopter.id}>
            {adopter.user} {adopter.first_name} {adopter.last_name}{" "}
            {adopter.street} {adopter.city} {adopter.state} {adopter.zipcode}
          </p>
        ))}
    </div>
  );
};

export default AccountPage;

// import axios from "axios";
// import reactDom from "react-dom";
// import { useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import useCustomForm from "../../hooks/useCustomForm"

// let initialValues = {
//     user: "",
//     first_name: "",
//     last_name: "",
//     street: "",
//     city: "",
//     state: "",
//     zipcode: "",
// }

// const AccountPage = () => {
//     const [user, token] = useAuth()
//     const navigate = useNavigate()
//     const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewAdopter)

//     async function postNewAdopter(){
//         try {
//             let response = await axios.post("http://127.0.0.1:8000/api/adopters/account/", formData, {
//                 headers: {
//                     Authorization: 'Bearer ' + token
//                 }
//             })
//             navigate("/")
//         } catch (error) {
//             console.log(error.message)
//         }
//     }

//     return (
//         <div className="container">
//             <form className="form" onSubmit={handleSubmit}>
//                 <label>
//                     User: {" "}
//                     <input
//                     type="text"
//                     name="user"
//                     value={formData.user}
//                     onChange={handleInputChange}
//                     />
//                 </label>
//                 <label>
//                     First Name: {" "}
//                     <input
//                     type="text"
//                     name="first_name"
//                     value={formData.first_name}
//                     onChange={handleInputChange}
//                     />
//                 </label>
//                 <label>
//                     Last Name: {" "}
//                     <input
//                     type="text"
//                     name="last_name"
//                     value={formData.last_name}
//                     onChange={handleInputChange}
//                     />
//                 </label>
//                 <label>
//                     Street: {" "}
//                     <input
//                     type="text"
//                     name="street"
//                     value={formData.street}
//                     onChange={handleInputChange}
//                     />
//                 </label>
//                 <label>
//                     City: {" "}
//                     <input
//                     type="text"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleInputChange}
//                     />
//                 </label>
//                 <label>
//                     State: {" "}
//                     <input
//                     type="text"
//                     name="state"
//                     value={formData.state}
//                     onChange={handleInputChange}
//                     />
//                 </label>
//                 <label>
//                     Zipcode: {" "}
//                     <input
//                     type="text"
//                     name="zipcode"
//                     value={formData.zipcode}
//                     onChange={handleInputChange}
//                     />
//                 </label>
//                 <button>Submit</button>
//             </form>

//         </div>
//      );
// }

// export default AccountPage;
