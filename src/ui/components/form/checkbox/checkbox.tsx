import { memo } from "react";
import { BaseInputComponentProps } from "../../types";
import clsx from "clsx";
import Paragraph2 from "../../typography/paragraphs/p2";
import "./style.css";

interface Props extends BaseInputComponentProps {
  label?: string;
}

function Checkbox(props: Props) {
  const { label, className } = props;

  return (
    <label
      className={clsx(
        className,
        "flex gap-[10px] items-center app-checkbox cursor-pointer relative"
      )}
    >
      <input type="checkbox" />
      <span></span>
      <Paragraph2 className="mt-[0.5px]">{label}</Paragraph2>
    </label>
  );
}

export default memo(Checkbox);
