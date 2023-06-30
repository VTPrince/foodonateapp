import React, { useState } from 'react';

export default function TryReact() {
  const [organizations, setOrganizations] = useState([]);

  const addOrganization = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/organizations'); // Replace with your Express server endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch organizations');
      }
      const data = await response.json();
      
      const indexedData = data.map((item, index) => ({
        ...item,
        id: index + 1,
      }));
      console.log(indexedData)
      setOrganizations(indexedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Organizations to Donate Food</h2>
      <button onClick={addOrganization}>Add Organization</button>

      {organizations.length === 0 ? (
        <div>No organizations available.</div>
      ) : (
        <ul>
          {organizations.map(org => (
            <li key={org.id}>
              <h3>{org.name}</h3>
              <p>{org.description}</p>
              <p><img src={org.picture} alt='' /></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
