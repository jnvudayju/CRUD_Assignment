import { useState } from "react";
import "./style.css";
import _userlogin from "../network/userlogin";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const [user, setUser] = useState([]);
  const handleChange = (e) => {
    setUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const navigate = useNavigate();

  const handleLogin = async () => {
    const credentials = { email: user.email, password: user.password };
    _userlogin(credentials)
      .then((res) => {
          const token = res.data.token;
          console.log(token);
          navigate("/home");

      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="admin-login-con">
        <h1>Admin Login</h1>
        <hr></hr>
        <div className="login-form">
          <div className="email-con">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter Email here"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="password-con">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </>
  );
};

export default Admin;
