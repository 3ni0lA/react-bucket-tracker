import React, { useState, useEffect } from "react";
import "./App.css";
import BucketList from "./BucketList";

function App() {
  // Load theme from localStorage or default to light mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Toggle between dark and light mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1>Bucket List Tracker</h1>
      <p>Track and achieve your life goals, one step at a time.</p>
      <BucketList />
    </div>
  );
}

export default App;
