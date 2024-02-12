import React from "react";
import { useNavigate } from "react-router-dom";
import "./start.css";

function GetStarted() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  return (
    <div className="start">
      <button type="button" onClick={handleGetStartedClick}>
        Get Started
      </button>
  
    </div>
  );
}

export default GetStarted;
