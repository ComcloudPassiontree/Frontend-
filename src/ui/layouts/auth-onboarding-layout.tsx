import React, { ReactNode, useEffect } from "react";
import Header from "../components/header/header";
import SecondaryHeader from "../components/header/secondary-header";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  headerContent?: ReactNode;
  disableSecondaryHeader?: boolean;
  className?: string;
}

function AuthOnboardingLayout(props: Props) {
  const { children, headerContent, disableSecondaryHeader, className } = props;
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  });
  return (
    <div className="fade-in">
      <div className="w-full fixed top-0 z-[9]">
        <Header>{headerContent}</Header>
        {!disableSecondaryHeader && <SecondaryHeader />}
      </div>
      <div
        className={clsx(
          "flex items-center justify-center pb-[100px] max-w-[1280px] mx-auto px-6 xl:px-0",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default AuthOnboardingLayout;
