import { memo } from "react";
import { ReactComponent as PasswordOn } from "../../../../../assets/images/password-on.svg";
import { ReactComponent as PasswordOff } from "../../../../../assets/images/password-off.svg";
import { ReactComponent as LockForDisabledInput } from "../../../../../assets/images/lock-for-disabled.svg";
import { ReactComponent as LoaderBlack } from "../../../../../assets/images/progress-black.svg";

interface Props {
  isPassword?: boolean;
  visibleText?: boolean;
  onClick?: () => void;
  disabledInput?: boolean;
  isLoading?: boolean
}

function InputIcon(props: Props) {
  const { isPassword, onClick, visibleText, disabledInput, isLoading } = props;

  return (
    <div
      onClick={onClick}
      className="absolute right-0 -mt-7 mx-4 cursor-pointer hover:scale-[1.1]"
    >
      {isPassword && (
        <>
          {!visibleText ? (
            <PasswordOn />
          ) : (
            <PasswordOff className="-mt-[1.7px]" />
          )}
        </>
      )}

      {disabledInput && <LockForDisabledInput className="-mt-[1.7px]" />}
      {isLoading && <LoaderBlack className="animate-spin mt-0 h-4 w-4 opacity-[0.3]"/>}
    </div>
  );
}

export default memo(InputIcon);
