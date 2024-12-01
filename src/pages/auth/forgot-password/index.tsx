import { memo, useEffect, useState } from "react";
import H1 from "../../../ui/components/typography/headings/h1";
import Paragraph1 from "../../../ui/components/typography/paragraphs/p1";
import Input from "../../../ui/components/form/input/input";
import { Link } from "react-router-dom";
import Button from "../../../ui/components/button/button";
import BackButton from "../../../ui/components/back-button/back-button";
import Paragraph2 from "../../../ui/components/typography/paragraphs/p2";
import { ReactComponent as EmailSent } from "../../../assets/images/EmailSent.svg";
import H3 from "../../../ui/components/typography/headings/h3";

function ForgotPassword() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (sending) {
      const t = setTimeout(() => {
        setSent(true);
      }, 1000);
      return () => clearTimeout(t);
    }
  }, [sending]);
  return (
    <div className="w-full flex flex-col gap-4 md:gap-[0px] md:flex-row justify-left">
      {sent ? (
        <div className="fade-in-up flex items-center justify-center flex-col gap-2 w-full md:w-1/3 mx-auto text-center">
          <EmailSent />
          <H3 className="mt-1" bold>
            Check Inbox
          </H3>
          <Paragraph2>
            We just sent a reset link to <b>name@example.com.</b> Click the link
            and you'll be prompted to choose a new password
          </Paragraph2>
        </div>
      ) : (
        <>
          <div className="basis-1/3 mt-1 fade-in">
            <BackButton to="login" />
          </div>
          <div className="basis-1/3 ml-2 md:min-w-[417px] max-w-[417px] fade-in-up ">
            <H1 bold>Forgot Password</H1>
            <Paragraph1 className="border-b-[1px] border-grey-400 w-full pb-[7px] mb-2 mt-9 lg:mt-10">
              Enter your email and we will send you a link to reset your
              password
            </Paragraph1>

            <form
              className="mt-9"
              onSubmit={(e) => {
                e.preventDefault();
                setSending(true);
              }}
            >
              <Input label="Email Address" placeholder="name@example.com" />
              <Button isLoading={sending} className="w-full mt-10">
                Continue
              </Button>
              <Paragraph2 className="mt-5 flex gap-1 items-center justify-center">
                Remember Password?
                <Link to="/auth/login">Login</Link>
              </Paragraph2>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default memo(ForgotPassword);
