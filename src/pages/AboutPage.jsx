import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="card about">
      <h1>About this Project</h1>
      <p>This is a React App to leave feedback for a product or a service</p>
      <p>Version: 1.0.0</p>

      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}
