import React, { useState, Component } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import "./AdoptPage.css";
import "../AccountPage/AccountPage.css";

const EditAdoptable = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseSave = (event) => {
    setShow(false);
    handleSubmit(event);
  };

  const [name, setName] = useState(props.pet.name);
  const [species, setSpecies] = useState(props.pet.species);
  const [breed, setBreed] = useState(props.pet.breed);
  const [sex, setSex] = useState(props.pet.sex);
  const [age, setAge] = useState(props.pet.age);
  const [image, setImage] = useState(props.pet.image);
  const [description, setDescription] = useState(props.pet.description);

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
    };
    updatePet(updatedPet);
  }

  async function updatePet(updatedPet) {
    let response = await axios.put(
      `http://127.0.0.1:8000/api/animals/${updatedPet.id}/`,
      updatedPet
    );
    if (response.status === 201) {
      window.location.reload();
    } else {
      alert("Please try again!");
    }
  }

  return (
    <div>
      <Button
        className="modal-button"
        variant="light"
        style={{
          background: "#800080",
          margin: ".5%",
          outline: "none",
          color: "whitesmoke",
        }}
        onClick={handleShow}
      >
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       
      <div className="form-layout">
       
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Adoptable Pets Info
          </Modal.Title>
        </Modal.Header> */}
        
        <Modal.Body>
        <h1 className="form-layout2"> Adoptable Pets Info &nbsp;</h1>
            <form>
              <label className="form-layout2"> 
               Name &nbsp; 
              <input
                onChange={(event) => setName(event.target.value)}
                value={name}
                type="text"
              />
              </label>

              <label className="form-layout2">
                Species &nbsp; 
              <input
                onChange={(event) => setSpecies(event.target.value)}
                value={species}
                type="text"
              />
                </label>

              <label className="form-layout2"> 
              Breed &nbsp; 
              <input
                onChange={(event) => setBreed(event.target.value)}
                value={breed}
                type="text"
              />
              </label>

              <label className="form-layout2"> 
              Gender &nbsp; 
              <input
                onChange={(event) => setSex(event.target.value)}
                value={sex}
                type="text"
              />
              </label>

              <label className="form-layout2"> 
              Age &nbsp; 
              <input
                onChange={(event) => setAge(event.target.value)}
                value={age}
                type="text"
              />
              </label>

              <label className="form-layout2"> 
              Image &nbsp;
              <input
                onChange={(event) => setImage(event.target.value)}
                value={image}
                type="url"
              />
              </label>

              <label className="form-layout2">
                Description &nbsp;
              <input
                onChange={(event) => setDescription(event.target.value)}
                value={description}
                type="text"
              />
                </label>
            </form>
        </Modal.Body>
        
       
          <Button
            variant="light"
            style={{
              background: "#800080",
              margin: "1%",
              outline: "none",
              color: "whitesmoke",
              padding: "1%",
            }}
            onClick={handleCloseSave}
            >
            {" "}
            Update Pet{" "}
          </Button>
          <Button
            variant="light"
            style={{
              background: "#8e5994",
              margin: ".5%",
              outline: "none",
              color: "whitesmoke",
            }}
            onClick={handleClose}
            >
            Close
          </Button>
       
            </div>
            
      </Modal>
            
    </div>
  );
};

export default EditAdoptable;
