import H1 from "../../../../../ui/components/typography/headings/h1";
import Paragraph1 from "../../../../../ui/components/typography/paragraphs/p1";
import H3 from "../../../../../ui/components/typography/headings/h3";
import TextPill from "../../../../../ui/components/text-pill/text-pill";
import Button from "../../../../../ui/components/button/button";

function Welcome() {
  return (
    <div className="w-full max-w-[840px] fade-in-up">
      <H1 bold>Hi Emerald,</H1>
      <Paragraph1 className="mt-[4px]">
        You have been invited by winter to set up your account in order to
        proceed with you application.
      </Paragraph1>

      <div className="mt-[37px]">
        <H3 bold>Get started with your account</H3>
        <Paragraph1 className="mt-[7px]">
          This is the first stage of of your application process, set up your
          account to get started.
        </Paragraph1>

        <div className="flex gap-[12px] flex-wrap mt-[22px] w-[80%]">
          <TextPill counter={1}>Fill Personal Details</TextPill>
          <TextPill counter={2}>Fill Work Experience and References</TextPill>
          <TextPill counter={3}>Upload Selfie</TextPill>
          <TextPill counter={4}>Confirm your Data</TextPill>
        </div>
        <Button to="personal-information" className="mt-[40px]" largeText>
          Get started
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
