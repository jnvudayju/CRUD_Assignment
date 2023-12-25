import axios from "axios";

const _userlogin = async (credentials) => {
  // console.log(credentials);
  try {
    const response = await axios.post(
      "http://localhost:8000/admin/login",
      credentials
    );

    // Now you can do something with the token, like storing it in local storage
    return response.data;

    // Redirect or perform additional actions as needed
  } catch (error) {
    if (error.response.data.status === 401) {
      const e = new Error("Invalid email or password");
      e.name = "AUTHORIZATION_ERROR";
      throw e;
    }

    throw new Error(error);
  }
};
export default _userlogin;
