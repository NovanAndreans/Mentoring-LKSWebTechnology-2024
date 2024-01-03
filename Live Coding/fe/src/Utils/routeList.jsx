import { createBrowserRouter } from "react-router-dom";
import { GuestSkin } from "../Skin/guest";
import { LoginPage } from "../Pages/LoginPage";
import { DashboardPage } from "../Pages/DashboardPage";
import { GuardSkin } from "../Skin/guard";
import { dashboardRoute, formEditRoute, formRoute, signinRoute } from "../constants/RouteName";
import { FormPage } from "../Pages/FormPage";
import { AlertSkin } from "../Skin/alertSkin";

const routes = createBrowserRouter([
    {
        element: <AlertSkin />,
        children: [
            {
                path: '/',
                element: <GuestSkin />,
                children: [
                    {
                        path: signinRoute,
                        element: <LoginPage />
                    }
                ],

            },
            {
                path: '/',
                element: <GuardSkin />,
                children: [
                    {
                        path: dashboardRoute,
                        element: <DashboardPage />
                    },
                    {
                        path: formRoute,
                        element: <FormPage />
                    },
                    {
                        path: formEditRoute,
                        element: <FormPage />
                    }
                ]
            }
        ]
    }
])

export default routes