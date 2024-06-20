import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "../CSS/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false); // this controls the visibility of the modal

  //Event handler for when the "Login" button is clicked
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  //Event handler for closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button className="navbar-link" onClick={handleButtonClick}>
        Login
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <form>
            <h2> Welcome! </h2>
          <label for="Username">Username :</label>
          <input type="text" autoComplete="username" value="Username" />
          <br />
          <label for="Password">Username :</label>
          <input type="password" autoComplete="Password" value="Password" />
          <br/>
          <button type="submit">Login</button>
        </form>
      </Modal>
    </>
  );
};
export default Login;
