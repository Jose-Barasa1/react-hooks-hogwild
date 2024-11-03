import React, { useState } from "react";
import { Link } from "react-router-dom";
import HogTile from "./HogTile";
import AddHogForm from "./AddHogForm";
import initialHogs from "../porkers_data";
import "./style.css"

const HogList = () => {
  const [hogs, setHogs] = useState(initialHogs);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortCriteria, setSortCriteria] = useState("name");
  const [hiddenHogs, setHiddenHogs] = useState(new Set());

  const addNewHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  const toggleHideHog = (hogName) => {
    setHiddenHogs((prevHidden) => {
      const newHidden = new Set(prevHidden);
      if (newHidden.has(hogName)) {
        newHidden.delete(hogName);
      } else {
        newHidden.add(hogName);
      }
      return newHidden;
    });
  };

  const filteredHogs = greasedOnly
    ? hogs.filter((hog) => hog.greased)
    : hogs;

  const sortedHogs = [...filteredHogs]
    .filter((hog) => !hiddenHogs.has(hog.name))
    .sort((a, b) => {
      if (sortCriteria === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortCriteria === "weight") {
        return a.weight - b.weight;
      }
      return 0;
    });

  return (
    <div>
      <AddHogForm addNewHog={addNewHog} />

      <div className="controls">
        <label>
          <input
            type="checkbox"
            checked={greasedOnly}
            onChange={() => setGreasedOnly(!greasedOnly)}
          />
          Show Greased Hogs Only
        </label>

        <label>
          Sort by:
          <select
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </label>
      </div>

      <div className="hogList">
        {sortedHogs.map((hog, index) => (
          <Link key={index} to={`/hog/${encodeURIComponent(hog.name)}`}>
            <HogTile
              hog={hog}
              isHidden={hiddenHogs.has(hog.name)}
              toggleHide={() => toggleHideHog(hog.name)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HogList;