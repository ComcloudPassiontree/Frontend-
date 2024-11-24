import { memo } from "react";
import { BaseInputComponentProps } from "../../types";
import clsx from "clsx";
import Paragraph2 from "../../typography/paragraphs/p2";
import "./style.css";

interface Props extends BaseInputComponentProps {
  label?: string;
  id: string;
}

function Radio(props: Props) {
  const { label, name, className, id } = props;

  return (
    <label
      className={clsx(
        className,
        "flex gap-[10px] items-center justify-center app-radio-button cursor-pointer relative"
      )}
    >
      <div>
        <input type="radio" name={name} id={id} />
        <label htmlFor={id}></label>
      </div>
      <Paragraph2 className="-mt-1">{label}</Paragraph2>
    </label>
  );
}

export default memo(Radio);
