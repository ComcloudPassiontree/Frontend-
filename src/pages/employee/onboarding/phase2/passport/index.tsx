import BackButton from "../../../../../ui/components/back-button/back-button";
import Button from "../../../../../ui/components/button/button";
import FileUploader from "../../../../../ui/components/file-uploader/file-uploader";
import H1 from "../../../../../ui/components/typography/headings/h1";
import H4 from "../../../../../ui/components/typography/headings/h4";
import Paragraph1 from "../../../../../ui/components/typography/paragraphs/p1";
import Paragraph2 from "../../../../../ui/components/typography/paragraphs/p2";
import { useState } from "react";
import PassportUploadGuide from "./components/passport-upload-guide";

function UploadPassport() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full flex flex-col gap-4 md:gap-[0px] md:flex-row justify-left">
      <div className="basis-1/3 mt-1 fade-in">
        <BackButton to="academic-history" />
      </div>
      <div className="basis-1/3 ml-2 md:min-w-[417px] max-w-[417px] fade-in-up ">
        <H1 bold>Upload Passport Photo</H1>

        <Paragraph2 className="mt-4">
          Detail your academic background including the institutions attended,
          degrees, and dates of attendance.
        </Paragraph2>

        <H4
          bold
          className="mt-[24px] border-b-[1px] border-grey-400 w-full pb-[7px] mb-4"
        >
          Guidelines
        </H4>
        <Paragraph1 bold>Digital photo rules: </Paragraph1>
        <ul className="list-disc pl-4 mt-2 text-sm leading-[23px]">
          <li>
            your photo must look like you and must have been taken in the last
            month
          </li>
          <li>
            use a plain light-coloured background with no patterns or textures
            and don't have objects behind you
          </li>
          <li>
            no shadows on your face or behind you - it's best to use natural
            sunlight, for example facing a window
          </li>
          <li>
            stand 0.5 metres (1.5 feet) away from your background (this helps to
            stop shadows appearing)
          </li>
          <li>
            the person taking the photo should stand 1.5 metres (5 feet) from
            you
          </li>
          <li>
            include your head, shoulders and upper body in the photo and look
            straight at the camera
          </li>
          <li>
            have a plain expression so don't smile or frown - eyes open and
            mouth closed
          </li>
          <li> eyes fully visible, hair away from your face and eyes</li>
          <li>
            take your glasses off if you can - if you need to keep your glasses
            on, your eyes must be visible without any glare or reflections
          </li>
          <li> no sunglasses or tinted glasses</li>
          <li> no headwear unless it's for religious or medical reasons</li>
          <li> don't crop your photo - it will be done for you</li>
        </ul>
        <Button
          variant="text"
          className="pl-4 mt-5"
          onClick={() => setShowModal(true)}
        >
          How To take a picture &raquo;
        </Button>

        <hr className="mt-5 mb-[40px] border-b-1 border-grey-300" />

        <FileUploader />

        <Button to="acknowledgement" className="mt-8 w-full">
          Continue
        </Button>
      </div>
      {showModal && <PassportUploadGuide setShowModal={setShowModal} />}
    </div>
  );
}

export default UploadPassport;
