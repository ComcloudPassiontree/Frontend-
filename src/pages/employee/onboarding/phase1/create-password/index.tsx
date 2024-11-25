import { useMemo, useState } from "react";
import BackButton from "../../../../../ui/components/back-button/back-button";
import Button from "../../../../../ui/components/button/button";
import InputConditions from "../../../../../ui/components/form/input-conditions/input-conditions";
import Input from "../../../../../ui/components/form/input/input";
import H1 from "../../../../../ui/components/typography/headings/h1";
import Paragraph2 from "../../../../../ui/components/typography/paragraphs/p2";
import { passwordConditions } from "../../../../../helpers/constants";
import toast from "../../../../../helpers/toasts/toasts";

function CreatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [conditionsSatisfied, setConditionsSatisfied] = useState(false);

  const passwordsMatch = useMemo(() => {
    if (!confirmPassword) {
      return false;
    }
    if (password === confirmPassword) {
      return true;
    }
    return false;
  }, [password, confirmPassword]);

  return (
    <div className="w-full flex flex-col gap-4 md:gap-[0px] md:flex-row justify-left">
      <div className="basis-1/3 mt-1 fade-in">
        <BackButton to="job-details" />
      </div>
      <div className="basis-1/3 ml-2 md:min-w-[417px] max-w-[417px] fade-in-up ">
        <H1 bold>Create Password</H1>
        <div className="border-b-[1px] border-grey-400 w-full pb-[7px] mb-2">
          <Paragraph2>
            Securing your account is crucial. Create a strong password to
            protect your information. Make sure it meets the following criteria
            for enhanced security. Once you've created your password, enter it
            again to confirm it's correct.
          </Paragraph2>
        </div>

        <div>
          <Input
            hasSuccess={conditionsSatisfied}
            successText="Strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            label="Enter Password"
            className="mt-5 mb-4"
          />
          <InputConditions
            conditions={passwordConditions}
            text={password}
            setSatisfied={setConditionsSatisfied}
          />
        </div>

        <div>
          <Input
            hasError={!!confirmPassword && !passwordsMatch}
            errorText="Your passwords don't match"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            label="Enter Password"
            className="mt-5 mb-4"
          />
        </div>

        <Button
          disabled={!conditionsSatisfied || !passwordsMatch}
          className="mt-10 w-full"
          onClick={() =>
            toast.modal.success({
              title: "Account Created Successfully",
              description:
                "Thank you for creating your account, please login to securely continue your application.",
              buttonConfig: {
                title: "login",
                href: "/employee/login",
              },
              disableClose: true,
            })
          }
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default CreatePassword;
