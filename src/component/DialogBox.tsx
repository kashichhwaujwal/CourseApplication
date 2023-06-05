import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineCloseCircle } from "react-icons/ai";

import styled from "styled-components";
import { Button } from "./CourseForm";

const Dialog = styled.dialog`
  background: white;
  border: none;
  border-radius: 0.3rem;
  margin: auto;
  min-height: 4rem;
  padding: 1rem;
  width: 80%;

  ::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }

  @media screen and (min-width: 576px) {
    width: 30%;
  }
`;

const CloseButton = styled(AiOutlineCloseCircle)`
  cursor: pointer;
  font-size: 1.5rem;
  right: 0.5rem;
  position: absolute;
  top: 0.4rem;
`;

const WarningText = styled.p`
  font-size: 1.2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

interface Props {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: any;
}

const DialogBox = ({ message, isOpen, onConfirm, onClose }: Props) => {
  const { t } = useTranslation();
  const ref: any = useRef(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
      document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  return (
    <Dialog ref={ref} onCancel={onClose} onClick={onClose}>
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} />
        <WarningText>{message}</WarningText>
        <ButtonContainer>
          <Button type="button" className="danger" onClick={onClose}>
            {t("dialogBox.no")}
          </Button>
          <Button
            type="button"
            className="success"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {t("dialogBox.yes")}
          </Button>
        </ButtonContainer>
      </div>
    </Dialog>
  );
};

export default DialogBox;
