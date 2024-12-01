import { memo } from "react";
import Modal, { ModalProps } from "../modal";
import Button from "../../button/button";
import { ReactComponent as SealCheck } from "../../../../assets/images/SealCheck.svg";
import ModalCard from "../components/modal-card";

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
  const { title, description, buttonConfig, disableClose, close } = props;

  return (
    <Modal close={close} disableClose={disableClose}>
      <ModalCard icon={<SealCheck />} title={title} description={description}>
        {buttonConfig && (
          <Button
            {...(buttonConfig?.href && { href: buttonConfig?.href })}
            {...(buttonConfig?.onClick && { onClick: buttonConfig?.onClick })}
          >
            {buttonConfig?.title}
          </Button>
        )}
      </ModalCard>
    </Modal>
  );
}

export default memo(SuccessModal);
