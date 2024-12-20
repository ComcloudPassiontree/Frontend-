import H1 from "../../../../../ui/components/typography/headings/h1";
import Paragraph2 from "../../../../../ui/components/typography/paragraphs/p2";
import TextPill from "../../../../../ui/components/text-pill/text-pill";
import Button from "../../../../../ui/components/button/button";
import TimeLeftCounter from "../../../../../ui/components/time-left-counter/time-left-counter";

function Welcome() {
  return (
    <div>
      <div className="fade-in mt-6 flex items-center flex-col md:w-[562px] text-center w-full">
        <H1 bold>Hi Pinkett,</H1>
        <h2 className="-mt-4 text-[40px] md:text-[64px] font-[900] font-primary">
          WELCOME BACK!
        </h2>
        <Paragraph2>
          Your account has been successfully set up. The next phase of the
          process will encompass the following stages:
        </Paragraph2>
        <div className="flex gap-[12px] flex-col mt-[18px] w-[80%] items-center">
          <TextPill counter={1}>Fill Personal Details</TextPill>
          <TextPill counter={2}>Fill Work Experience and References</TextPill>
          <TextPill counter={3}>Upload Passport Photograph</TextPill>
          <TextPill counter={4}>Confirm your Data</TextPill>
        </div>
      </div>
      <div className="bg-purple w-full h-[120px] absolute left-0 bottom-0 border-t-2 border-black flex items-center justify-between px-[80px]">
        <TimeLeftCounter />
        <Button to="personal-details" variant="white" className="w-[240px]">
          Continue
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
