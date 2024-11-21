import { memo } from "react";
import { Outlet } from "react-router-dom";

function Onboarding() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default memo(Onboarding);
