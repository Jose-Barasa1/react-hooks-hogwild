import React from "react";
import { useParams, Link } from "react-router-dom";
import hogs from "../porkers_data";
import "./style.css"

const HogDetails = () => {
  const { name } = useParams();
  const hog = hogs.find((h) => h.name === decodeURIComponent(name));

  if (!hog) {
    return <p>Hog not found!</p>;
  }

  return (
    <div className="hogDetails">
      <h2>{hog.name}</h2>
      <img src={hog.image} alt={hog.name} width="200" />
      <p>Specialty: {hog.specialty}</p>
      <p>Greased: {hog.greased ? "Yes" : "No"}</p>
      <p>Weight: {hog.weight} kg</p>
      <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
      <Link to="/">Back to All Hogs</Link>
    </div>
  );
};

export default HogDetails;
