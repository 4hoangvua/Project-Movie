import React from "react";
import { Navigate } from "react-router-dom";
import { Background, CloseModalButton } from "../ModelVideo/ModalVideoElement";
import {
  ReactCheck,
  CModalCheck,
  ButtonCheck,
  Title,
  ButtonLogin,
} from "./ModalCheckElement";

const ModalCheck = ({ children, showModal, setShowModal, lognin, isCheck }) => {
  const handleClose = () => {
    setShowModal(!showModal);
    if (isCheck) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };
  const handleReload = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      {showModal ? (
        <Background onClick={handleClose}>
          <CModalCheck>
            <CloseModalButton onClick={handleClose} />
            <ReactCheck>
              <Title>{children}</Title>
              {lognin ? (
                <ButtonLogin to="/signin">Đồng ý</ButtonLogin>
              ) : (
                <>
                  <ButtonCheck onClick={handleClose}>Đã hiểu</ButtonCheck>
                </>
              )}
            </ReactCheck>
          </CModalCheck>
        </Background>
      ) : null}
    </>
  );
};

export default ModalCheck;
