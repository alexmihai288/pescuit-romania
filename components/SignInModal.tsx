import React from "react";
import {
  Modal,
  ModalBody,
  ModalProvider,
  ModalTrigger,
} from "./ui/animated-modal";
import { SignInForm } from "./SignInForm";

export const SignInModal = () => {
  return (
    <ModalProvider>
      <Modal>
        <ModalTrigger className="p-0">
          <p className="text-sm font-bold">Intră în cont</p>
        </ModalTrigger>
        <ModalBody className="p-5">
          <SignInForm />
        </ModalBody>
      </Modal>
    </ModalProvider>
  );
};
