import { useCallback, useMemo } from "react";
import Paragraph2 from "../../../typography/paragraphs/p2";
import { BaseInputComponentProps } from "../../../types";
import Caption from "../../../typography/caption";
import { ReactComponent as CheckIcon } from "../../../../../../src/assets/images/check.svg";
import clsx from "clsx";
import { removeCustomProps } from "../../utils";

function useInput(props: BaseInputComponentProps) {
  const {
    label,
    type,
    hasError,
    errorText,
    hasSuccess,
    successText,
    disabled,
  } = props;
  const isPassword = type === "password";

  const needsIcon = isPassword || disabled;

  const classes = clsx(
    hasError
      ? "border-red-200"
      : hasSuccess
      ? "border-green-300"
      : "border-black",
    (hasError || hasSuccess) && "outline-none",
    "border-[1.3px] px-3 text-[14px] rounded-[8px] mt-[8px] w-full h-[40px]",
    disabled ? "bg-grey-300" : "bg-transparent py-[8.5px]"
  );

  const getInputLabel = useCallback(() => {
    if (label) {
      return <Paragraph2 bold>{label}</Paragraph2>;
    }
    return null;
  }, [label]);

  const getExtraInputContent = useCallback(() => {
    if (hasError && errorText) {
      return (
        <Caption className="text-red-200 block basis-1">{errorText}</Caption>
      );
    }
    if (hasSuccess && successText) {
      return (
        <div className="text-green-300 basis-1 flex gap-[3px] mt-1">
          <CheckIcon />
          <Caption>{successText}</Caption>
        </div>
      );
    }
    return null;
  }, [hasError, errorText, hasSuccess, successText]);

  const inputProps = useMemo(() => removeCustomProps(props), [props]);
  return {
    classes,
    getInputLabel,
    isPassword,
    getExtraInputContent,
    inputProps,
    needsIcon,
  };
}

export default useInput;
