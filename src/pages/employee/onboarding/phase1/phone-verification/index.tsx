import BackButton from "../../../../../ui/components/back-button/back-button";
import Button from "../../../../../ui/components/button/button";
import H1 from "../../../../../ui/components/typography/headings/h1";
import H4 from "../../../../../ui/components/typography/headings/h4";
import Paragraph2 from "../../../../../ui/components/typography/paragraphs/p2";
import MessageCard from "../../../../../ui/components/message-card/message-card";
import { ReactComponent as LockIcon } from "../../../../../assets/images/lock.svg";
import CodeInput from "../../../../../ui/components/form/input/code/code-input";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Toggle from "../../../../../ui/components/form/radio/toggle";

function PhoneVerification() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const next = useCallback(() => {
    setIsLoading(true);
    const tId = setTimeout(() => {
      navigate("/employee/onboarding/phase1/job-details");
    }, 2000);

    return () => clearTimeout(tId);
  }, [navigate]);
  return (
    <div className="w-full flex flex-col gap-4 md:gap-[0px] md:flex-row justify-left">
      <div className="basis-1/3 mt-1 fade-in">
        <BackButton to="personal-information" />
      </div>
      <div className="basis-1/3 ml-2 md:min-w-[417px] max-w-[417px] fade-in-up ">
        <H1 bold>Phone Number Verification</H1>
        <div className="border-b-[1px] border-grey-400 w-full pb-[7px] mb-2">
          <H4 bold className="mt-[39px]">
            One Time Code Verification
          </H4>
        </div>
        <Paragraph2>
          Enter the 6 digit code we sent to +44 7700 123456
        </Paragraph2>

        <CodeInput />

        <Button className="mt-10 w-full" isLoading={isLoading} onClick={next}>
          Continue
        </Button>

        <MessageCard
          className="mt-8 fade-in-up delay2"
          icon={<LockIcon />}
          actionElement={<Toggle />}
          title="Two Factor Authentication"
          description="Offers an additional layer of security by requiring a second form of verification when signing in."
        />
      </div>
    </div>
  );
}

export default PhoneVerification;
