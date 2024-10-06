import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutIconLink() {
  return (
    <div className="aboutLink">
      <Link to="/about">
        <FaQuestion size={30} className="question" />
      </Link>
    </div>
  );
}
