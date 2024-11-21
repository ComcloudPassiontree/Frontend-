import React, { memo } from "react";
import { BaseComponentProps } from "../types";
import clsx from "clsx";
import Paragraph1 from "../typography/paragraphs/p1";
import { Link } from "react-router-dom";
import { appendUrlParts } from "./utils";

interface Props extends BaseComponentProps {
  href?: string;
  variant?: "purple" | "bg";
  largeText?: boolean;
  to?: string;
  absolute?: boolean;
}

function Button(props: Props) {
  const {
    href,
    children,
    className,
    largeText,
    to,
    absolute,
    variant = "purple",
    ...rest
  } = props;

  const classes = clsx(
    "uppercase",
    "border-[2px]",
    "border-black",
    "rounded-[8px]",
    "px-[22px] py-[9px]",
    `bg-${variant}`,
    "text-white",
    "w-max",
    "transition",
    "block",
    `hover:scale-[1.03] bg-${variant}-900`,
    className
  );

  const Component = to ? Link : href ? "a" : "button";

  return (
    <>
      {/*@ts-ignore*/}
      <Component
        {...(to && { to: absolute ? to : appendUrlParts(to) })}
        {...(href && { href })}
        {...rest}
        className={classes}
      >
        <Paragraph1 bold style={{ ...(largeText && { fontSize: 18 }) }}>
          {children}
        </Paragraph1>
      </Component>
    </>
  );
}

export default memo(Button);
