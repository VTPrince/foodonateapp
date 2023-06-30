// This file is a child of the root.jsx file
// i want to build a food donation web app in Remix. The first page of my app should be divided into sections, the first part of my page should display a tile and some text linking to food donation page and second part should display a tile and a text linking to food receiver pages. Do i need to add changes to my root.jsx page which is the parent or do i need to add changes in my _index.jsx page which is the child

import stylesUrl from "~/styles/index.css";
import { Link } from "@remix-run/react";
export const links = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
  return (
    <div>
      <section className="donation-section">
        <h2>Food Donation</h2>
        <p>
          Start donating your excess food to those in need and make a
          difference in their lives.
        </p>
        <Link to="/donation">Donate Now</Link>
      </section>
      <section className="receiver-section">
        <h2>Food Receiver</h2>
        <p>
          Find and receive donated food to help fulfill the needs of your
          organization or community.
        </p>
        <Link to="/receiver">Find Food</Link>
      </section>
    </div>
  );
}
