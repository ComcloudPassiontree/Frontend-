import BackButton from "../../../../../ui/components/back-button/back-button";
import Button from "../../../../../ui/components/button/button";
import Checkbox from "../../../../../ui/components/form/checkbox/checkbox";
import H1 from "../../../../../ui/components/typography/headings/h1";
import H4 from "../../../../../ui/components/typography/headings/h4";
import Paragraph1 from "../../../../../ui/components/typography/paragraphs/p1";
import { useState } from "react";
import Paragraph2 from "../../../../../ui/components/typography/paragraphs/p2";
import toast from "../../../../../helpers/toasts/toasts";

function Acknowledgement() {
  const [accepted, setAccepted] = useState(false);
  return (
    <div className="w-full flex flex-col gap-4 md:gap-[0px] md:flex-row justify-left">
      <div className="basis-1/3 mt-1 fade-in">
        <BackButton to="upload-passport" />
      </div>
      <div className="basis-1/3 ml-2 md:min-w-[417px] max-w-[417px] fade-in-up ">
        <H1 bold>Acknowledgement and Consent</H1>
        <H4
          bold
          className="mt-[24px] border-b-[1px] border-grey-400 w-full pb-[7px] mb-4"
        >
          Guidelines
        </H4>
        <Paragraph2 bold>Employment Reference: </Paragraph2>
        <ul className="list-disc pl-4 text-sm leading-[23px]">
          <li>
            The information provided is complete and accurate to the best of
            your knowledge.
          </li>
          <li>
            You understand that any discrepancies or inaccuracies found may lead
            to the termination of your application or employment.
          </li>
          <li>
            You consent to us storing and processing your personal information
            in accordance with the UK Data Protection Act. We will keep your
            data secure and confidential. Our data retention policy ensures that
            your information will not be kept longer than necessary and outlines
            your rights to access or request deletion of your data.
          </li>
          <li>
            You acknowledge our commitment to equal opportunity employment and
            that our recruitment process does not discriminate based on
            [relevant protected characteristics].
          </li>
          <li>
            If applicable, you are interested in being considered for future job
            opportunities that match your profile.
          </li>
        </ul>
        <div className="flex gap-3 flex-col mt-3">
          <Checkbox label="I confirm the accuracy of my application" />
          <Checkbox label="I agree to the terms of data storage and processing." />
          <Checkbox label="I wish to be contacted about future job opportunities" />
        </div>

        <Paragraph2 bold className="mt-4">
          Data Security and Accessibility:{" "}
        </Paragraph2>
        <ul className="list-disc pl-4 text-sm leading-[23px]">
          <li>
            To secure your personal information, you will be invited to set up
            Multi-Factor Authentication after account creation. Our application
            process is designed to be accessible to all candidates. If you
            require any accommodations, please inform us at{" "}
            <a className="underline font-[700] inline" href="/">
              Contact Us
            </a>
          </li>
        </ul>

        <Paragraph2 bold className="mt-4">
          Privacy Policy and Rights:{" "}
        </Paragraph2>
        <ul className="list-disc pl-4 text-sm leading-[23px]">
          <li>
            For detailed information about how we handle your data, please refer
            to our [Privacy Policy](link to the privacy policy). To learn more
            about your rights under the UK Data Protection Act, including data
            retention, access, and deletion, please visit our{" "}
            <a className="font-[700] inline" href="/">
              [Data Protection Policy]
            </a>
          </li>
        </ul>

        <Checkbox
          onChange={() => setAccepted(!accepted)}
          className="mt-5"
          label="I have read and understand the Privacy Policy and Data Protection Policy."
        />

        <hr className="mt-5 mb-[40px] border-b-1 border-grey-300" />

        <Button
          className="mt-8 w-full"
          disabled={!accepted}
          onClick={
            !accepted
              ? () => null
              : () =>
                  toast.modal.success({
                    title: "Submission Successful",
                    description:
                      "We have initiated contact with your provided references  to verify your employment history. We recommend you reach out to your referees and encourage their prompt response.",
                  })
          }
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default Acknowledgement;
