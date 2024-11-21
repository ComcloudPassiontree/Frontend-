import BackButton from "../../../../../ui/components/back-button/back-button";
import H1 from "../../../../../ui/components/typography/headings/h1";
import H4 from "../../../../../ui/components/typography/headings/h4";

function PersonalInformation() {
  return (
    <div className="w-[89%] fade-in-up flex justify-left">
      <div className="basis-1/3 mt-2">
        <BackButton to="welcome" />
      </div>
      <div className="basis-1/3 ml-2">
        <H1 bold>Personal Information</H1>
        <div className="border-b-[1px] border-grey-400 w-full pb-[7px]">
          <H4 bold className="mt-[18px]">
            Full Name
          </H4>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
