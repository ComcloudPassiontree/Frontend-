import { memo } from "react";
import Paragraph2 from "../typography/paragraphs/p2";
import { ReactComponent as Bell } from "../../../assets/images/bell.svg";
import clsx from "clsx";

interface Props {
  minimized?: boolean;
}

function Notifications(props: Props) {
  const { minimized } = props;

  return (
    <div
      className={clsx(
        "relative h-[40px] w-[48px]",
        !minimized ? "md:w-[141px]" : "md:w-[48px]"
      )}
    >
      <div
        className={clsx(
          "gap-2 flex center_all px-[11px] py-[6px] rounded-[8px] border-black border-[2px] bg-secondaryPurple inline-block w-max font-[700"
        )}
      >
        <Bell />
        {!minimized && (
          <Paragraph2 className="md:block hidden" bold>
            Notifications
          </Paragraph2>
        )}
      </div>
    </div>
  );
}

export default memo(Notifications);
