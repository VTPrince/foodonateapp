import { Outlet, LiveReload } from "@remix-run/react";

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