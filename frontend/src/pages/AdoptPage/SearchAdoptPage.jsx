import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import axios from "axios";
import { Table } from "react-bootstrap";

class SearchAdoptPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      
      query: '',
      results: [],
    };
    this.filterBySpecies = this.filterBySpecies.bind(this);
    this.filterByBreed = this.filterByBreed.bind(this);
    this.filterByAge = this.filterByAge.bind(this);
    this.filterBySex = this.filterBySex.bind(this);
  }
  componentDidMount() {
    this.getAnimals();
  }
  async getAnimals() {
    let response = await axios.get(`http://127.0.0.1:8000/api/animals/`);
    this.setState({ pets: response.data });
  }

  filterBySpecies() {
    let res = this.state.pets.filter((p) => {
        return p.species.toLowerCase().includes(this.state.query.toLowerCase())})
        console.log(res)
        let array = []
        res.forEach(element => {
            array.push({
                name: element.name,
                species: element.species,
                breed: element.breed,
                sex: element.sex,
                age: element.age,
                image: element.image,
                description: element.description
            })})
            console.log(array)
            this.setState({results: array})
  }
  filterByBreed() {
    let res = this.state.pets.filter((p) => {
      return p.breed.toLowerCase().includes(this.state.query.toLowerCase())})
      console.log(res)
      let array = []
      res.forEach(element => {
          array.push({
              name: element.name,
              species: element.species,
              breed: element.breed,
              sex: element.sex,
              age: element.age,
              image: element.image,
              description: element.description
          })})
          console.log(array)
          this.setState({results: array})
  }
  filterByAge() {
    let res = this.state.pets.filter((p) => {
      return p.age.toLowerCase().includes(this.state.query.toLowerCase())})
      console.log(res)
      let array = []
      res.forEach(element => {
          array.push({
              name: element.name,
              species: element.species,
              breed: element.breed,
              sex: element.sex,
              age: element.age,
              image: element.image,
              description: element.description
          })})
          console.log(array)
          this.setState({results: array})
  }
  filterBySex() {
    let res = this.state.pets.filter((p) => {
      return p.sex.toLowerCase().includes(this.state.query.toLowerCase())})
      console.log(res)
      let array = []
      res.forEach(element => {
          array.push({
              name: element.name,
              species: element.species,
              breed: element.breed,
              sex: element.sex,
              age: element.age,
              image: element.image,
              description: element.description
          })})
          console.log(array)
          this.setState({results: array})
  }

  render() {
    return (
      <div className="home-container">
        <h1 className="container">Search Adoptable Pets</h1>
      <div className="input-group">
        <div className="input-group-append">
          <label >Search &nbsp; </label>
        </div>
        <input
          onChange={(e) => this.setState({ query: e.target.value })}
          value={this.state.query}
          name="query"
          id="query"
          type="text"
        />
         &nbsp;
         &nbsp;
        <DropdownButton  id="dropdown-basic-button" title="Search By">
          <Dropdown.Item onClick={this.filterBySpecies}>Species</Dropdown.Item>
          <Dropdown.Item onClick={this.filterByBreed}>Breed</Dropdown.Item>
          <Dropdown.Item onClick={this.filterByAge}>Age</Dropdown.Item>
          <Dropdown.Item onClick={this.filterBySex}>Sex</Dropdown.Item>
        </DropdownButton>
        <br />
        
        <div className="container2">
      <Table striped bordered hover className="table-specs" >
        <thead className="font-account">

          <tr>
            <th scope="col">Name</th>
            <th scope="col">Species</th>
            <th scope="col">Breed</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Picture</th>
            <th scope="col">Description</th>
          </tr>
        </thead>

        <tbody className="font-account"> 

        {this.state.results.map((pet) => (

            <tr>

            <td>
            {pet.name}
            </td>
            <td>
            {pet.species}
            </td>
            <td>
            {pet.breed}
            </td>
            <td>
            {pet.sex}
            </td>
            <td>
            {pet.age}
            </td>
            <td>
            <img width="10%" height="10%" src={pet.image} alt=""></img>
            </td>
            <td>
            {pet.description}
            </td>
    
            </tr>
          ))}
             </tbody>
          </Table>
      </div>


      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>
    );
  }
}

export default SearchAdoptPage;
