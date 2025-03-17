import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { listBucketListItems } from "./graphql/queries";
import { createBucketListItem, deleteBucketListItem } from "./graphql/mutations";
import "./BucketList.css";

function BucketList() {
  const [items, setItems] = useState([]); // ✅ Store bucket list items from DB
  const [newItem, setNewItem] = useState(""); // ✅ Store new input value

  // ✅ Fetch items from DynamoDB when the component mounts
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const result = await API.graphql({ query: listBucketListItems });
      setItems(result.data.listBucketListItems.items); // ✅ Store fetched data
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  // ✅ Save new item to DynamoDB
  const addItem = async () => {
    if (!newItem.trim()) return; // Prevent empty input

    const item = { name: newItem, completed: false };

    try {
      const result = await API.graphql({
        query: createBucketListItem,
        variables: { input: item },
      });

      setItems([...items, result.data.createBucketListItem]); // ✅ Add to UI
      setNewItem(""); // ✅ Clear input field
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // ✅ Delete item from DynamoDB
  const deleteItem = async (id) => {
    try {
      await API.graphql({
        query: deleteBucketListItem,
        variables: { input: { id } },
      });

      setItems(items.filter((item) => item.id !== id)); // ✅ Remove from UI
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="bucket-list-container">
      <h2>My Bucket List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button className="delete-btn" onClick={() => deleteItem(item.id)}>❌</button>
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
