import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { DropdownButton, Dropdown } from "react-bootstrap";
import axios from "axios";

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
      <div className="input-group">
        <div className="input-group-append">
          <label >Search </label>
        </div>
        <input
          onChange={(e) => this.setState({ query: e.target.value })}
          value={this.state.query}
          name="query"
          id="query"
          type="text"
        />
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
              <th>Name</th>
              <th>Species</th>
              <th>Breed</th>
              <th>Sex</th>
              <th>Age</th>
              <th>Image</th>
              <th>Description</th>
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

export default SearchAdoptPage;
