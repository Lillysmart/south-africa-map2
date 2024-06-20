import React, { useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // If the modal is not open, don't render anything (return null)

  //Render the modal using React portal
  return ReactDOM.createPortal(
    <>
      {/* Modal container */}
      <div className="modal">
        {/* Overlay that covers the entire screen */}
        <div className="overlay" onClick={onClose}></div>
        
        {/* Modal content container */}
        <div className="modal-content">
          {/* Render any children passed to the Modal component */}
          {children}
          
          {/* Button to close the modal */}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>,
    // Render the modal in the body element
    document.body
  );
};
export default Modal;
