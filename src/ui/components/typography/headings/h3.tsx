import clsx from "clsx";
import { TypographyTypes } from "../types";
import { getTypographyClasses } from "../utils";

interface Props extends TypographyTypes {}

export default function H3(props: Props) {
  const { children, bold, testId, className, ...rest } = props;

  return (
    <h3
      {...rest}
      className={clsx(
        getTypographyClasses(className, bold),
        "text-[20px] lg:text-[24px]"
      )}
      data-testid={testId}
    >
      {children}
    </h3>
  );
}
