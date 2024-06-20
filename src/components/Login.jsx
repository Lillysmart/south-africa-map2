import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "../CSS/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState(null); 

 const [isModalOpen, setIsModalOpen] = useState(false); // this controls the visibility of the modal

 const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  
    const data = { Username: username, Password: password }; // Form data to send to API
  
    try {
      // Sending a POST request to login API endpoint
      const response = await fetch("https://scnetwebapi.azure-api.net/api/DeveloperTest/DeveloperTest/LoginUser", {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': '91a75aab8cf248d2aca799f8546b1f6c', // API subscription key
          'Content-Type': 'application/json', // Request content type
        },
        body: JSON.stringify(data), // Convert form data to JSON string
      });
  
      // Check if response is not OK (status 200-299)
      if (!response.ok) {
        throw new Error(`Login failed with status ${response.status}`); // Throw error if login fails
      }
  
      const contentType = response.headers.get("content-type"); // Get content type from response headers
  
      // Process response based on content type
      if (contentType && contentType.includes("application/json")) {
        const result = await response.json(); // Parse JSON response
        console.log('Login Successful:', result); // Log successful login
      } else {
        const result = await response.text(); // Read response as text
        console.log('Login Successful:', result); // Log successful login
      }
  
      setIsModalOpen(false); // Close modal after successful login
  
    } catch (error) {
      console.error('Error during login:', error.message); // Log error message
      setError(error.message); // Set error state with error message
    }
  };

  //Event handler for when the "Login" button is clicked
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  //Event handler for closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  // Function to update username state based on input value
  const handleChangeUsername = (event) => {
    setUsername(event.target.value); // Update username state with input value
  };

  // Function to update password state based on input value
  const handleChangePassword = (event) => {
    setPassword(event.target.value); // Update password state with input value
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
          < button className="login-btn" type="submit">Login</button>
        </form>
      </Modal>
    </>
  );
};
export default Login;
