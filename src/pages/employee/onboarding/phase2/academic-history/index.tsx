import BackButton from "../../../../../ui/components/back-button/back-button";
import Button from "../../../../../ui/components/button/button";
import H1 from "../../../../../ui/components/typography/headings/h1";
import H4 from "../../../../../ui/components/typography/headings/h4";
import Paragraph2 from "../../../../../ui/components/typography/paragraphs/p2";
import Input from "../../../../../ui/components/form/input/input";
import Select from "../../../../../ui/components/form/select/select";
import Checkbox from "../../../../../ui/components/form/checkbox/checkbox";
import { useState } from "react";
import Paragraph1 from "../../../../../ui/components/typography/paragraphs/p1";
import { ReactComponent as PlusCircle } from "../../../../../assets/images/plus-circle.svg";

function AcademicHistory() {
  const [data, setData] = useState({ inprogress: false });
  const [fields, setFields] = useState(1);
  return (
    <div className="w-full flex flex-col gap-4 md:gap-[0px] md:flex-row justify-left">
      <div className="basis-1/3 mt-1 fade-in">
        <BackButton to="reference" />
      </div>
      <div className="basis-1/3 ml-2 md:min-w-[417px] max-w-[417px] fade-in-up ">
        <H1 bold>Academic History</H1>
        <Paragraph2 className="mt-4">
          Detail your academic background including the institutions attended,
          degrees, and dates of attendance.
        </Paragraph2>
        {[...Array(fields)]?.map((field) => (
          <div>
            <H4
              bold
              className="mt-[24px] border-b-[1px] border-grey-400 w-full pb-[7px] mb-4"
            >
              Education
            </H4>
            <Input label="Name of Institution" />
            <div className="flex gap-[20px] flex-wrap">
              <Input className="mt-5" label="Courses/ Program" />
              <Select className="mt-5" label="Degree Type" />
            </div>

            <div className="flex gap-[20px] flex-wrap">
              <div className="w-1/2">
                <Input className="mt-5" label="Start Date" type="date" />
              </div>
              <Checkbox
                onChange={() =>
                  setData({
                    inprogress: !data?.inprogress,
                  })
                }
                checked={data?.inprogress}
                className="mt-[54px]"
                label={<Paragraph2 bold>In Progress</Paragraph2>}
              />
            </div>
            {!data?.inprogress && (
              <div className="w-1/2">
                <Input className="mt-5" label="End Date" type="date" />
              </div>
            )}
          </div>
        ))}

        <div className="mt-[29px]">
          <hr className="border-b-1 border-grey-300" />
          <Paragraph1
            onClick={() => setFields(fields + 1)}
            bold
            className="cursor-pointer underline flex items-center gap-2 w-full text-center justify-center mt-3"
          >
            <PlusCircle /> Add Education
          </Paragraph1>
        </div>
        <Button to="upload-passport" className="mt-8 w-full">
          Continue
        </Button>
      </div>
    </div>
  );
}

export default AcademicHistory;
