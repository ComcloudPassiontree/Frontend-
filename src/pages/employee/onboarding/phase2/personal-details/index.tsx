import BackButton from "../../../../../ui/components/back-button/back-button";
import Button from "../../../../../ui/components/button/button";
import Checkbox from "../../../../../ui/components/form/checkbox/checkbox";
import Input from "../../../../../ui/components/form/input/input";
import Select from "../../../../../ui/components/form/select/select";
import H1 from "../../../../../ui/components/typography/headings/h1";
import H4 from "../../../../../ui/components/typography/headings/h4";
import Paragraph1 from "../../../../../ui/components/typography/paragraphs/p1";
import Paragraph2 from "../../../../../ui/components/typography/paragraphs/p2";
import { ReactComponent as PlusCircle } from "../../../../../assets/images/plus-circle.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDebounce } from "use-debounce";

function PersonalDetails() {
  const [data, setData] = useState<{COUNTRY:string, POPULATED_PLACE:string, COUNTY_UNITARY:string, DISTRICT_BOROUGH:string} | null>(null)
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 200);

  const [isLoading, setIsLoading] = useState(false)

  const key = "A63hpUDz4dwI2HYXSKd9CcVy0sSTmSAP"
  
  const getData = (val:string) => {
    if(val.trim()){
    setIsLoading(true)
    axios.get(`https://api.os.uk/search/names/v1/find?query=${val}&key=${key}`)
    .then(function (response) {
        /* For explanation and debugging purposes we display the full response from the API in the console */
        console.log(JSON.stringify(response.data, null, 2));
        setData(response.data.results[0].GAZETTEER_ENTRY)
        setIsLoading(false)
    });
  }
  else{
    setIsLoading(false)
  }
  }

  useEffect(() => {
    if(value?.trim()){
      getData(value)
    }
  }, [value])
  
  return (
    <div className="w-full flex flex-col gap-4 md:gap-[0px] md:flex-row justify-left">
      <div className="basis-1/3 mt-1 fade-in">
        <BackButton to="welcome" />
      </div>
      <div className="basis-1/3 ml-2 md:min-w-[417px] max-w-[417px] fade-in-up ">
        <H1 bold>Lets Get to Know You Better</H1>
        <H4
          bold
          className="mt-[24px] border-b-[1px] border-grey-400 w-full pb-[7px] mb-2"
        >
          Demography
        </H4>
        <Paragraph2>Please provide information about yourself</Paragraph2>

        <div className="flex gap-[20px] flex-wrap">
          <Select className="mt-5" label="Nationality"></Select>
          <Input className="mt-5" label="Date of Birth" type="date" />
          <Select label="Gender"></Select>
          <Select label="Marital Status"></Select>
        </div>

        <H4
          bold
          className="mt-[40px] border-b-[1px] border-grey-400 w-full pb-[7px] mb-2"
        >
          1 year Residential Address
        </H4>
        <Paragraph2>
          Please provide the residential address(es) to the place you have
          resided in the last one year.
        </Paragraph2>

        <Input
          className="mt-5"
          placeholder="Enter Postcode to find address"
          label="Enter Postcode and Find Address"
          isLoading={isLoading}
          onChange={(e) => setText(e.target.value)}
        />

        <Input className="mt-5" label="Address Line 1" />
        <Input className="mt-5" label="Address Line 2" value={data?.DISTRICT_BOROUGH || data?.COUNTY_UNITARY} />

        <div className="flex gap-[20px] flex-wrap">
          <Select className="mt-5" label="Country" value={data?.COUNTRY}></Select>
          <Input className="mt-5" label="City/Town" value={data?.POPULATED_PLACE}/>
          <Input label="Council (optional)" />
          <Input label="Post / Zip Code" />
        </div>

        <div className="flex gap-[20px] flex-wrap">
          <div className="w-1/2">
            <Input className="mt-5" label="Date moved in" type="date" />
          </div>
          <Checkbox
            small
            className="mt-[44px]"
            label={<Paragraph2 bold>I currently stay here</Paragraph2>}
          />
        </div>

        <div className="mt-[20px]">
          <hr className="border-b-1 border-grey-300" />
          <Paragraph1
            bold
            className="cursor-pointer underline flex items-center gap-2 w-full text-center justify-center mt-10"
          >
            <PlusCircle /> Add New Address
          </Paragraph1>
        </div>
        <Button to="work-experience" className="mt-8 w-full">
          Continue
        </Button>
      </div>
    </div>
  );
}

export default PersonalDetails;
