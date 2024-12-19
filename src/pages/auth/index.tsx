import { Outlet } from "react-router-dom";
import AuthOnboardingLayout from "../../ui/layouts/auth-onboarding-layout";

function Auth() {
  return (
    <AuthOnboardingLayout       className="pt-[160px] md:pt-[199px]"
>
      <Outlet />
    </AuthOnboardingLayout>
  );
}

export default Auth;
