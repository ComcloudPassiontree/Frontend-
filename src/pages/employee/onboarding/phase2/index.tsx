import { memo } from "react";
import { Outlet } from "react-router-dom";
import Stepper from "../../../../ui/components/stepper/stepper";
import { StepperEnums } from "../../../../ui/components/stepper/types";
import { useLocation } from "react-router-dom";
import AuthOnboardingLayout from "../../../../ui/layouts/auth-onboarding-layout";
import { PHASE_2_STEPS } from "./utils";
import Notifications from "../../../../ui/components/notifications/notifications";
import ProfilePill from "../../../../ui/components/profile-pill/profile-pill";
import clsx from "clsx";

function Phase2() {
  const location = useLocation();
  const steps = PHASE_2_STEPS;

  const doNotShowStepper =
    location.pathname.includes("welcome") ||
    location.pathname.includes("acknowledgement");
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
        <div className="flex h-fit items-center justify-between gap-3">
          {!doNotShowStepper && <Stepper steps={newSteps} tighter />}
          <div
            className={clsx(
              "ml-auto flex h-[40px] gap-[40px]",
              doNotShowStepper ? "md:gap-3" : "md:gap-[40px]",
              "justify-end"
            )}
          >
            <Notifications minimized={!doNotShowStepper} />
            <ProfilePill minimized={!doNotShowStepper} />
          </div>
        </div>
      }
    >
      <Outlet />
    </AuthOnboardingLayout>
  );
}

export default memo(Phase2);
