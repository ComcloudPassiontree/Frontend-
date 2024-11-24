import { memo, ReactNode } from "react";
import { BaseComponentProps } from "../types";
import clsx from "clsx";
import Paragraph2 from "../typography/paragraphs/p2";
import "./style.css";

interface Props extends BaseComponentProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
  actionElement?:ReactNode
  variant?:"neutral" | "danger" | "warning" | "success"
}

function MessageCard(props: Props) {
  const { variant = "neutral", actionElement, icon, title, description, className, ...rest } = props;

  return (
    <div
    style={{backgroundColor:`var(--color-${variant})`}}
      className={clsx(
        className,
        `flex border-black border message-card rounded-[8px] p-3 p-4 gap-3`
      )}
      {...rest}
    >
      {icon}
      <div>
        <div className="flex justify-between">
          <Paragraph2 bold>{title}</Paragraph2>
          <div>{actionElement}</div>
        </div>
        <Paragraph2>{description}</Paragraph2>
      </div>
    </div>
  );
}

export default memo(MessageCard);
