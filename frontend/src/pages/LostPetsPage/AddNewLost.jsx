import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import "../AccountPage/AccountPage.css";
import Button from "react-bootstrap/Button";

let initialValues = {
  name: "",
  species: "",
  breed: "",
  sex: "",
  age: "",
  image: "",
  description: "",
  date_found: "",
};

const AddNewLost = () => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    initialValues,
    postNewPet
  );

  async function postNewPet() {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/lost/create/",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      navigate("/lost");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="home-container">
      <div className="background">
        <h1>Create New Lost Pet Listing</h1>

        <form className="form-layout" onSubmit={handleSubmit}>
          <div className="form-layout2">
            <label className="form-layout2">
              Name:&nbsp;
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label className="form-layout2">
              Species:&nbsp;
              <input
                type="text"
                name="species"
                value={formData.species}
                onChange={handleInputChange}
              />
            </label>
            <label className="form-layout2">
              Breed:&nbsp;
              <input
                type="text"
                name="breed"
                value={formData.breed}
                onChange={handleInputChange}
              />
            </label>
            <label className="form-layout2">
              Gender:&nbsp;
              <input
                type="text"
                name="sex"
                value={formData.sex}
                onChange={handleInputChange}
              />
            </label>
            <label className="form-layout2">
              Age:&nbsp;
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
              />
            </label>
            <label className="form-layout2">
              Image:&nbsp;
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
              />
            </label>
            <label className="form-layout2">
              Description:{" "}
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </label>
            <label className="form-layout2">
              Date Found:&nbsp;
              <input
                placeholder="YYYY-MM-DD"
                type="text"
                name="date_found"
                value={formData.date_found}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <Button
            variant="light"
            style={{
              background: "#800080",
              margin: ".5%",
              outline: "none",
              color: "whitesmoke",
            }}
            type="submit"
          >
            Submit
          </Button>
        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default AddNewLost;
