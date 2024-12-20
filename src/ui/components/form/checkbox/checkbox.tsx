import { memo } from "react";
import { BaseInputComponentProps } from "../../types";
import clsx from "clsx";
import Paragraph2 from "../../typography/paragraphs/p2";
import "./style.css";

interface Props extends BaseInputComponentProps {
  large?: boolean;
}

function Checkbox(props: Props) {
  const { label, className, large } = props;

  return (
    <label
      className={clsx(
        className,
        large && "large",
        "flex gap-[7px] no_select app-checkbox cursor-pointer relative"
      )}
    >
      <input type="checkbox" {...props} />
      <span></span>
      <Paragraph2 className="-mt-[1px] leading-[20px]">{label}</Paragraph2>
    </label>
  );
}

export default memo(Checkbox);
