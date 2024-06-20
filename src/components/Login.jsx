import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const Login = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);// this controls the visibility of the modal 

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
      <button onClick={handleButtonClick} >Login</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <form >
         <input type="password" />
         <button type="submit">Submit</button>
        </form>
      
      </Modal>
      
    </>
  )
};
export default Login;
