import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-md navbar-dark bg-primary">
      <div className="container">
  
        <Link to="/" className="navbar-brand">
          React crud
        </Link>

       
      <Link to="/contacts/add" className="btn btn-light ml-auto">
      Create
    </Link>
     
          </div>
      
    </nav>
  );
};

export default Navbar;
