import clsx from "clsx";
import { ButtonVariants } from "./types";

export const appendUrlParts = (destination: string) => {
  if (destination.startsWith("/")) {
    return destination;
  }
  const currentPath = new URL(window.location.href).pathname;
  return `${currentPath.split("/").slice(0, -1).join("/")}/${destination}`;
};


const getVariantClass = (variant: ButtonVariants, disabled?:boolean) => {
  if(disabled){
    return ["bg-grey-300 text-black"]
  }

  switch (variant) {
    case "primary":
      return ["text-white", "bg-buttons__primary"]  
    case "warning":
      return ["text-black", "bg-buttons__warning"]
      case "bg":
      return ["text-black", "bg-buttons__bg"]
      case "white":
        return ["text-black", "bg-buttons__white"]
    default:
      return ["text-black"];
  }
}

export const getButtonClasses = (
  variant: ButtonVariants,
  className?: string,
  isDisabled?: boolean
) => {
  return clsx(
    !className?.includes("h-") && "h-[48px]",
    "app-primary-button",
    "uppercase",
    !className?.includes("border-") && "border-[2px]",
    "rounded-[8px]",
    "flex items-center justify-center",
    !isDisabled ? "border-black" : "border-grey-500",
    !isDisabled ? "cursor-pointer" : "cursor-not-allowed",
    !className?.includes("w-") && "w-max",
    "transition",
    "no-underline",
    "block",
    !isDisabled && `hover:scale-[1.03]`,
    className,
    getVariantClass(variant, isDisabled)
  );
};
