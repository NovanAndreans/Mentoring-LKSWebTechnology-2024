import { createBrowserRouter } from "react-router-dom";
import { GuestSkin } from "../Skin/guest";
import { LoginPage } from "../Pages/LoginPage";
import { DashboardPage } from "../Pages/DashboardPage";
import { GuardSkin } from "../Skin/guard";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <GuestSkin />,
        children: [
            {
                path: '/',
                element: <LoginPage />
            }
        ],

    },
    {
        path: '/',
        element: <GuardSkin />,
        children: [
            {
                path: '/dashboard/:id/:page',
                element: <DashboardPage />
            }
        ]
    }
])

export default routes