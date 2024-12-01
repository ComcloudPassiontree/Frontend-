import React, { ReactNode } from "react";
import Header from "../components/header/header";
import SecondaryHeader from "../components/header/secondary-header";

interface Props {
  children: ReactNode;
  headerContent?: ReactNode;
}

function AuthOnboardingLayout(props: Props) {
  const { children, headerContent } = props;

  return (
    <div className="fade-in">
      <div className="w-full fixed top-0 z-[9]">
        <Header>{headerContent}</Header>
        <SecondaryHeader />
      </div>
      <div className="pt-[160px] md:pt-[199px] flex items-center justify-center pb-[100px] max-w-[1280px] mx-auto px-6 xl:px-0">
        {children}
      </div>
    </div>
  );
}

export default AuthOnboardingLayout;
