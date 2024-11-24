import { useCallback } from "react";
import Paragraph2 from "../../../typography/paragraphs/p2";

function useInput(label?: string | number) {
  const classes =
    "border-black border-[1.3px] bg-transparent py-[8.5px] px-3 text-[14px] rounded-[8px] mt-[8px] w-full h-[40px]";

  const getInputLabel = useCallback(() => {
    if (label) {
      return <Paragraph2 bold>{label}</Paragraph2>;
    }
    return null;
  }, [label]);

  return { classes, getInputLabel };
}

export default useInput;
