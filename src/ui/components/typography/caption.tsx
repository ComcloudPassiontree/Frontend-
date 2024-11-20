import clsx from "clsx";
import { TypographyTypes } from "./types";
import { getTypographyClasses } from "./utils";

interface Props extends TypographyTypes {}

export default function Caption(props: Props) {
  const { children, testId, bold, className, ...rest } = props;

  return (
    <p
      {...rest}
      className={clsx(getTypographyClasses(className, bold), "text-[12px]")}
      data-testid={testId}
    >
      {children}
    </p>
  );
}
