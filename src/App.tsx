import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { Button, View, withAuthenticator, WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import BucketList from "./BucketList";

// Configure AWS Amplify
Amplify.configure(awsExports);

function App({ signOut }: WithAuthenticatorProps): React.ReactElement {
  // Load theme from localStorage or default to light mode
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Toggle between dark and light mode
  const toggleDarkMode = (): void => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <View className={`app-container ${darkMode ? "dark" : ""}`}>
      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1>Bucket List Tracker</h1>
      <p>Track and achieve your life goals, one step at a time.</p>

      {/* Sign Out Button */}
      <Button onClick={signOut} variation="primary">
        Sign Out
      </Button>

      {/* Bucket List Component */}
      <BucketList />
    </View>
  );
}

export default withAuthenticator(App);

