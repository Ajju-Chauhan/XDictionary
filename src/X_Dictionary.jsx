import React, { useState } from "react";

function X_Dictionary() {
  const Dic = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [query, setQuery] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const result = Dic.find((entry) =>
      entry.word.toLowerCase() === query.toLowerCase()
    );
    setDefinition(result ? result.meaning : "Word not found in the dictionary.");
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type a word..."
      />
      <button onClick={handleSearch}>Search</button>
      <h2>Definition:</h2>
      <p>{definition}</p>
    </div>
  );
}

export default X_Dictionary;
