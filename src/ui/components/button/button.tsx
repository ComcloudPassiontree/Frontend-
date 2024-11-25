import { memo } from "react";
import { BaseComponentProps } from "../types";
import Paragraph1 from "../typography/paragraphs/p1";
import { Link } from "react-router-dom";
import { appendUrlParts, getButtonClasses } from "./utils";
import { ReactComponent as Loader } from "../../../assets/images/progress.svg";

interface Props extends BaseComponentProps {
  href?: string;
  variant?: "purple" | "bg";
  largeText?: boolean;
  to?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

function Button(props: Props) {
  const {
    href,
    children,
    className,
    largeText,
    to,
    variant = "purple",
    disabled,
    isLoading,
    ...rest
  } = props;

  const classes = getButtonClasses(variant, className, disabled || isLoading);

  const Component = to ? Link : href ? "a" : "button";

  return (
    <>
      {/*@ts-ignore*/}
      <Component
        {...(to && !disabled && { to: appendUrlParts(to) })}
        {...(href && !disabled && { href })}
        {...rest}
        disabled={disabled || isLoading}
        className={classes}
      >
        <Paragraph1
          bold
          className="text-center"
          style={{ ...(largeText && { fontSize: 18 }) }}
        >
          {isLoading ? <Loader className="animate-spin mx-auto" /> : children}
        </Paragraph1>
      </Component>
    </>
  );
}

export default memo(Button);
