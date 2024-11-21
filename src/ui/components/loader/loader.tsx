import { memo, useEffect, useState } from "react";
import "./styles.css";

export default memo(function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const tId = setTimeout(
      () => {
        setShow(!show);
      },
      show ? 2700 : 0
    );
    return () => clearTimeout(tId);
  }, [show]);
  return (
    <div className="flex items-center justify-center h-screen w-screen fixed top-0 z-[9] bg-bg">
      {show && (
        <div className="w-[100px] h-[80px] flex justify-center items-center gap-[8px]">
          <div className="a1 bg-purple w-[30px] border-black border-[6px] rounded-[7px] opacity-0"></div>
          <div className="a2 bg-white w-[30px] border-black border-[6px] rounded-[7px] opacity-0"></div>
          <div className="loaderBar bg-black h-[7px] rounded absolute z-[-1]"></div>
        </div>
      )}
    </div>
  );
});
