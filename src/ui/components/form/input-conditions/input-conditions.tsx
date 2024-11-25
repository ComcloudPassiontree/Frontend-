import { memo, useEffect } from "react";
import { BaseComponentProps } from "../../types";
import clsx from "clsx";
import { ReactComponent as Wrong } from "../../../../assets/images/wrong.svg";
import { ReactComponent as Correct } from "../../../../assets/images/correct.svg";
import Caption from "../../typography/caption";
import { Condition } from "./types";

interface Props extends BaseComponentProps {
  text: string;
  conditions: Condition[];
  setSatisfied?: (value: boolean) => void;
}

function InputConditions(props: Props) {
  const { text, className, conditions, setSatisfied, ...rest } = props;

  useEffect(() => {
    const allSatisfied = conditions.every((condition) => {
      const regex = new RegExp(condition.regex);
      return regex.test(text);
    });
    setSatisfied?.(allSatisfied);
  }, [conditions, setSatisfied, text]);

  return (
    <div {...rest} className={clsx("flex flex-wrap gap-y-3", className)}>
      {conditions.map((item) => {
        const satisfied = new RegExp(item?.regex).test(text);
        return (
          <div className="basis-1/2 flex items-center gap-1" key={item?.title}>
            {satisfied ? <Correct /> : <Wrong />}
            <Caption>{item?.title}</Caption>
          </div>
        );
      })}
    </div>
  );
}

export default memo(InputConditions);
