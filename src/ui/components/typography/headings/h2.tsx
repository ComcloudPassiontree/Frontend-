import clsx from "clsx";
import { TypographyTypes } from "../types";
import { getTypographyClasses } from "../utils";

interface Props extends TypographyTypes {}

export default function H2(props: Props) {
  const { children, bold, testId, className, ...rest } = props;

  return (
    <h2
      {...rest}
      className={clsx(getTypographyClasses(className, bold), "text-[32px]")}
      data-testid={testId}
    >
      {children}
    </h2>
  );
}
