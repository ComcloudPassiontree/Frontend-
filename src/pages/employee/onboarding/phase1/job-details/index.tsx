import BackButton from "../../../../../ui/components/back-button/back-button";
import Button from "../../../../../ui/components/button/button";
import Input from "../../../../../ui/components/form/input/input";
import Radio from "../../../../../ui/components/form/radio/radio";
import Select from "../../../../../ui/components/form/select/select";
import H1 from "../../../../../ui/components/typography/headings/h1";
import H3 from "../../../../../ui/components/typography/headings/h3";
import Paragraph2 from "../../../../../ui/components/typography/paragraphs/p2";

function JobDetails() {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-[0px] md:flex-row justify-left">
      <div className="basis-1/3 mt-1 fade-in">
        <BackButton to="phone-verification" />
      </div>
      <div className="basis-1/3 ml-2 md:min-w-[417px] max-w-[417px] fade-in-up ">
        <H1 bold>Information and Eligibility</H1>
        <div className="border-b-[1px] border-grey-400 w-full pb-[7px] mb-2">
          <H3 bold className="mt-[24px]">
            Job Details
          </H3>
        </div>
        <Paragraph2>
          Please provide the specifics of the job you are applying for,
          including the position and the preferred office location. This
          information helps us match your application to the right opportunities
        </Paragraph2>

        <Input
          disabled
          value="[ Placeholder - Job Role set by Admin ]"
          label="Job Role"
          className="mt-5 font-[600]"
        />
        <Input
          disabled
          value="12 Harris Drive, VGC, Lekki"
          label="Office Branch"
          className="mt-5 font-[600]"
        />

        <div className="border-b-[1px] border-grey-400 w-full pb-[7px] mb-2">
          <H3 bold className="mt-[24px]">
            Residential Status
          </H3>
        </div>
        <Paragraph2>
          Our residency information is crucial for understanding your work
          eligibility and whether visa sponsorship is needed. Select your
          country of residence and current
        </Paragraph2>

        <div className="flex gap-[20px] flex-wrap">
          <Select className="mt-5" label="Country of Residence"></Select>
          <Select className="mt-5" label="Residential Status"></Select>
        </div>

        <div className="mt-6 mb-3">
          <Paragraph2 bold>Do you require visa sponsorship?</Paragraph2>
          <div className="flex gap-6 mt-[7px]">
            <Radio label="Yes" name="visa" id="yes" />
            <Radio label="No" name="visa" id="no" />
          </div>
        </div>
        <Button to="create-password" className="mt-10 w-full">
          Continue
        </Button>
      </div>
    </div>
  );
}

export default JobDetails;
