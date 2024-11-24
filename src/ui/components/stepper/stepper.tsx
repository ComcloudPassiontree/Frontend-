import Paragraph1 from "../typography/paragraphs/p1";
import { StepperEnums, Stepper as StepperType } from "./types";
import "./styles.css";
import clsx from "clsx";
import Paragraph2 from "../typography/paragraphs/p2";
import { memo } from "react";
import TextPill from "../text-pill/text-pill";

export default memo(function Stepper({ steps }: { steps: StepperType }) {
  const active = steps.filter(
    (step) => step?.status === StepperEnums.active
  )[0];
  return (
    <>
      <div className="h-[50px] w-full max-w-[800px] hidden lg:flex stepper fade-in">
        {steps.map((item) => {
          return (
            <div
              key={item?.title}
              className="flex flex-col gap-[6px] items-center lg:min-w-[190px] xl:min-w-[210px]"
            >
              <div
                className={clsx({
                  "border-2 border-black h-[16px] w-full": true,
                  "bg-active": item?.status === StepperEnums.active,
                  "bg-pending": item?.status === StepperEnums.pending,
                  "bg-done": item?.status === StepperEnums.done,
                })}
              ></div>
              {item?.status === StepperEnums.active ? (
                <Paragraph1 bold>{item?.title}</Paragraph1>
              ) : (
                <Paragraph2>{item.title}</Paragraph2>
              )}
            </div>
          );
        })}
      </div>
      <TextPill className="bg-active block lg:hidden">
        Stage {steps.indexOf(active) + 1} of {steps?.length}
      </TextPill>
    </>
  );
});
