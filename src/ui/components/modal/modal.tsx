import React, { memo, useCallback, useEffect, useState } from "react";
import { BaseComponentProps } from "../types";
import clsx from "clsx";
import Button from "../button/button";

export interface ModalProps extends BaseComponentProps {
  close?: () => void;
  hideCloseBtn?: boolean;
  disableClose?: boolean;
}

function Modal(props: ModalProps) {
  const { className, children, close, hideCloseBtn, disableClose } = props;
  const [isExit, setIsExit] = useState(false);

  const closeModal = useCallback(() => {
    if (disableClose) {
      return;
    }
    setIsExit(true);
    setTimeout(() => {
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

  return (
    <div
      className={clsx(
        "absolute top-0 w-full h-screen z-10",
        isExit ? "fade-out" : "fade-in"
      )}
    >
      <div
        onClick={closeModal}
        className="absolute top-0 w-full h-full bg-black opacity-[0.3]"
      ></div>
      <div
        className={clsx(
          "absolute z-11 w-full bg-bg h-auto py-[20px] md:py-[55px] bottom-0",
          isExit ? "fade-out-up-big" : "fade-in-up-big"
        )}
      >
        <div
          className={clsx(
            className,
            "w-[90%] max-w-[458px] border-black border-2 rounded-[8px] bg-white mx-auto box-border"
          )}
        >
          {children}

          {!hideCloseBtn && <Button onClick={closeModal}>Close</Button>}
        </div>
      </div>
    </div>
  );
}

export default memo(Modal);
