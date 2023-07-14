import React, { useState } from "react";
import "./navbar.css";
const Navbar = (props) => {


  return (
     
      
      <nav className="navigation">
        <ul >
          <li>
            <a href="/" className="nav-link" style={props.currentPage==="home"?{background:"rgb(136, 0, 255)",borderBottom: "2px solid #ffffff"}:{background:"#ffffff18"}}>
              Home
            </a>
          </li>
          <li>
            <a href="/newTicket" className="nav-link"style={props.currentPage==="new"?{background:"rgb(136, 0, 255)",borderBottom: "2px solid #ffffff"}:{background:"#ffffff18"}}>
              Create New Ticket
            </a>
          </li>
          <li>
            <a href="/auth" className="nav-link"style={props.currentPage==="auth"?{background:"rgb(136, 0, 255)",borderBottom: "2px solid #ffffff"}:{background:"#ffffff18"}}>
              Login/Register
            </a>
          </li>
        </ul>
      </nav>
     
  );
};

export default Navbar;
