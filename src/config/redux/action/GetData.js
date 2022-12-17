import axios from "axios";

export const fetchData = (setLoading) => async (dispatch) => {
  try {
    const result = await axios.get(
      "https://www.omdbapi.com/?apikey=bb5e529&s=batman"
    );
    const data = result.data.Search;
    dispatch({
      type: "GET_ALL_DATA_SUCCESS",
      payload: data,
    });
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};
