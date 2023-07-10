import React, { useState,useEffect } from 'react';
import { Outlet, Link } from "@remix-run/react";
import styles from "../styles/reach.css";
export const links = () => [
  { rel: "stylesheet", href: styles },
];

export default function Reach() {
  const [organizations, setOrganizations] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const[isLoggedIn, setIsLoggedIn] = useState(false);
useEffect(()=>{
  const token=localStorage.getItem('token');
  if(token){

    const verifytoken= async()=>{
      try{
        const response= await fetch("http://localhost:5000/api/verify",{
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        });
        if (response.ok) {
          // Handle successful logout
          setIsLoggedIn(true)
          console.log(token);
        } else {
          // Handle error
          console.log("we got an error")
          setIsLoggedIn(false)
        }
      } catch (error) {
        console.error("we got an error",error);
      }
    };

    verifytoken();

  }
  else{
  setIsLoggedIn(false)}
},[])
  const addOrganization = async (pageNumber = 1) => {
    try {
      const token = localStorage.getItem("token");
      // console.log(token);
      // console.log("addOrganization - pageNumber:", pageNumber); // Check the value of pageNumber
  
      const response = await fetch(`http://localhost:5000/api/organizations?page=${pageNumber}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch organizations');
      }
  
      const data = await response.json();
      console.log(data);
      const indexedData = data.organizations.map((item, index) => ({
        ...item,
        id: index + 1,
      }));
      setOrganizations(indexedData);
      setTotalPages(data.pagination.totalPages);
      setPage(pageNumber);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
              <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/donation">Why Donate?</Link></li>
            {isLoggedIn?(<li><Link to="/logout">Logout</Link></li>)
            :
            (<li><Link to="/signin">Sign-In/Register</Link></li>)}
            {/* <li><Link to="/signin"></Link></li> */}
            
            {/* <li><a href="/reach">Donate</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li> */}
            <li></li>
          </ul>
        </nav>
      <ul className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNum) => (
          <li key={pageNum} className={pageNum === page ? 'active' : ''}>
            <button onClick={() => {
              console.log("Button clicked - pageNum:", pageNum); // Check the value of pageNum when the button is clicked
              addOrganization(pageNum);
            }}>{pageNum}</button>
          </li>
      ))}
    </ul>
      <h2>Organizations to Donate Food</h2>
      <button onClick={addOrganization}>Show available Organizations</button>

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
                    <img src={org.image} alt="" />
                  </div>
                  <div className="card_content">
                    <h2 className="card_title">{org.name}</h2>
                    <p className="card_text">{org.description}</p>
                    {/* <button className="btn card_btn">Read More</button> */}
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
