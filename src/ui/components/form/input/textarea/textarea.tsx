import React, { memo } from "react";
import useInput from "../hooks/useInput";
import { BaseInputComponentProps } from "../../../types";
import clsx from "clsx";

interface Props extends BaseInputComponentProps {}

function Textarea(props: Props) {
  const { className, style, placeholder } = props;
  const { classes, getInputLabel } = useInput(props, true);
  return (
    <div className={clsx("flex-grow relative", className)} style={style}>
      {getInputLabel()}
      <textarea className={clsx(classes)} placeholder={placeholder}></textarea>
    </div>
  );
}

export default memo(Textarea);
