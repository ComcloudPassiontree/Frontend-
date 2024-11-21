import { memo } from "react";
import { ReactComponent as LogoSVG } from "../../../assets/images/logo.svg";

function Logo() {
  return <LogoSVG className="h-[24px] md:h-[32px]" />;
}

export default memo(Logo);
