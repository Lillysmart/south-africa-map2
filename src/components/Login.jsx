import React, { useState } from "react";
import Modal from "./Modal";
import "../CSS/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State to hold error message

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const data = { Username: 'DevUser', Password: 'Test@123' }; // Hardcoded username and password for testing

    try {
      // Sending a POST request to login API endpoint
      const response = await fetch(
        "https://scnetwebapi.azure-api.net/api/DeveloperTest/DeveloperTest/LoginUser",
        {
          method: "POST",
          headers: {
            "Ocp-Apim-Subscription-Key": "91a75aab8cf248d2aca799f8546b1f6c", // API subscription key
            "Content-Type": "application/json", // Request content type
          },
          body: JSON.stringify(data), // Convert form data to JSON string
        }
      );

      // Check if response is not OK (status 200-299)
      if (!response.ok) {
        throw new Error(`Login failed with status ${response.status}`); // Throw error if login fails
      }

      const contentType = response.headers.get("content-type"); // Get content type from response headers

      // Process response based on content type
      if (contentType && contentType.includes("application/json")) {
        const result = await response.json(); // Parse JSON response
        console.log("Login Successful:", result); // Log successful login
      } else {
        const result = await response.text(); // Read response as text
        console.log("Login Successful:", result); // Log successful login
      }

      setIsModalOpen(false); // Close modal after successful login
    } catch (error) {
      console.error("Error during login:", error.message); // Log error message
      setError(error.message); // Set error state with error message
    }
  };

  // Function to update username state based on input value
  const handleChangeUsername = (event) => {
    setUsername(event.target.value); // Update username state with input value
  };

  // Function to update password state based on input value
  const handleChangePassword = (event) => {
    setPassword(event.target.value); // Update password state with input value
  };

  // Function to handle click event and open modal
  const handleButtonClick = () => {
    setIsModalOpen(true); // Set modal visibility to true
  };

  // Function to handle modal close event
  const handleCloseModal = () => {
    setIsModalOpen(false); // Set modal visibility to false
  };

  return (
    <>
      {/* Button to open login modal */}
      <button className="navbar-link" onClick={handleButtonClick}>
        Login
      </button>

      {/* Modal component for login form */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <form onSubmit={handleSubmit}>
          <h2>Welcome!</h2>

          {/* Username input */}
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            autoComplete="username"
            value={username}
            onChange={handleChangeUsername}
          />
          <br />

          {/* Password input */}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handleChangePassword}
          />
          <br />

          {/* Submit button */}
          <button className="login-btn" type="submit">
            Login
          </button>

          {/* Display error message if login fails */}
          {error && <p className="error-message">{error}</p>}
        </form>
      </Modal>
    </>
  );
};

export default Login;
