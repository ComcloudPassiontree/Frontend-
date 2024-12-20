import BackButton from "../../../../../ui/components/back-button/back-button";
import Button from "../../../../../ui/components/button/button";
import H1 from "../../../../../ui/components/typography/headings/h1";
import H4 from "../../../../../ui/components/typography/headings/h4";
import Paragraph2 from "../../../../../ui/components/typography/paragraphs/p2";
import Input from "../../../../../ui/components/form/input/input";
import Select from "../../../../../ui/components/form/select/select";
import PhoneInput from "../../../../../ui/components/form/input/phone/phone-input";

function Reference() {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-[0px] md:flex-row justify-left">
      <div className="basis-1/3 mt-1 fade-in">
        <BackButton to="work-experience" />
      </div>
      <div className="basis-1/3 ml-2 md:min-w-[417px] max-w-[417px] fade-in-up ">
        <H1 bold>Employment Reference</H1>
        <Paragraph2 className="mt-4">
          Please Provide Employment Reference from at least 2 companies you have
          worked in the past.
        </Paragraph2>
        <div>
          <H4
            bold
            className="mt-[24px] border-b-[1px] border-grey-400 w-full pb-[7px] mb-2"
          >
            Referee 1
          </H4>

          <Select label="Company you worked with referee"></Select>
          <div className="flex gap-[20px] flex-wrap">
            <Input className="mt-5" label="Referee's First Name" />
            <Input className="mt-5" label="Referee's Middle Name" />
            <Input label="Referee's Last Name" />
          </div>
          <Input label="Referee's Position/ Role" className="mt-4" />
          <Input label="Referee's Email Address" className="mt-4" />
          <PhoneInput label="Phone Number" className="mt-4" />
        </div>
        <div>
          <H4
            bold
            className="mt-[24px] border-b-[1px] border-grey-400 w-full pb-[7px] mb-2"
          >
            Referee 1
          </H4>

          <Select label="Company you worked with referee"></Select>
          <div className="flex gap-[20px] flex-wrap">
            <Input className="mt-5" label="Referee's First Name" />
            <Input className="mt-5" label="Referee's Middle Name" />
            <Input label="Referee's Last Name" />
          </div>
          <Input label="Referee's Position/ Role" className="mt-4" />
          <Input label="Referee's Email Address" className="mt-4" />
          <PhoneInput label="Phone Number" className="mt-4" />
        </div>
        <Button to="academic-history" className="mt-8 w-full">
          Continue
        </Button>
      </div>
    </div>
  );
}

export default Reference;
