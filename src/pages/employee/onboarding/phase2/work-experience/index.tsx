import BackButton from "../../../../../ui/components/back-button/back-button";
import Button from "../../../../../ui/components/button/button";
import H1 from "../../../../../ui/components/typography/headings/h1";
import H4 from "../../../../../ui/components/typography/headings/h4";
import Paragraph1 from "../../../../../ui/components/typography/paragraphs/p1";
import Paragraph2 from "../../../../../ui/components/typography/paragraphs/p2";
import { ReactComponent as PlusCircle } from "../../../../../assets/images/plus-circle.svg";
import { ReactComponent as Clip } from "../../../../../assets/images/clip.svg";
import H3 from "../../../../../ui/components/typography/headings/h3";
import Input from "../../../../../ui/components/form/input/input";
import Checkbox from "../../../../../ui/components/form/checkbox/checkbox";
import Textarea from "../../../../../ui/components/form/input/textarea/textarea";

function WorkExperience() {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-[0px] md:flex-row justify-left">
      <div className="basis-1/3 mt-1 fade-in">
        <BackButton to="personal-details" />
      </div>
      <div className="basis-1/3 ml-2 md:min-w-[417px] max-w-[417px] fade-in-up ">
        <H1 bold>Work Experience</H1>
        <H4
          bold
          className="mt-[24px] border-b-[1px] border-grey-400 w-full pb-[7px] mb-2"
        >
          Demography
        </H4>
        <Paragraph2>
          Please provide details about your past and current roles, including
          your responsibilities and achievements. If you have a prepared resume,
          you can upload it directly for convenience. Alternatively, you can
          enter the details manually below."
        </Paragraph2>

        <Button
          variant="warning"
          className="mt-8 w-full border-[1px] py-[1px] h-[43px]"
        >
          <Clip />{" "}
          <span className="capitalize underline ml-2">Upload Resume</span>
        </Button>

        <H3
          bold
          className="mt-[24px] border-b-[1px] border-grey-400 w-full pb-[7px] mb-2"
        >
          Upload Manually
        </H3>

        <Input label="Company" className="mt-4" />
        <Input label="Job Title" className="mt-4" />
        <div className="flex gap-[20px] flex-wrap">
          <Input className="mt-5" label="Start date" type="date" />
          <Input className="mt-5" label="End date" type="date" />
        </div>
        <Checkbox
          className="mt-3"
          label={<Paragraph2>I currently work here</Paragraph2>}
        />
        <Textarea
          label="Description"
          className="mt-7"
          placeholder="Describe the job role and your responsibilities."
        />

        <div className="mt-[20px]">
          <hr className="border-b-1 border-grey-300" />
          <Paragraph1
            bold
            className="cursor-pointer underline flex items-center gap-2 w-full text-center justify-center mt-10"
          >
            <PlusCircle /> Add Work Experience
          </Paragraph1>
        </div>
        <Button to="work-experience" className="mt-8 w-full">
          Continue
        </Button>
      </div>
    </div>
  );
}

export default WorkExperience;
