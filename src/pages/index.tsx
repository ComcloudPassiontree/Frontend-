import { Outlet } from "react-router-dom";
import Loader from "../ui/components/loader/loader";
import { useEffect, useState } from "react";

export default function Root() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const tId = setTimeout(() => {
      setShowLoader(false);
    }, 4800);

    return () => clearTimeout(tId);
  }, []);
  return (
    <div>
      {/*todo: don't hardcode loader*/}
      {showLoader && <Loader />}
      {!showLoader && <Outlet />}
    </div>
  );
}
