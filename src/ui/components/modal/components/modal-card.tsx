import React, { memo, ReactNode } from "react";
import clsx from "clsx";
import Paragraph2 from "../../typography/paragraphs/p2";
import H3 from "../../typography/headings/h3";

interface Props {
  className?: string;
  children: ReactNode;
  title?: string;
  description?: string;
  icon?: ReactNode;
}

function ModalCard(props: Props) {
  const { children, className, title, description, icon } = props;
  return (
    <div
      className={clsx(
        className,
        "w-[90%] max-w-[458px] border-black border-2 rounded-[8px] bg-white mx-auto box-border py-12 px-4 md:px-8 flex items-center justify-center flex-col text-center gap-3"
      )}
    >
      {icon}
      <H3 bold>{title}</H3>
      <Paragraph2 className="my-1">{description}</Paragraph2>
      {children}
    </div>
  );
}

export default memo(ModalCard);
