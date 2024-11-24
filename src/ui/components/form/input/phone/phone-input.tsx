import { CSSProperties, memo } from "react";
import useInput from "../hooks/useInput";
import clsx from "clsx";
import { ReactComponent as UKFlag } from "../../../../../assets/images/uk.svg";
import Paragraph2 from "../../../typography/paragraphs/p2";
import { BaseInputComponentProps } from "../../../types";

interface Props extends BaseInputComponentProps {
  inputStyle?: CSSProperties;
  label?: string | number;
}

function PhoneInput(props: Props) {
  const { className, style, inputStyle, label, ...rest } = props;
  const { classes, getInputLabel } = useInput(label);

  return (
    <div
      className={clsx("min-w-[200px] relative flex-grow", className)}
      style={style}
    >
      {getInputLabel()}

      <input
        {...rest}
        className={clsx(classes, "pl-[104px]")}
        style={inputStyle}
      />
      <div className="w-[100px] flex bottom-0 absolute items-center">
        <div className="py-[12px] px-[18px] border-r border-black">
          <UKFlag />
        </div>
        <Paragraph2 className="ml-3">+44</Paragraph2>
      </div>
    </div>
  );
}

export default memo(PhoneInput);
