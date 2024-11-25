import { Condition } from "../ui/components/form/input-conditions/types";

export const MODAL_CONTAINER = "modal-container"

export const passwordConditions: Condition[] = [
    {
      title: "an uppercase letter",
      regex: "[A-Z]",
    },
    {
      title: "a lowercase letter",
      regex: "[a-z]",
    },
    {
      title: "a number",
      regex: "\\d",
    },
    {
      title: "8 characters minimum",
      regex: "^.{8,}$",
    },
  ];