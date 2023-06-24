import stylesUrl from "~/styles/index.css";
import { Link } from "@remix-run/react";
export const links = () => [
  { rel: "stylesheet", href: stylesUrl },
];


export default function IndexRoute(){
    return <div><Link to="jokes">Read Jokes</Link></div>
}