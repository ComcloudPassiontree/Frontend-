import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Onboarding from "../pages/employee/onboarding";
//onboarding phase 1
import Phase1 from "../pages/employee/onboarding/phase1";
import PersonalInformation from "../pages/employee/onboarding/phase1/personal-information";
import Root from "../pages";
import Welcome from "../pages/employee/onboarding/phase1/welcome";
import PhoneVerification from "../pages/employee/onboarding/phase1/phone-verification";
import JobDetails from "../pages/employee/onboarding/phase1/job-details";
//*
import Error404 from "../pages/error/error-404";
//auth
import CreatePassword from "../pages/employee/onboarding/phase1/create-password";
import Login from "../pages/auth/login";
import Auth from "../pages/auth";
import VerifyLogin from "../pages/auth/verify-login";
import ForgotPassword from "../pages/auth/forgot-password";
//onboarding phase 2
import WelcomePhase2 from "../pages/employee/onboarding/phase2/welcome";
import Phase2 from "../pages/employee/onboarding/phase2";
import PersonalDetails from "../pages/employee/onboarding/phase2/personal-details";
import WorkExperience from "../pages/employee/onboarding/phase2/work-experience";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/auth",
        element: <Auth />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "verify",
            element: <VerifyLogin />,
          },
          {
            path: "forgot-password",
            element: <ForgotPassword />,
          },
        ],
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
          {
            path: "phase2",
            element: <Phase2 />,
            children: [
              {
                path: "welcome",
                element: <WelcomePhase2 />,
              },
              {
                path: "personal-details",
                element: <PersonalDetails />,
              },
              {
                path: "work-experience",
                element: <WorkExperience />,
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
