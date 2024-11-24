import clsx from "clsx";
import Logo from "../logo/logo";
import { ComponentTypes } from "../types";
import { memo } from "react";

interface Props extends ComponentTypes {}

function Header(props: Props) {
  const { children, className, ...rest } = props;

  return (
    <div
      {...rest}
      className={clsx(
        className,
        "h-[56px] md:h-[96px] border-b-2 border-black py-[7px] md:py-[25px] bg-bg"
      )}
    >
      <div className="max-w-[1280px] w-[96%] h-full mx-[auto] gap-[0px] xl:gap-[110px] flex justify-between items-center">
        <Logo />
        <div className="xl:flex-1">{children}</div>
      </div>
    </div>
  );
}

export default memo(Header);
