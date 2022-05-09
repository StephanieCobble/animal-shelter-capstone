import React, { useState, Component } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";



class EditAdoptable extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      species: this.props.species,
      breed: this.props.breed,
      sex: this.props.sex,
      age: this.props.age,
      image: this.props.image,
      description: this.props.description,
      showModal: false,
    }
    this.showPet = this.showPet.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.updatePet = this.updatePet.bind(this);
  }

  showPet() {
    this.setState({showModal: true})
    this.forceUpdate()
    console.log(this.state.showModal)
  }

  hideModal() {
    this.setState({
      showModal: false
    })
  }

  // componentDidMount(){
  //   this.
  // }

  
  async updatePet(event) {
    
    try {
     let response = await axios.put(
        `http://127.0.0.1:8000/api/animals/${this.props.pet.id}`
        // ,
        // {
        //   headers: {
        //     Authorization: "Bearer " + token,
        //   },
        // }
      );
      this.setState ({pets: response.data})
      this.hideModal()
      this.forceUpdate()
      
      // window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    console.log(this.props)

    return(
      <div>
        <Button onClick={this.showPet}>Edit</Button>
        <Modal
        show={this.state.showModal}
        size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Adoptable Pets Info
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Details</p>
            <div>
               <h3> Name: {this.state.pets.name} </h3> <h4> Species: {this.state.pet.species} </h4>{" "}
                <h4>Breed: {this.state.pet.breed} </h4> <h4>Male/Female: {this.state.pet.sex} </h4>{" "}
                <h4>Age: {this.state.pet.age} </h4> <h4> {this.state.pet.image}</h4>{" "}
                <h6> {this.state.pet.description}</h6>
                </div>
                <input onChange={(e) => this.setState({name: e.target.value})} value={this.state.name} name="name" id="name" type="text" />
                
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.updatePet}> Update Pet </Button>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )

  }
}

export default EditAdoptable;
//   const [user, token] = useAuth();
//   const navigate = useNavigate();
//   // const [formData, handleInputChange] =
//   //   useCustomForm(
//   //   // initialValues,
//   //   // editPets(number)
//   //   );
//   // const [editPet, setEditPet] = useState();
//   const [name, setName] = useState("");
//   const [species, setSpecies] = useState("");
//   const [breed, setBreed] = useState("");
//   const [sex, setSex] = useState("");
//   const [age, setAge] = useState("");
//   const [image, setImage] = useState("");
//   const [description, setDescription] = useState("");


//   function handleSubmit(e) {
//     e.preventDefault();
//     let number = props.pet;
//     let editPet = {
//       // id: [],
//       name: name,
//       species: species,
//       breed: breed,
//       sex: sex,
//       age: age,
//       image: image,
//       description: description,
//     };
//     setName("")
//     setSpecies("")
//     setBreed("")
//     setSex("")
//     setAge("")
//     setImage("")
//     setDescription("")
//     editPet(number)
//   }

//   async function editPet(number) {
//     try {
//       await axios.put(
//         `http://127.0.0.1:8000/api/animals/${props.pet.id}`,
//         {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         }
//       );
//       // setEditPet(response.data);
//       window.location.reload();
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   return (
//     <div>
//       {/* <h1>Edit Adoptable Pet Listing</h1> */}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:{" "}
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <label>
//           Species:{" "}
//           <input
//             type="text"
//             name="species"
//             value={species}
//             onChange={(e) => setSpecies(e.target.value)}
//           />
//         </label>
//         <label>
//           Breed:{" "}
//           <input
//             type="text"
//             name="breed"
//             value={breed}
//             onChange={(e) => setBreed(e.target.value)}
//           />
//         </label>
//         <label>
//           Gender:{" "}
//           <input
//             type="text"
//             name="sex"
//             value={sex}
//             onChange={(e) => setSex(e.target.value)}
//           />
//         </label>
//         <label>
//           Age:{" "}
//           <input
//             type="text"
//             name="age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           />
//         </label>
//         <label>
//           Image:{" "}
//           <input
//             type="text"
//             name="image"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//           />
//         </label>
//         <label>
//           Description:{" "}
//           <input
//             type="text"
//             name="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </label>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };


