import React, { useState } from "react";
import "./BucketList.css";

function BucketList() {
  const [items, setItems] = useState(["Travel to Japan", "Skydiving", "Learn AWS"]);
  const [newItem, setNewItem] = useState("");

  // Function to add a new item to the list
  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem(""); // Clear input after adding
    }
  };

  // Function to delete an item from the list
  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="bucket-list-container">
      <h2>My Bucket List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button className="delete-btn" onClick={() => deleteItem(index)}>❌</button>
          </li>
        ))}
      </ul>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new goal..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
    </div>
  );
}

export default BucketList;
