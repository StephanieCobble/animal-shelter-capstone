import React, { useState, Component } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";



const EditLost = (props) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseSave = (event) => {
      setShow(false)
      handleSubmit(event)
  }

  const [name, setName] = useState(props.pet.name);
  const [species, setSpecies] = useState(props.pet.species);
  const [breed, setBreed] = useState(props.pet.breed);
  const [sex, setSex] = useState(props.pet.sex);
  const [age, setAge] = useState(props.pet.age);
  const [image, setImage] = useState(props.pet.image);
  const [description, setDescription] = useState(props.pet.description);
  const [dateFound, setDateFound] = useState(props.pet.date_found);

  function handleSubmit(event) {
      event.preventDefault();
      let updatedPet = {
          id: props.pet.id,
          name: name,
          species: species,
          breed: breed,
          sex: sex,
          age: age,
          image: image,
          description: description,
          date_found: dateFound,
      };
      updatePet(updatedPet)
  }

  async function updatePet(updatedPet){
      let response = await axios.put(`http://127.0.0.1:8000/api/lost/${updatedPet.id}/`, updatedPet);
      if(response.status === 201){
        window.location.reload();
      } else {
          alert('Please try again!')
      }
  }
    return(
      <div>
        <Button className="modal-button" variant="primary" onClick={handleShow}>Edit</Button>
        <Modal
        show={show}
        onHide={handleClose}
        size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Adoptable Pets Info
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <div>
              <form>
               <div> 
               <label> Name </label> 
               <input onChange={(event) => setName(event.target.value)} value={name} type="text" /> 
               </div>
                <div> 
                 <label>Species </label> 
                    <input onChange={(event) => setSpecies(event.target.value)} value={species} type="text" />  
                </div>{" "}
                <div>
                <label> Breed </label> 
                    <input onChange={(event) => setBreed(event.target.value)} value={breed} type="text" /> 
                </div> 
                <div>
                <label> Male/Female </label> 
                    <input onChange={(event) => setSex(event.target.value)} value={sex} type="text" />  
                </div>{" "}
                <div>
                <label> Age </label> 
                  <input onChange={(event) => setAge(event.target.value)} value={age} type="text" /> 
                 </div>
                <div>
                  <label> Image</label>
                    <input onChange={(event) => setImage(event.target.value)} value={image} type="text" /> 
                </div>{" "}
                <div> 
                  <label>Description</label>
                  <input onChange={(event) => setDescription(event.target.value)} value={description} type="text" /> 
                </div>
                <div> 
                  <label>Date Found</label>
                  <input onChange={(event) => setDateFound(event.target.value)} value={dateFound} type="text" /> 
                </div>

                </form>
                </div>
               
                
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseSave}> Update Pet </Button>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )

  }


export default EditLost;
