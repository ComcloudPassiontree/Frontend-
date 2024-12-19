import { useEffect, useState } from "react";
import { ReactComponent as Alarm } from "../../../assets/images/alarm.svg";
import Paragraph1 from "../../../ui/components/typography/paragraphs/p1";
import TextPill from "../text-pill/text-pill";
import CounterCard from "./components/counter-card";

interface Props {}

function TimeLeftCounter(props: Props) {
  const {} = props;

  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop the timer when it reaches 0

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer on component unmount or time change
  }, [timeLeft]);

  return (
    <div className="h-[72px] flex gap-2">
      <TextPill className="bg-active">
        <div className="flex m-1">
          <Paragraph1 bold>
            Time left to <br />
            Complete application
          </Paragraph1>
          <Alarm className="ml-2" />
        </div>
      </TextPill>
      <CounterCard number={13} duration="Days" />
      <CounterCard number={23} duration="Hours" />
      <CounterCard number={19} duration="Mins" />
      <CounterCard number={timeLeft} duration="Sec" />
    </div>
  );
}

export default TimeLeftCounter;
