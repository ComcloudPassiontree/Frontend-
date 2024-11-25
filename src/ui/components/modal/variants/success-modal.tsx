import { memo } from "react";
import Modal, { ModalProps } from "../modal";
import Paragraph2 from "../../typography/paragraphs/p2";
import Button from "../../button/button";
import H3 from "../../typography/headings/h3";
import { ReactComponent as SealCheck } from "../../../../assets/images/SealCheck.svg";

export interface SuccessModalProps extends ModalProps {
  title?: string;
  description?: string;
  buttonConfig?: {
    title: string;
    href?: string;
    onClick?: () => void;
  };
}

function SuccessModal(props: SuccessModalProps) {
  const {
    title,
    description,
    buttonConfig,
    close,
    disableClose,
    hideCloseBtn,
  } = props;

  return (
    <Modal
      close={close}
      disableClose={disableClose}
      hideCloseBtn={!!buttonConfig?.title || hideCloseBtn}
      className="py-12 px-8 flex items-center justify-center flex-col text-center gap-3"
    >
      <SealCheck />
      <H3 bold>{title}</H3>
      <Paragraph2 className="my-1">{description}</Paragraph2>
      {buttonConfig && (
        <Button
          {...(buttonConfig?.href && { href: buttonConfig?.href })}
          {...(buttonConfig?.onClick && { onClick: buttonConfig?.onClick })}
        >
          {buttonConfig?.title}
        </Button>
      )}
    </Modal>
  );
}

export default memo(SuccessModal);
