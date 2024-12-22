import { memo, useCallback, useEffect, useState } from "react";
import { BaseComponentProps } from "../types";
import clsx from "clsx";
import Button from "../button/button";

export interface ModalProps extends BaseComponentProps {
  close?: () => void;
  disableClose?: boolean;
}

function Modal(props: ModalProps) {
  const { children, close, disableClose } = props;
  const [isExit, setIsExit] = useState(false);

  const closeModal = useCallback(() => {
    if (disableClose) {
      return;
    }
    setIsExit(true);
    setTimeout(() => {
      document.body.style.overflow = "auto";
      close?.();
    }, 300);
  }, [close, disableClose]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div
      className={clsx(
        "fixed top-0 w-full h-screen z-10 bottom-0 left-0 right-0",
        isExit ? "fade-out" : "fade-in"
      )}
    >
      <div
        onClick={closeModal}
        className="absolute top-0 w-full h-full bg-black opacity-[0.3]"
      ></div>
      <div
        className={clsx(
          "absolute z-11 w-full bg-bg h-auto py-[20px] md:py-[45px] bottom-0 max-h-[600px] overflow-auto ",
          isExit ? "fade-out-up-big" : "fade-in-up-big"
        )}
      >
        {!disableClose && (
          <Button
            smallText
            variant="danger"
            onClick={closeModal}
            className="z-[2] fixed right-0 m-7 -mt-2 capitalize px-[10px] text-sm h-[40px]"
          >
            Close
          </Button>
        )}
        {children}
      </div>
    </div>
  );
}

export default memo(Modal);
