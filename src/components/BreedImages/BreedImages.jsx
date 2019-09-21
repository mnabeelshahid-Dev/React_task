import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDogImages } from "../../actions/dogs";

const inlineStyle = {
  image: {
    height: "200px",
    width: "200px",
    margin: "5px",
    border: "2px solid"
  }
};
class BreedImages extends Component {
  componentDidMount() {
    const { fetchDogImages ,selectedDog} = this.props;
    fetchDogImages(selectedDog);
  }
  render() {
    const { dogImages = [] } = this.props;

    return (
      <div>
        {dogImages.map(image => {
          return <img src={image} style={inlineStyle.image} />;
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    dogImages: state.dogs.dogImages,
    selectedDog: state.dogs.selectedBreed
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchDogImages: breedName => dispatch(fetchDogImages(breedName))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreedImages);
