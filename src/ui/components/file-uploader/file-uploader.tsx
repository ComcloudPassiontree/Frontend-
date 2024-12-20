import React, { memo, useRef } from "react";
import { BaseComponentProps } from "../types";
import clsx from "clsx";
import Paragraph1 from "../typography/paragraphs/p1";
import { ReactComponent as Picture } from "../../../assets/images/picture.svg";

interface Props extends BaseComponentProps {
  label?: string;
  type?: "image" | "document";
}

function FileUploader(props: Props) {
  const { className, label } = props;
  const inputRef = useRef<HTMLInputElement>(null!);

  return (
    <div
      onClick={() => inputRef.current.click()}
      className={clsx(
        "py-10 border-2 border-black flex justify-center flex-col items-center hover:bg-active cursor-pointer bg-beige rounded-[8px]",
        className
      )}
    >
      <input ref={inputRef} type="file" className="hidden" />
      <Picture />
      <Paragraph1 bold className="mt-2">
        Drag your image here or <span className="underline">browse files</span>
      </Paragraph1>
    </div>
  );
}

export default memo(FileUploader);
