import React, { useState, useEffect } from "react";
import { Amplify } from "aws-amplify";
import { GraphQLAPI, graphqlOperation } from "@aws-amplify/api-graphql"; // ✅ Corrected import
console.log("AWS Amplify imports loaded");
import awsconfig from "./aws-exports";
import * as queries from "./graphql/queries.ts";
import * as mutations from "./graphql/mutations.ts";
import "./BucketList.css";

try {
  console.log("Configuring Amplify with config:", JSON.stringify(awsconfig, null, 2));
  Amplify.configure(awsconfig);
  console.log("Amplify configuration successful");
} catch (error) {
  console.error("Error configuring Amplify:", error);
}
function BucketList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const fetchItems = async () => {
    try {
      const result = await GraphQLAPI.graphql(graphqlOperation(queries.listBucketListItems));
      setItems(result.data.listBucketListItems.items);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const addItem = async () => {
    console.log("addItem function called");
    if (!newItem.trim()) {
      console.log("Input is empty");
      return;
    }

    console.log("Creating new item with value:", newItem);
    const item = { name: newItem, completed: false };
    console.log("Item object created:", item);

    try {
      console.log("Attempting GraphQL mutation with operation:", mutations.createBucketListItem);
      console.log("GraphQL operation parameters:", { input: item });
      const result = await GraphQLAPI.graphql(graphqlOperation(mutations.createBucketListItem, { input: item }));
      console.log("GraphQL mutation successful, result:", result);
      console.log("Item added:", result.data.createBucketListItem);
      setItems((prevItems) => {
        console.log("Previous items:", prevItems);
        const updatedItems = [...prevItems, result.data.createBucketListItem];
        console.log("Updated items:", updatedItems);
        return updatedItems;
      });
      console.log("Clearing input field");
      setNewItem(""); // Clear the input field
    } catch (error) {
      console.error("Error adding item:", error);
      console.error("Error details:", error.message);
      if (error.errors) {
        console.error("GraphQL errors:", error.errors);
      }
    }
  };

  const deleteItem = async (id) => {
    try {
      await GraphQLAPI.graphql(graphqlOperation(mutations.deleteBucketListItem, { input: { id } }));
      fetchItems();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    console.log("Current items:", items);
  }, [items]);

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
          onChange={(e) => {
            console.log("Input value changed:", e.target.value);
            setNewItem(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              console.log("Enter key pressed in input field");
              addItem();
            }
          }}
        />
        <button 
          onClick={() => {
            console.log("Add button clicked");
            addItem();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default BucketList;
