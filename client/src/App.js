import React, { useState, useEffect } from 'react';

const { REACT_APP_API_URL = "http://localhost:5001" } = process.env

const App = () => {
  const [name, setName] = useState([]);
  console.log(`${REACT_APP_API_URL}generate`);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/generate`)
      .then((res) => res.json())
      .then((nme) => setName([nme]));
  }, []);

  return <h1>{name}</h1>;
};

export default App;
