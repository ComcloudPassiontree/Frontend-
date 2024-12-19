import { memo } from "react";
import TextPill from "../../text-pill/text-pill";
import H2 from "../../typography/headings/h2";
import Caption from "../../typography/caption";

interface Props {
  number: number;
  duration: string;
}

function CounterCard(props: Props) {
  const { number, duration } = props;

  return (
    <TextPill className="bg-active flex flex-col justify-between items-center w-[64px]">
      <H2 bold className="leading-none mt-1">
        {number}
      </H2>
      <Caption bold>{duration.toUpperCase()}</Caption>
    </TextPill>
  );
}

export default memo(CounterCard);
