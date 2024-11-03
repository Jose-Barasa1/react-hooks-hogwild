import React, { useState } from "react";
import "./style.css"

const AddHogForm = ({ addNewHog }) => {
  const [hogData, setHogData] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: "",
    "highest medal achieved": "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setHogData({
      ...hogData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewHog(hogData);
    setHogData({
      name: "",
      specialty: "",
      greased: false,
      weight: "",
      "highest medal achieved": "",
      image: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="addHogForm">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={hogData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Specialty:
        <input
          type="text"
          name="specialty"
          value={hogData.specialty}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Greased:
        <input
          type="checkbox"
          name="greased"
          checked={hogData.greased}
          onChange={handleChange}
        />
      </label>
      <label>
        Weight:
        <input
          type="number"
          name="weight"
          value={hogData.weight}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Highest Medal Achieved:
        <input
          type="text"
          name="highest medal achieved"
          value={hogData["highest medal achieved"]}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={hogData.image}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add Hog</button>
    </form>
  );
};

export default AddHogForm;