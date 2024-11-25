import { Outlet, useLocation } from "react-router-dom";
import Loader from "../ui/components/loader/loader";
import { useEffect, useState } from "react";
import { MODAL_CONTAINER } from "../helpers/constants";

export default function Root() {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const tId = setTimeout(() => {
      setShowLoader(false);
    }, 4800);

    return () => clearTimeout(tId);
  }, []);

  useEffect(() => {
    if (document.getElementById(MODAL_CONTAINER)) {
      document.body.removeChild(
        document.getElementById(MODAL_CONTAINER) as HTMLElement
      );
    }
    document.body.style.overflow = "auto";
  }, [location]);
  return (
    <div>
      {/*todo: don't hardcode loader*/}
      {showLoader && <Loader />}
      {!showLoader && <Outlet />}
    </div>
  );
}
