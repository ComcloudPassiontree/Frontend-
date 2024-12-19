import { CSSProperties, memo, useState } from "react";
import useInput from "./hooks/useInput";
import clsx from "clsx";
import { BaseInputComponentProps } from "../../types";
import { extractTextClasses } from "../../../../helpers/utils";
import InputIcon from "./input-icon/input-icon";

export interface InputProps extends BaseInputComponentProps {
  inputStyle?: CSSProperties;
}

function Input(props: InputProps) {
  const { className, style, inputStyle, type, disabled, isLoading } = props;
  const {
    classes,
    getInputLabel,
    isPassword,
    getExtraInputContent,
    inputProps,
    needsIcon,
  } = useInput(props);

  const [visibleText, setVisibleText] = useState(isPassword ? false : true);

  return (
    <div className={clsx("flex-grow relative", className)} style={style}>
      {getInputLabel()}
      <input
        {...inputProps}
        className={clsx(classes, extractTextClasses(className))}
        style={inputStyle}
        type={isPassword ? (visibleText ? "text" : "password") : type}
      />
      {needsIcon && (
        <InputIcon
          onClick={isPassword ? () => setVisibleText(!visibleText) : undefined}
          visibleText={visibleText}
          isPassword={isPassword}
          disabledInput={disabled}
          isLoading={isLoading}
        />
      )}

      {getExtraInputContent()}
    </div>
  );
}

export default memo(Input);
