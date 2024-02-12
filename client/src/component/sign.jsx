import React, { useState } from 'react';
import Swal from 'sweetalert2'; 
import withReactContent from 'sweetalert2-react-content';
import  "./sign.css"
import { useNavigate } from 'react-router-dom';

const MySwal = withReactContent(Swal);

function SignupForm() {
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate()

//   const toggleForm = () => {
//     setIsOpen(!isOpen);
//     if (onClose) {
//       onClose();
//     }
//   };
const handleSignInClick = () => {
  navigate('/guide');
};

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      MySwal.fire({
        icon: 'error',
        title: 'Passwords do not match',
      });
      return;
    }

    const userData = {
      username: username,
      email: email,
      password: password,
    };

    console.log('Submitting user data:', userData);

    fetch('api/sign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        console.log('Response status:', response.status);
        console.log('Response OK:', response.ok);

        if (response.status === 201) {
          MySwal.fire({
            icon: 'success',
            title: 'Registration successful',
          });
        } else {
          MySwal.fire({
            icon: 'error',
            title: 'Registration failed',
          });
        }
      })
      .catch((error) => {
        console.error('Error during registration:', error);
        MySwal.fire({
          icon: 'error',
          title: 'An error occurred during registration',
        });
      });
  };

  return (
    
    <div className={`form ${isOpen ? 'open' : 'closed'}`}>
      <div className="form-container">
      <form onSubmit={handleSubmit}>
      <div className="inputs">
      <h3>Tour Guide</h3>
        <input type="text" id="username" placeholder="Username" required />
        <input type="email" id="email" placeholder="Email" required />
        <input
          type="password"
          id="password"
          required
          placeholder="Enter password"
        />
        <input
          type="password"
          id="confirmPassword"
          required
          placeholder="Confirm password"
        />
        <button type="submit" onClick={handleSignInClick}>Sign Up</button>
        </div>
      </form>
      </div>
      <style>
        {`
          input[type="text"],
          input[type="email"],
          input[type="password"] {
            text-transform: none; /* Remove default capitalization */
          }
        `}
      </style>
    </div>
  );
}

export default SignupForm;