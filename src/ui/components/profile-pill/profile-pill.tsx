import { memo, useState } from "react";
import Paragraph2 from "../typography/paragraphs/p2";
import user from "../../../assets/images/user.png";
import { ReactComponent as Drop } from "../../../assets/images/account_drop.svg";
import { Link } from "react-router-dom";
import clsx from "clsx";
import useOutsideClick from "../../../helpers/hooks/useOutsideClick";

interface Props {
  minimized?: boolean;
}

function ProfilePill(props: Props) {
  const { minimized } = props;
  const ref = useOutsideClick<HTMLDivElement>(() => setExpanded(false));
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={clsx(
        "relative h-[40px] w-[48px]",
        !minimized ? "md:w-[199px]" : "md:w-[48px]"
      )}
    >
      <div
        ref={ref}
        onClick={() => setExpanded(!expanded)}
        className="no_select absolute flex center_all px-[11px] rounded-[8px] border-black border-[2px] hover:bg-yellow-200 bg-yellow-100 block flex-col font-[700] h-[auto] cursor-pointer flex-wrap py-[4px] right-0"
      >
        <div className="flex center_all gap-2 ">
          <img src={user} alt="user" style={{ height: 30, width: 30 }} />
          {!minimized && (
            <Paragraph2 bold className="md:block hidden">
              Pinkette Chinese
            </Paragraph2>
          )}
          <Drop
            className={clsx(
              "transform transition",
              expanded ? "rotate-180" : "rotate-0"
            )}
          />
        </div>
        {expanded && (
          <div className="border-t w-full border-black grow-1 mt-[6px] pl-6 text-[14px]">
            <Link to="/" className="no-underline py-2 hover:underline">
              My Account
            </Link>
            <Link to="/" className="no-underline py-2 hover:underline">
              Settings
            </Link>
            <Link to="/" className="no-underline py-2 hover:underline">
              Help & Support
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(ProfilePill);
