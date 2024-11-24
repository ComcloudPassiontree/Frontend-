import BackButton from "../../../../../ui/components/back-button/back-button";
import Button from "../../../../../ui/components/button/button";
import Input from "../../../../../ui/components/form/input/input";
import Phone from "../../../../../ui/components/form/input/phone/phone-input";
import H1 from "../../../../../ui/components/typography/headings/h1";
import H4 from "../../../../../ui/components/typography/headings/h4";
import Paragraph2 from "../../../../../ui/components/typography/paragraphs/p2";

function PersonalInformation() {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-[0px] md:flex-row justify-left">
      <div className="basis-1/3 mt-1 fade-in">
        <BackButton to="welcome" />
      </div>
      <div className="basis-1/3 ml-2 md:min-w-[417px] max-w-[417px] fade-in-up ">
        <H1 bold>Personal Information</H1>
        <div className="border-b-[1px] border-grey-400 w-full pb-[7px]">
          <H4 bold className="mt-[18px]">
            Full Name
          </H4>
        </div>

        <div className="flex justify-between flex-wrap w-full mt-6 gap-[26px] md:gap-0">
          <Input label="First Name" className="flex-1/2" value="Emerald" />
          <Input label="Middle Name" className="flex-1/2" />
          <Input label="Last Name" className="flex-1/2 mt-0 md:mt-[26px]" />
        </div>

        <div className="border-b-[1px] border-grey-400 w-full pb-[7px] mb-2">
          <H4 bold className="mt-[35px]">
            Enter Phone Number
          </H4>
        </div>
        <Paragraph2>
          Enter the phone number you want to link to your account, we'll send
          you a verification code via SMS.
        </Paragraph2>

        <Phone label="Phone Number" className="mt-[26px]" />
        <Button to="phone-verification" className="mt-10 w-full">
          Continue
        </Button>
      </div>
    </div>
  );
}

export default PersonalInformation;
