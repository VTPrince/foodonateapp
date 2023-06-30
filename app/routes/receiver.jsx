import { Outlet, LiveReload } from "@remix-run/react";
import stylesUrl from "~/styles/index.css";

export const links = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function ReceiverRoute(){
    return (
        <div>
            <h1>Receiver</h1>
            <main>
                <Outlet />
                <LiveReload />
            </main>
        </div>
    )
}