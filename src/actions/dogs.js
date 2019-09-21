export const fetchDogBreeds = () => {
  return dispatch => {
    fetch("https://dog.ceo/api/breeds/list/all").then(res =>
      res.json().then(data => {
        if (data.status === "success") {
          dispatch({ type: "STORE_DOG_BREEDS", payload: data.message });
        }
      })
    );
  };
};

export const fetchDogImages = breedName => {
  return dispatch => {
    const url = `https://dog.ceo/api/breed/${breedName}/images`;
    fetch(url).then(res =>
      res.json().then(data => {
        if (data.status === "success") {
          dispatch({ type: "STORE_DOG_IMAGES", payload: data.message });
        }
      })
    );
  };
};
export const SetSelectedBreed = breedName => {
  return dispatch => {
    dispatch({ type: "SET_SELECTED_BREED", payload: breedName });
  };
};
