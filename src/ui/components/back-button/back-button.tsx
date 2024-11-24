import { memo } from "react";
import { BaseComponentProps } from "../types";
import { Link } from "react-router-dom";
import { ReactComponent as Back } from "../../../assets/images/back.svg";
import { appendUrlParts } from "../button/utils";
import clsx from "clsx";

interface Props extends BaseComponentProps {
  to: string;
  absolutePath?: boolean;
}

function BackButton(props: Props) {
  const { to, absolutePath, className } = props;

  return (
    <Link
      to={absolutePath ? to : appendUrlParts(to)}
      className={clsx(
        "flex items-center transition gap-2 -ml-0 hover:-ml-[3px] w-max",
        className
      )}
    >
      <Back />
      <span className="uppercase text-[16px] font-[700]">Back</span>
    </Link>
  );
}

export default memo(BackButton);
