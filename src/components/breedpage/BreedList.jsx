import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDogBreeds,SetSelectedBreed } from "../../actions/dogs";
import {Link} from "react-router-dom"

class BreedList extends Component {
  componentDidMount() {
    const { fetchDogBreeds } = this.props;
    fetchDogBreeds();
  }

  handleClick = breed => {
    console.log(breed);
    this.props.setSelectedBreed(breed);

  };

  render() {
    const { dogBreeds = {} } = this.props;

    return (
      <div>
        <h2>Hello Chose a breed to view its images</h2>
        <ul>
          {Object.keys(dogBreeds).map(breed => {
            return (
              <li
                key={breed}
                onClick={() => {
                  this.handleClick(breed);
                }}
              >
               <Link to="/showDogImages">{breed}</Link> 
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    dogBreeds: state.dogs.dogBreeds
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchDogBreeds: () => dispatch(fetchDogBreeds()),
    setSelectedBreed:(name)=> dispatch(SetSelectedBreed(name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreedList);
