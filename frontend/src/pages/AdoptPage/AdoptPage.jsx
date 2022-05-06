import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { DropdownButton, Dropdown } from "react-bootstrap";
import axios from "axios";

class AdoptPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      showmodal: false,
      results: [],
    };
    this.filterBySpecies = this.filterBySpecies.bind(this);
    this.filterByBreed = this.filterByBreed.bind(this);
    this.filterByAge = this.filterByAge.bind(this);
    this.filterBySex = this.filterBySex.bind(this);
  }
  UNSAFE_componentWillMount() {
    this.getAnimals();
  }
  async getAnimals() {
    let response = await axios.get(`http://127.0.0.1:8000/api/animals/`);
    this.setState({ pets: response.data });
  }

  filterBySpecies() {
    this.state.pets.filter((p) => {
      return p.species
      .includes(this.state.query);
    });
  }
  filterByBreed() {
    let res = this.state.pets.filter((p) => {
      return p.breed.toLowerCase().includes(this.state.query.toLowerCase());
    });
  }
  filterByAge() {
    let res = this.state.pets.filter((p) => {
      return p.age.toLowerCase().includes(this.state.query.toLowerCase());
    });
  }
  filterBySex() {
    let res = this.state.pets.filter((p) => {
      return p.sex.toLowerCase().includes(this.state.query.toLowerCase());
    });
  }

render() {
    return(
        <div className="input-group">
            <div className="input-group-append"><label id="SearchWord">Search</label></div>
            <input onChange={(e) => this.setState({query: e.target.value})} value={this.state.query} name="query" id="query" type="text" />
            <DropdownButton id="dropdown-basic-button" title="Search By">
                <Dropdown.Item onClick={this.filterBySpecies}>Species</Dropdown.Item>
                <Dropdown.Item onClick={this.filterByBreed}>Breed</Dropdown.Item>
                <Dropdown.Item onClick={this.filterByAge}>Age</Dropdown.Item>
                <Dropdown.Item onClick={this.filterBySex}>Sex</Dropdown.Item>
            </DropdownButton>
            <br />
            <table>
                <thead>
                    <tr>
                    <th>Species</th>
                    <th>Breed</th>
                    <th>Age</th>
                    <th>Sex</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.results.map((pet, index) => (
                            <tr key={index}>
                                <td>{pet.name}</td>
                                <td>{pet.species}</td>
                                <td>{pet.breed}</td>
                                <td>{pet.sex}</td>
                                <td>{pet.age}</td>
                                <td>{pet.image}</td>
                                <td>{pet.description}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    ); 
}

}

export default AdoptPage;



// import React, { Component } from "react";
// import { useEffect, useState } from "react";
// import useAuth from "../../hooks/useAuth";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import DropdownButton from 'react-bootstrap/DropdownButton'
// // import { Dropdown } from "bootstrap";
// // import Select from "react-select";
// import "./AdoptPage.css";

// import Dropdown from "./Dropdown";

// const AdoptPage = () => {
//   const [pets, setPets] = useState([]);

//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     const getAnimals = async () => {
//       try {
//         let response = await axios.get(`http://127.0.0.1:8000/api/animals/`);
//         setPets(response.data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     getAnimals();
//   }, []);

//   //   const [open, setOpen] = useState(false)
//   //   var onChange;
//   //   var prompt="Select...";

//   const [value, setValue] = useState(null);

//   return (
//     <>
//       {/* <Dropdown
//         prompt="Select..."
//         options={pets && pets}
//         id='id'
//         label='breed'
//         value={value}
//         onChange={(val) => setValue(val)}
//       /> */}

//       <input
//         placeholder="Enter Search"
//         className="search-bar"
//         onChange={(event) => setQuery(event.target.value)}
//       />

//       <h1 className="container">Adoptable Pets</h1>

//       {/* <DropdownButton  id="dropdown-basic-button" title="Species">
//         <Dropdown.Item onChange={(event) => setQuery(event.target.value)} >Dog</Dropdown.Item>
//         <Dropdown.Item onChange={(event) => setQuery(event.target.value)} >Cat</Dropdown.Item>
//         <Dropdown.Item onChange={(event) => setQuery(event.target.value)} >...</Dropdown.Item>
//       </DropdownButton> */}

//       <div>
//         {pets &&
//           pets
//             .filter((pet) => {
//               if (query === "") {
//                 return pet;
//               } else if (
//                 pet.species.toLowerCase().includes(query.toLowerCase())
//               ) {
//                 return pet;
//               } else if (
//                 pet.breed.toLowerCase().includes(query.toLowerCase())
//               ) {
//                 return pet;
//               } else if (pet.age.toLowerCase().includes(query.toLowerCase())) {
//                 return pet;
//               } else if (pet.sex.toLowerCase().includes(query.toLowerCase())) {
//                 return pet;
//               }
//             })
//             .map((pet, index) => (
//               <div key={index}>
//                 <h3> Name: {pet.name} </h3> <h4> Species: {pet.species} </h4>{" "}
//                 <h4>Breed: {pet.breed} </h4> <h4>Male/Female: {pet.sex} </h4>{" "}
//                 <h4>Age: {pet.age} </h4> <h4> {pet.image}</h4>{" "}
//                 <h6> {pet.description}</h6>
//               </div>
//             ))}
//       </div>
//     </>
//   );
// };

// export default AdoptPage;
