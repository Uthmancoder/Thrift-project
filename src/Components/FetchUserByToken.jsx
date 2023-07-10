import axios from "axios";
import AllUsers from "../Redux/AllUsers";
import { fetchingFailed, fetchingSuccessful } from "../Redux/AllUsers";

const FetchUserByToken = async (token, dispatch) => {
  const url = "http://localhost:3000/user/SaveCurrentUser";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(url, config);
    console.log(response);
    const user = response.data.user;

    dispatch(fetchingSuccessful(user)); // Dispatch the action to update the Redux store
  } catch (error) {
    console.log(error);
    dispatch(fetchingFailed(error.message));
    throw new Error("Error fetching user data"); // Throw a custom error message
  }
};

export default FetchUserByToken;
