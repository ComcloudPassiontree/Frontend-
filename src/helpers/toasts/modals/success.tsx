import ReactDOM from "react-dom/client";
import SuccessModal, {
  SuccessModalProps,
} from "../../../ui/components/modal/variants/success-modal";
import { MODAL_CONTAINER } from "../../constants";

export const successModal = (options: SuccessModalProps) => {
  document.body.style.overflow = "hidden";
  const container = document.createElement("div");
  container.id = MODAL_CONTAINER;
  document.body.appendChild(container);

  //close fn
  const close = () => {
    root.unmount();
    document.body.removeChild(container);
    document.body.style.overflow = "auto";
  };

  // Create a root and render the component into it
  const root = ReactDOM.createRoot(container);
  root.render(<SuccessModal {...options} close={close} />);

  // Cleanup function to remove the component
  return () => {
    close();
  };
};

export default successModal;
