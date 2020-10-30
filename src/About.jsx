import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="About">
      <p>
        To know about the new upgrades in fornite please take a look at{" "}
        <Link to="/shop" style={{ color: "#fff", textDecoration: "none" }}>
          SHOP
        </Link>{" "}
        page <br />
      </p>
    </div>
  );
}

export default About;
