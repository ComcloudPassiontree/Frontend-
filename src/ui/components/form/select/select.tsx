import { CSSProperties, memo } from "react";
import useInput from "../input/hooks/useInput";
import clsx from "clsx";
import { BaseInputComponentProps } from "../../types";

interface Props extends BaseInputComponentProps {
  selectStyle?: CSSProperties;
}

function Select(props: Props) {
  const { selectStyle, className, style, value } = props;
  const { classes, getInputLabel, getExtraInputContent } = useInput(props);

  return (
    <div className={clsx("flex-grow", className)} style={style}>
      {getInputLabel()}
      <select style={selectStyle} className={classes}>
        {
          value ?  <option>{value}</option> :  <option>Select</option>
        }
      </select>

      {getExtraInputContent?.()}
    </div>
  );
}

export default memo(Select);
