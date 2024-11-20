import clsx from "clsx";
import { TypographyTypes } from "../types";
import { getTypographyClasses } from "../utils";

interface Props extends TypographyTypes {}

export default function H4(props: Props) {
  const { children, bold, testId, className, ...rest } = props;

  return (
    <h4
      {...rest}
      className={clsx(getTypographyClasses(className, bold), "text-[18px]")}
      data-testid={testId}
    >
      {children}
    </h4>
  );
}
