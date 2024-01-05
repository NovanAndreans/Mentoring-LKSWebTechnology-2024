import { createBrowserRouter } from "react-router-dom";
import GuestSkin from "../Skins/GuestSkin";
import { routeDashboard, routeForm, routeFormUpdate, routeSignin } from "../Constants/RouteName";
import LoginPage from "../Pages/LoginPage";
import DashboardPage from "../Pages/DashboardPage";
import GuardedSkin from "../Skins/GuarddedSkin";
import FormPage from "../Pages/FormPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestSkin />,
        children: [
            {
                path: routeSignin,
                element: <LoginPage />
            },
        ]
    },
    {
        path: '/',
        element: <GuardedSkin />,
        children: [
            {
                path: routeDashboard,
                element: <DashboardPage />
            },
            {
                path: routeForm,
                element: <FormPage />
            },
            {
                path: routeFormUpdate,
                element: <FormPage />
            }
        ]
    }
])

export default router