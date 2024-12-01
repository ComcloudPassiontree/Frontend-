import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Onboarding from "../pages/employee/onboarding";
import Phase1 from "../pages/employee/onboarding/phase1";
import PersonalInformation from "../pages/employee/onboarding/phase1/personal-information";
import Root from "../pages";
import Welcome from "../pages/employee/onboarding/phase1/welcome";
import PhoneVerification from "../pages/employee/onboarding/phase1/phone-verification";
import JobDetails from "../pages/employee/onboarding/phase1/job-details";
import Error404 from "../pages/error/error-404";
import CreatePassword from "../pages/employee/onboarding/phase1/create-password";
import Login from "../pages/auth/login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path:"/login",
        element: <Login />
      },
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
              {
                path: "phone-verification",
                element: <PhoneVerification />,
              },
              {
                path: "job-details",
                element: <JobDetails />,
              },
              {
                path: "create-password",
                element: <CreatePassword />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default Router;
