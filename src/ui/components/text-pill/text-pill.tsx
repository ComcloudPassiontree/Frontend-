import React, { memo } from "react";
import { BaseComponentProps } from "../types";
import Paragraph1 from "../typography/paragraphs/p1";
import clsx from "clsx";
import Paragraph2 from "../typography/paragraphs/p2";

interface Props extends BaseComponentProps {
  counter?: number | string;
}

function TextPill(props: Props) {
  const { children, className, counter, ...rest } = props;
  return (
    <div
      {...rest}
      className={clsx(
        className,
        "px-[11px] py-[6px] rounded-[8px] border-black border-[2px] inline-block w-max font-[700]"
      )}
    >
      {typeof children !== "string" ? (
        children
      ) : (
        <Paragraph1 bold className="flex gap-[8px]">
          {children}
          {counter && (
            <Paragraph2 className="block rounded-full border-black border-[2px] bg-grey-300 w-[24px] h-[24px] flex items-center justify-center">
              {counter}
            </Paragraph2>
          )}
        </Paragraph1>
      )}
    </div>
  );
}

export default memo(TextPill);
