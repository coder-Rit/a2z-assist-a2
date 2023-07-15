import React, { useRef, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router";

const Navbar = (props) => {
  const Navigate = useNavigate();
 

  const directionHandler = (direction) => {
    
    Navigate(direction);
  };

  return (
    <nav className="navigation">
      <ul>
        <li>
          <span
            onClick={() => directionHandler("/")}
            className="nav-link"
            style={
              props.currentPage === "home"
                ? {
                    background: "rgb(136, 0, 255)",
                    borderBottom: "2px solid #ffffff",
                  }
                : { background: "#ffffff18" }
            }
          >
            Home
          </a>
        </li>
        <li>
          <span
            onClick={() => directionHandler("/newTicket")}
            className="nav-link"
            style={
              props.currentPage === "new"
                ? {
                    background: "rgb(136, 0, 255)",
                    borderBottom: "2px solid #ffffff",
                  }
                : { background: "#ffffff18" }
            }
          >
            Create New Ticket
          </a>
        </li>
        <li>
          <span
            onClick={() => directionHandler("/auth")}
            className="nav-link"
            style={
              props.currentPage === "auth"
                ? {
                    background: "rgb(136, 0, 255)",
                    borderBottom: "2px solid #ffffff",
                  }
                : { background: "#ffffff18" }
            }
          >
            Login/Register
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
