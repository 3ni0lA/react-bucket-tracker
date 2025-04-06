import React from 'react';
import './BucketList.css';
import { generateClient } from 'aws-amplify/api';
import { 
  createBucketListItem,
  updateBucketListItem,
  deleteBucketListItem 
} from './graphql/mutations';
import { listBucketListItems } from './graphql/queries';
import { BucketListItem } from './API';

const client = generateClient();

const BucketList: React.FC = () => {
  const [items, setItems] = React.useState<BucketListItem[]>([]);
  const [newItemName, setNewItemName] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [editName, setEditName] = React.useState('');

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission
    if (!newItemName.trim()) {
      setError('Please enter an item name');
      return;
    }
    try {
      setError(null);
      const input = { name: newItemName.trim(), completed: false };
      await client.graphql({
        query: createBucketListItem,
        variables: { input }
      });
      setNewItemName('');
      fetchItems();
    } catch (error) {
      console.error('Error adding item:', error);
      setError('Failed to add item. Please try again.');
    }
  };

  const handleToggleComplete = async (item: BucketListItem) => {
    try {
      setError(null);
      const input = {
        id: item.id,
        completed: !item.completed
      };
      await client.graphql({
        query: updateBucketListItem,
        variables: { input }
      });
      fetchItems();
    } catch (error) {
      console.error('Error updating item:', error);
      setError('Failed to update item status. Please try again.');
    }
  };

  const handleStartEdit = (item: BucketListItem) => {
    setEditingId(item.id);
    setEditName(item.name);
  };

  const handleSaveEdit = async (id: string) => {
    if (!editName.trim()) {
      setError('Item name cannot be empty');
      return;
    }
    try {
      setError(null);
      const input = {
        id,
        name: editName.trim()
      };
      await client.graphql({
        query: updateBucketListItem,
        variables: { input }
      });
      setEditingId(null);
      fetchItems();
    } catch (error) {
      console.error('Error updating item:', error);
      setError('Failed to update item name. Please try again.');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setError(null);
      await client.graphql({
        query: deleteBucketListItem,
        variables: { input: { id } }
      });
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
      setError('Failed to delete item. Please try again.');
    }
  };

  const fetchItems = async () => {
    try {
      setError(null);
      const response = await client.graphql({
        query: listBucketListItems
      });
      const fetchedItems = response.data.listBucketListItems.items;
      setItems(fetchedItems);
    } catch (error) {
      console.error('Error fetching items:', error);
      setError('Failed to load items. Please refresh the page.');
    }
  };

  React.useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="bucket-list">
      <h2>My Bucket List</h2>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleAddItem} className="add-item">
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Enter a new item"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id} className={item.completed ? 'completed' : ''}>
            {editingId === item.id ? (
              <div className="edit-item">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(item.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            ) : (
              <div className="item-content">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleToggleComplete(item)}
                />
                <span className="item-name">{item.name}</span>
                <div className="item-actions">
                  <button onClick={() => handleStartEdit(item)}>Edit</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BucketList;
