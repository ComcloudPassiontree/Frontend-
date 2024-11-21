import { memo, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../../ui/components/header/header";
import Stepper from "../../../../ui/components/stepper/stepper";
import SecondaryHeader from "../../../../ui/components/header/secondary-header";
import { StepperEnums } from "../../../../ui/components/stepper/types";

const steps = [
  {
    title: "Personal Information",
    status: StepperEnums.active,
  },
  {
    title: "Phone Number Verification",
    status: StepperEnums.pending,
  },
  {
    title: "Job Details and Residence",
    status: StepperEnums.pending,
  },
  {
    title: "Create Password",
    status: StepperEnums.pending,
  },
];

function Phase1() {
  const isWelcomePage = window.location.href.includes("welcome");
  return (
    <div className="fadeIn">
      <Header>{!isWelcomePage && <Stepper steps={steps} />}</Header>
      <SecondaryHeader />
      <div className="flex items-center justify-center mt-8">
        <Outlet />
      </div>
    </div>
  );
}

export default memo(Phase1);
