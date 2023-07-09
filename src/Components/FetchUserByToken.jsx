import axios from "axios";

const FetchUserByToken = async (token) => {
  const url = "http://localhost:3000/user/saveuser";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(url, config);
    return response.data; // Return the data from the response
  } catch (error) {
    throw new Error("Error fetching user data"); // Throw a custom error message
  }
};

export default FetchUserByToken;
