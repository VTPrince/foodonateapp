import React, { useState } from 'react';
import { Outlet, Link } from "@remix-run/react";
import styles from "../styles/reach.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
];

export default function Reach() {
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
        <div className="main">
          <h1>Responsive Card Grid Layout</h1>
          <ul className="cards">
            {organizations.map(org => (
              <li className="cards_item" key={org.id}>
                <div className="card">
                  <div className="card_image">
                    <img src="https://picsum.photos/500/300/?image=10" alt="" />
                  </div>
                  <div className="card_content">
                    <h2 className="card_title">{org.name}</h2>
                    <p className="card_text">{org.description}</p>
                    <button className="btn card_btn">Read More</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="made_by">Made with ♡</h3>
        </div>
      )}
    </div>
  );
}
