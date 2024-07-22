import React from "react";
import {
  Modal,
  ModalBody,
  ModalProvider,
  ModalTrigger,
} from "./ui/animated-modal";
import { SignUpForm } from "./SignUpForm";

export const SignUpModal = () => {
  return (
    <ModalProvider>
      <Modal>
        <ModalTrigger className="p-0">
          <p className="text-sm font-bold">Creează cont</p>
        </ModalTrigger>
        <ModalBody className="overflow-auto p-5 modal-scrollbar">
          <SignUpForm />
        </ModalBody>
      </Modal>
    </ModalProvider>
  );
};
