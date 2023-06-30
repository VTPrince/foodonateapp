import React from 'react';
import stylesUrl from "~/styles/donation.css";
import banner from "app/images/istockphoto-1224414210-612x612.jpg";
import { Link } from "@remix-run/react";
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

      {/* <section id="donation-form">
        <h2>Make a Donation</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="food">Food Item:</label>
            <input type="text" id="food" name="food" required />
          </div>

          <button type="submit">Donate</button>
        </form>
      </section> */}

      <section id="benefits">
        <h2>Why Donate?</h2>
        <div className="benefit">
          <div className="icon"><i className="fas fa-heart"></i></div>
          <h3>Make a Difference</h3>
          <p>Your donation can help feed someone in need and make a positive impact on their life.</p>
        </div>

        <div className="benefit">
          <div className="icon"><i className="fas fa-hands-helping"></i></div>
          <h3>Support the Community</h3>
          <p>By donating, you're contributing to the well-being of your community and helping to reduce food waste.</p>
        </div>

        <div className="benefit">
          <div className="icon"><i className="fas fa-smile"></i></div>
          <h3>Spread Happiness</h3>
          <p>Imagine the joy on someone's face when they receive a warm meal because of your generosity.</p>
        </div>
      </section>

      <footer>
        <p>2023 Food Donation. All rights reserved.</p>
      </footer>
    </div>
  );
}




// import stylesUrl from "~/styles/index.css";
// import { Link } from "@remix-run/react";

// export const links = () => [
//   { rel: "stylesheet", href: stylesUrl },
// ];
// export default function DonationIndexRoute(){
//     return(
//         <div>
//             <h2>Welcome to the Donation Page</h2>
//                 <p>Thank you for your willingness to donate! Your contribution can make a
//                     positive impact in someone's life.
//                 </p>
//             <Link to="/reach">Donate Now</Link>
//         </div>
//     )

// }