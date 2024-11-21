import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Onboarding from "../pages/employee/onboarding";
import Phase1 from "../pages/employee/onboarding/phase1";
import PersonalInformation from "../pages/employee/onboarding/phase1/personal-information";
import Root from "../pages";
import Welcome from "../pages/employee/onboarding/phase1/welcome";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/employee/onboarding/",
        element: <Onboarding />,
        children: [
          {
            path: "phase1",
            element: <Phase1 />,
            children: [
              {
                path: "welcome",
                element: <Welcome />,
              },
              {
                path: "personal-information",
                element: <PersonalInformation />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default Router;
