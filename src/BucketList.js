import React, { useState, useEffect } from "react";
import { Amplify } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";// ✅ Corrected import
import awsconfig from "./aws-exports";
import * as queries from "./graphql/queries.ts";
import * as mutations from "./graphql/mutations.ts";
import "./BucketList.css";

Amplify.configure(awsconfig);

function BucketList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const fetchItems = async () => {
    try {
      const result = await await API.graphql(graphqlOperation(queries.listBucketListItems));
      setItems(result.data.listBucketListItems.items);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const addItem = async () => {
    if (newItem.trim() === "") return;
    try {
      await API.graphql(graphqlOperation(mutations.createBucketListItem, { input: { name: newItem } }));
      setNewItem("");
      fetchItems();
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await API.graphql(graphqlOperation(mutations.deleteBucketListItem, { input: { id } }));
      fetchItems();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

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
