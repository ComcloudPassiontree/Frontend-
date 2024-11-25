import { CSSProperties, memo, useState } from "react";
import useInput from "./hooks/useInput";
import clsx from "clsx";
import { BaseInputComponentProps } from "../../types";
import { ReactComponent as PasswordOn } from "../../../../assets/images/password-on.svg";
import { ReactComponent as PasswordOff } from "../../../../assets/images/password-off.svg";

export interface InputProps extends BaseInputComponentProps {
  inputStyle?: CSSProperties;
}

function Input(props: InputProps) {
  const { className, style, inputStyle, type } = props;
  const {
    classes,
    getInputLabel,
    isPassword,
    getExtraInputContent,
    inputProps,
  } = useInput(props);

  const [visibleText, setVisibleText] = useState(isPassword ? false : true);

  return (
    <div className={clsx("flex-grow relative", className)} style={style}>
      {getInputLabel()}
      <input
        {...inputProps}
        className={classes}
        style={inputStyle}
        type={isPassword ? (visibleText ? "text" : "password") : type}
      />
      {isPassword && (
        <div
          onClick={() => setVisibleText(!visibleText)}
          className="password-svg absolute right-0 -mt-7 mx-4 cursor-pointer hover:scale-[1.1]"
        >
          {!visibleText ? (
            <PasswordOn />
          ) : (
            <PasswordOff className="-mt-[1.7px]" />
          )}
        </div>
      )}

      {getExtraInputContent()}
    </div>
  );
}

export default memo(Input);
