import { createBrowserRouter } from "react-router-dom";
import GuestSkin from "../Skins/guestSkin";
import GuardedSkin from "../Skins/guardedSkin";
import { routeDashboard, routeSignin } from "../Constant/routeName";
import DashboardPage from "../Pages/dashboardPage";
import LoginPage from "../Pages/loginPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestSkin />,
        children: [
            {
                path: routeSignin,
                element: <LoginPage />
            }
        ]
    },
    {
        path: '/',
        element: <GuardedSkin />,
        children: [
            {
                path: routeDashboard,
                element: <DashboardPage />
            }
        ]
    }
])

export default router