// This file is a child of the root.jsx file
// i want to build a food donation web app in Remix. The first page of my app should be divided into sections, the first part of my page should display a tile and some text linking to food donation page and second part should display a tile and a text linking to food receiver pages. Do i need to add changes to my root.jsx page which is the parent or do i need to add changes in my _index.jsx page which is the child

import stylesUrl from "~/styles/index.css";
import { Link } from "@remix-run/react";
import banner from "app/images/food-and-groceries-donation-illustration-free-vector.jpg";
export const links = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
  return (
    <div>
    <div className="wrapper">
  <h1>Want to become a hero?</h1>
  <form className="form__contact" action="">
    <fieldset>
      <p>Hey, Stranger! Got some leftover food?</p>
      <p>Each day 25K people, including 10K children,  die from hunger each day, while 3.6 million food is wasted daily.</p>
      <p>You can help change those people by donating your food.</p>
      <button className="button button--xlarge"  tabIndex="4"><Link  to="/donation">Wanna Make a Difference?  &#187;</Link></button>
    </fieldset>
  </form>
</div>

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
  <defs>
    <filter id="blur0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0 0" />
    </filter>
    <filter id="blur1">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0 5" />
    </filter>
    <filter id="blur2">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0 10" />
    </filter>
    <filter id="blur3">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0 15" />
    </filter>
    <filter id="blur4">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0 20" />
    </filter>
  </defs>
</svg>
</div>
    // <div>
    //   <section className="donation-section">
    //     <h2>Food Donation</h2>
    //     <p>
    //       Start donating your excess food to those in need and make a
    //       difference in their lives.
    //     </p>
    //     <Link to="/donation">Donate Now</Link>
    //   </section>
    //   <section className="receiver-section">
    //     <h2>Food Receiver</h2>
    //     <p>
    //       Find and receive donated food to help fulfill the needs of your
    //       organization or community.
    //     </p>
    //     <Link to="/receiver">Find Food</Link>
    //   </section>
    // </div>
  );
}
