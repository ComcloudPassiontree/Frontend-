import { CSSProperties, memo } from "react";
import useInput from "../input/hooks/useInput";
import clsx from "clsx";
import { BaseInputComponentProps } from "../../types";

interface Props extends BaseInputComponentProps {
  selectStyle?: CSSProperties;
  label?: string | number;
}

function Select(props: Props) {
  const { selectStyle, label, className, style } = props;
  const { classes, getInputLabel } = useInput(label);

  return (
    <div className={clsx("flex-grow", className)} style={style}>
      {getInputLabel()}
      <select style={selectStyle} className={classes}>
        <option>Select</option>
      </select>
    </div>
  );
}

export default memo(Select);
