import { Outlet } from "react-router-dom";
import AuthOnboardingLayout from "../../ui/layouts/auth-onboarding-layout";

function Auth() {
  return (
    <AuthOnboardingLayout>
      <Outlet />
    </AuthOnboardingLayout>
  );
}

export default Auth;
