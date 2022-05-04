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
//     // phone: "",
//     // pets: "",
//     // petsAge: "",
//     // petsBreed: "",
//     // petsGender: "",
//     // petsNeutered: "",
//     // petStillOwned: "",

// }

// const AdoptionFormPage = () => {
//     const [user, token] = useAuth()
//     const navigate = useNavigate()
//     cost [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues)

//     async function postNewForm(){
//         try {
//             let response = await axios.post("http://127.0.0.1:8000/api/adopters/")
//         } catch (error) {
            
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
//                 {/* <label>
//                     Phone Number: {" "}
//                     <input
//                     type="text"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     />
//                 </label>
//                 <label>
//                     List your pets: {" "}
//                     <input
//                     type="text"
//                     name="pets"
//                     value={formData.pets}
//                     onChange={handleInputChange}
//                     />
//                 </label>
//                 <label>
//                     Pet's Age: {" "}
//                     <input
//                     type="text"
//                     name="petsAge"
//                     value={formData.petsAge}
//                     onChange={handleInputChange}
//                     />
//                 </label>
//                 <label>
//                     Pet's Breed: {" "}
//                     <input
//                     type="text"
//                     name="petsBreed"
//                     value={formData.petsBreed}
//                     onChange={handleInputChange}
//                     />
//                 </label>
//                 <label>
//                     Pet's Gender: {" "}
//                     <input
//                     type="text"
//                     name="petsGender"
//                     value={formData.petsGender}
//                     onChange={handleInputChange}
//                     />
//                 </label>
//                 <label>
//                     Is your pet spayed/neutered?: {" "}
//                     <input
//                     type="text"
//                     name="petsNeutered"
//                     value={formData.petsNeutered}
//                     onChange={handleInputChange}
//                     />
//                 </label>
//                 <label>
//                     Do you still have this pet?: {" "}
//                     <input
//                     type="text"
//                     name="petStillOwned"
//                     value={formData.petStillOwned}
//                     onChange={handleInputChange}
//                     />
//                 </label> */}

//                 <button>Submit Form</button>
//             </form>

//         </div>
//      );
// }
 
// export default AdoptionFormPage;