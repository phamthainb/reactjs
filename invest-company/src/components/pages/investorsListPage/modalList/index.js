import React, { Fragment, useState } from "react";
import { BsModal } from "../../../../components/bases/shared";
import BlockLoginModal from "./blockLoginModal";
import SendEmailModal from "./sendEmailModal";
import OnLoginModal from "./onLoginModal";
import SendSmsModal from "./sendSmsModal";
import ContractShowModal from "./contractShowModal";

const ModalList = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [showModal, setModalType] = useState("");
  const showModalType = value => {
    setModalType(value);
    setToggleModal(true);
  };
  return (
    <Fragment>
      <div className="table-tools">
        
          <button
            className="table__btn blue__btn"
            type="button"
            onClick={() => showModalType("show-contract")}
          >
            Xem hợp đồng
        </button>
        
        
          <button
            className="table__btn red__btn"
            type="button"
            onClick={() => showModalType("block-login")}
          >
            Chặn đăng nhập
        </button>
        
          <button
            className="table__btn orange__btn"
            type="button"
            onClick={() => showModalType("on-login")}
          >
            Mở đăng nhập
        </button>
        
          <button
            className="table__btn green__btn"
            type="button"
            onClick={() => showModalType("send-sms")}
          >
            Gửi sms
        </button>
        
          <button
            className="table__btn yellow__btn"
            type="button"
            onClick={() => showModalType("send-email")}
          >
            Gửi email
        </button>
      </div>
      <BsModal
        className={showModal === "show-contract" ? "show-contract" : ""}
        toggleModal={toggleModal}
        onClick={() => setToggleModal(false)}
      >
        {showModal === "block-login" ? (
          <BlockLoginModal closeModal={() => setToggleModal(false)} />
        ) : showModal === "show-contract" ? (
          <ContractShowModal closeModal={() => setToggleModal(false)} />
        ) : showModal === "on-login" ? (
          <OnLoginModal closeModal={() => setToggleModal(false)} />
        ) : showModal === "send-sms" ? (
          <SendSmsModal closeModal={() => setToggleModal(false)} />
        ) : showModal === "send-email" ? (
          <SendEmailModal closeModal={() => setToggleModal(false)} />
        ) : (
                    ""
                  )}
      </BsModal>
    </Fragment>
  );
};

export default ModalList;
