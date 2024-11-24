import { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../../ui/components/header/header";
import Stepper from "../../../../ui/components/stepper/stepper";
import SecondaryHeader from "../../../../ui/components/header/secondary-header";
import { StepperEnums } from "../../../../ui/components/stepper/types";
import { useLocation } from "react-router-dom";

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
    <div className="fade-in">
      <div className="w-full fixed top-0 z-[9]">
        <Header>{!isWelcomePage && <Stepper steps={newSteps} />}</Header>
        <SecondaryHeader />
      </div>
      <div className="pt-[160px] md:pt-[199px] flex items-center justify-center pb-[100px] max-w-[1280px] mx-auto px-6 xl:px-0">
        <Outlet />
      </div>
    </div>
  );
}

export default memo(Phase1);
