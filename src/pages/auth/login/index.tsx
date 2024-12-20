import { memo } from "react";
import H1 from "../../../ui/components/typography/headings/h1";
import Paragraph1 from "../../../ui/components/typography/paragraphs/p1";
import Input from "../../../ui/components/form/input/input";
import { Link, useNavigate } from "react-router-dom";
import Caption from "../../../ui/components/typography/caption";
import Checkbox from "../../../ui/components/form/checkbox/checkbox";
import Button from "../../../ui/components/button/button";
import { ReactComponent as Gmail } from "../../../assets/images/gmail.svg";
import { ReactComponent as Ymail } from "../../../assets/images/ymail.svg";
import Paragraph2 from "../../../ui/components/typography/paragraphs/p2";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="mt-1 w-full xl:w-[76%] flex flex-col gap-4 md:gap-[0px] md:flex-row justify-left fade-in-up delay1">
      <div className="w-full md:w-1/2 md:border-r border-grey-300 md:pr-[76px]">
        <H1 bold>Login to Your Account</H1>
        <Paragraph1 className="border-b-[1px] border-grey-400 w-full pb-[7px] mb-2 mt-4 lg:mt-10">
          Depending on your account settings, you may be required to set up
          two-factor authentication before you can log in.
        </Paragraph1>

        <form
          className="mt-6"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/auth/verify");
          }}
        >
          <Input label="Email Address" placeholder="name@example.com" />
          <Input label="Password" type="password" className="mt-6" />
          <Link to="/auth/forgot-password" className="mt-2">
            <Caption>Forgot Password?</Caption>
          </Link>
          <Checkbox large label="Remember me on this device" className="mt-6" />
          <Button className="w-full mt-6">LOG INTO ACCOUNT</Button>
        </form>
      </div>
      <div className="w-full md:w-1/2 md:pl-[76px] flex justify-center flex-col md:mt-0 mt-7">
        <H1 bold>Login with socials</H1>
        <div className="mt-4 flex gap-4">
          <button>
            <Gmail />
          </button>
          <button>
            <Ymail />
          </button>
        </div>
        <Link to="/" className="mt-[60px]">
          <Paragraph2>Login as a hiring company</Paragraph2>
        </Link>
      </div>
    </div>
  );
}

export default memo(Login);
