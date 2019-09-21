const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "STORE_DOG_BREEDS":
      return {
        ...state,
        dogBreeds: action.payload
      };
    case "STORE_DOG_IMAGES":
      return {
        ...state,
        dogImages: action.payload
      };
    case "SET_SELECTED_BREED":
      return {
        ...state,
        selectedBreed: action.payload
      };

    default:
      return state;
  }
};
