import { StepperEnums } from "../../../../ui/components/stepper/types";

export const PHASE_2_STEPS = [
  {
    id: "personal-details",
    title: "Personal Details",
    status: StepperEnums.active,
  },
  {
    id: "work-experience",
    title: "Work Experience",
    status: StepperEnums.pending,
  },
  {
    id: "reference",
    title: "Reference",
    status: StepperEnums.pending,
  },
  {
    id: "academic-history",
    title: "Academic History",
    status: StepperEnums.pending,
  },
  {
    id: "upload-passport",
    title: "Upload Passport",
  },
];
