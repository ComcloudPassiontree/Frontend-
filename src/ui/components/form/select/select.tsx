import { CSSProperties, memo } from "react";
import useInput from "../input/hooks/useInput";
import clsx from "clsx";
import { BaseInputComponentProps } from "../../types";

interface Props extends BaseInputComponentProps {
  selectStyle?: CSSProperties;
  label?: string | number;
}

function Select(props: Props) {
  const { selectStyle, className, style } = props;
  const { classes, getInputLabel, getExtraInputContent } = useInput(props);

  return (
    <div className={clsx("flex-grow", className)} style={style}>
      {getInputLabel()}
      <select style={selectStyle} className={classes}>
        <option>Select</option>
      </select>

      {getExtraInputContent?.()}
    </div>
  );
}

export default memo(Select);
