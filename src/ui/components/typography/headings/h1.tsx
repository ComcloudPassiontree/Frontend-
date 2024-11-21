import clsx from "clsx";
import { TypographyTypes } from "../types";
import { getTypographyClasses } from "../utils";

interface Props extends TypographyTypes {}

export default function H1(props: Props) {
  const { children, bold, testId, className, ...rest } = props;

  return (
    <h1
      {...rest}
      className={clsx(
        getTypographyClasses(className, bold),
        "text-[32px] lg:text-[40px]"
      )}
      data-testid={testId}
    >
      {children}
    </h1>
  );
}
