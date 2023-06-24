import { Outlet } from "@remix-run/react";
import stylesUrl from "~/styles/index.css";

export const links = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function JokesRoute(){
    return <div>
        <h1>Mama mia</h1>
        <main>
            <Outlet />
        </main>
    </div>
}