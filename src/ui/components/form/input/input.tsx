import { CSSProperties, memo } from "react";
import useInput from "./hooks/useInput";
import clsx from "clsx";
import { BaseInputComponentProps } from "../../types";

interface Props extends BaseInputComponentProps {
  inputStyle?: CSSProperties;
  label?: string | number;
}

function Input(props: Props) {
  const { className, style, inputStyle, label, ...rest } = props;
  const { classes, getInputLabel } = useInput(label);

  return (
    <div className={clsx("min-w-[200px] flex-grow", className)} style={style}>
      {getInputLabel()}
      <input {...rest} className={classes} style={inputStyle} />
    </div>
  );
}

export default memo(Input);
