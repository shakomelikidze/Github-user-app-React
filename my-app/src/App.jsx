// Example in a React component
import React, { useEffect } from 'react';
import './App.css';
import { useState } from "react";
import Search from "./Components/Search";
import axios from 'axios';

function App() {
  const [dark, setDark] = useState(true);
  const [userName, setUserName] = useState('octocat');
  const [user, setUser] = useState({});
  const [error, setError] = useState(true);

  const getUser = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      const userData = response.data;
      setUser(userData);
      setError(true);
    } catch (err) {
      setError(false)
    }
  }

  console.log(getUser);

  useEffect(() => {
    getUser();
  }, []);

  const eventName = (event) => {
    setUserName(event.target.value);
  }
  return (
    <main
      className={`${
        dark ? "bg-[#141D2F]" : "bg-[#F6F8FF]"
      } transition duration-1000 ease-in-out`}
    >
      <Search dark={dark} setDark={setDark} />
    </main>
  );
}

export default App;
