import { Outlet, LiveReload } from "@remix-run/react";
// import stylesUrl from "~/styles/index.css";

// export const links = () => [
//   { rel: "stylesheet", href: stylesUrl },
// ];

export default function DonationRoute(){
    return (
        <div>
            <main>
                <Outlet />
                <LiveReload />
            </main>
        </div>
    )
}