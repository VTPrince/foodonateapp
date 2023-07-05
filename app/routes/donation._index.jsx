import React from 'react';
import stylesUrl from "~/styles/donation.css";
import banner from "app/images/istockphoto-1224414210-612x612.jpg";
import { Link } from "@remix-run/react";
import { FaHeart,FaHands,FaSmile } from "react-icons/fa";
export const links = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function DonationIndexRoute() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reach">Donate Now</Link></li>
            <li><Link to="/signin">Sign-In/Register</Link></li>
            
            {/* <li><a href="/reach">Donate</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li> */}
            <li></li>
          </ul>
        </nav>
        <h1>Donate Food</h1>
        <p>Help us fight hunger!</p>
        <img src={banner} alt=''/>
      </header>

     

      <section id="benefits">
        <h2>Why Donate?</h2>
        <div className="benefit">
          {/* <div className="icon"></div> */}
          <h3>Make a Difference <FaHeart style={{color: 'red'}}/></h3>
          <p>Your donation can help feed someone in need and make a positive impact on their life.</p>
        </div>

        <div className="benefit">
          <h3>Support the Community <FaHands/></h3>
          <p>By donating, you're contributing to the well-being of your community and helping to reduce food waste.</p>
        </div>

        <div className="benefit">
          <h3>Spread Happiness <FaSmile style={{color:'black'}}/></h3>
          <p>Imagine the joy on someone's face when they receive a warm meal because of your generosity.</p>
        </div>
      </section>

      <footer>
        <p>2023 Food Donation. All rights reserved.</p>
      </footer>
    </div>
  );
}
