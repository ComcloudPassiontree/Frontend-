import { memo } from "react";
import { ReactComponent as PasswordOn } from "../../../../../assets/images/password-on.svg";
import { ReactComponent as PasswordOff } from "../../../../../assets/images/password-off.svg";
import { ReactComponent as LockForDisabledInput } from "../../../../../assets/images/lock-for-disabled.svg";

interface Props {
  isPassword?: boolean;
  visibleText?: boolean;
  onClick?: () => void;
  disabledInput?: boolean;
}

function InputIcon(props: Props) {
  const { isPassword, onClick, visibleText, disabledInput } = props;

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
    </div>
  );
}

export default memo(InputIcon);
