import { memo } from "react";
import { Outlet } from "react-router-dom";
import Stepper from "../../../../ui/components/stepper/stepper";
import { StepperEnums } from "../../../../ui/components/stepper/types";
import { useLocation } from "react-router-dom";
import AuthOnboardingLayout from "../../../../ui/layouts/auth-onboarding-layout";
import { PHASE_2_STEPS } from "./utils";
import a1 from "../../../../assets/images/a1.png"
import a3 from "../../../../assets/images/a3.png"

function Phase2() {
  const location = useLocation();
  const steps = PHASE_2_STEPS;

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
      className="pt-[100px] md:pt-[135px]"
      disableSecondaryHeader
      headerContent={
        <div className="flex h-fit items-center justify-between">
          {!isWelcomePage && <Stepper steps={newSteps} tighter />}
          {isWelcomePage ? <img src={a1} alt="me" style={{height:60}} className="ml-auto"/> :
          <img src={a3} alt="me" style={{height:60}}/>}
        </div>
      }
    >
      <Outlet />
    </AuthOnboardingLayout>
  );
}

export default memo(Phase2);
