import Modal from "../../../../../../ui/components/modal/modal";
import H3 from "../../../../../../ui/components/typography/headings/h3";

import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.jpg";
import a4 from "../assets/a4.jpg";
import a5 from "../assets/a5.jpg";

function PassportUploadGuide({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal close={() => setShowModal(false)}>
      <div className="mt-[40px] lg:mt-0 mx-auto w-[97%] flex flex-col max-w-[900px]">
        <H3
          bold
          className="border-b-[1px] border-grey-400 w-[45%] pb-[7px] mb-9 ml-4 md:ml-9 lg:ml-0"
        >
          Guidelines
        </H3>
        <div className="flex flex-wrap gap-3 mx-auto items-center justify-center lg:justify-start">
          <img src={a1} alt="passport guide" className="h-[155px]" />
          <img src={a2} alt="passport guide" className="h-[155px]" />
          <img src={a3} alt="passport guide" className="h-[155px]" />
          <img src={a4} alt="passport guide" className="h-[155px]" />
          <img src={a5} alt="passport guide" className="h-[168px]" />
        </div>
      </div>
    </Modal>
  );
}

export default PassportUploadGuide;
