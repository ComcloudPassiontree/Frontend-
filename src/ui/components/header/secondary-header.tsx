import React, { memo } from "react";
import { ComponentTypes } from "../types";

import { ReactComponent as ImgLeft } from "../../../assets/images/8.svg";
import { ReactComponent as ImgCenter } from "../../../assets/images/Vector.svg";
import { ReactComponent as ImgRight } from "../../../assets/images/10.svg";

function SecondaryHeader(props: ComponentTypes) {
  const { children } = props;

  return (
    <div className="h-[64px] w-full bg-purple">
      <div className="flex justify-between absolute w-full">
        <ImgLeft />
        <ImgCenter className="ml-[-140px]" />
        <ImgRight />
      </div>
      <div className="w-full relative z-[3]">{children}</div>
    </div>
  );
}

export default memo(SecondaryHeader);
