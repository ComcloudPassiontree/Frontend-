import { memo } from "react";
import { Outlet } from "react-router-dom";
import Stepper from "../../../../ui/components/stepper/stepper";
import { StepperEnums } from "../../../../ui/components/stepper/types";
import { useLocation } from "react-router-dom";
import AuthOnboardingLayout from "../../../../ui/layouts/auth-onboarding-layout";

const steps = [
  {
    id: "personal-information",
    title: "Personal Information",
    status: StepperEnums.active,
  },
  {
    id: "phone-verification",
    title: "Phone Number Verification",
    status: StepperEnums.pending,
  },
  {
    id: "job-details",
    title: "Job Details and Residence",
    status: StepperEnums.pending,
  },
  {
    id: "create-password",
    title: "Create Password",
    status: StepperEnums.pending,
  },
];

function Phase1() {
  const location = useLocation();

  const isWelcomePage = location.pathname.includes("welcome");
  const currentPage = steps.filter((item) =>
    location.pathname.includes(item.id)
  )[0];

  const indexOfActivePage = steps.indexOf(currentPage);

  const newSteps = steps.map((step, index) => {
    return {
      ...step,
      status:
        index < indexOfActivePage
          ? StepperEnums.done
          : index === indexOfActivePage
          ? StepperEnums.active
          : StepperEnums.pending,
    };
  });

  return (
    <AuthOnboardingLayout
      headerContent={!isWelcomePage && <Stepper steps={newSteps} />}
    >
      <Outlet />
    </AuthOnboardingLayout>
  );
}

export default memo(Phase1);
