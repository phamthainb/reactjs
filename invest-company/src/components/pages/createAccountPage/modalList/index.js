import React, { Fragment, useState } from "react";
import { BsModal } from "../../../../components/bases/shared";
import ManagerLoginModal from "./managerLoginModal";
import EditModal from "./editModal";

const ModalList = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [showModal, setModalType] = useState("");
  const showModalType = value => {
    setModalType(value);
    setToggleModal(true);
  };
  return (
    <Fragment>
      <div className="table-tools create-tools">
        
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
          className="table__btn blue__btn"
          type="button"
          onClick={() => showModalType("edit")}
        >
          Sửa
        </button>
      </div>
      <BsModal
      className={showModal === "show-contract" ? "show-contract" : ""}
        toggleModal={toggleModal}
        onClick={() => setToggleModal(false)}
      >
        {showModal === "block-login" ? (
          <ManagerLoginModal closeModal={()=>setToggleModal(false)} manager={0}/>
        ) : showModal === "on-login" ? (
          <ManagerLoginModal closeModal={()=>setToggleModal(false)} manager={1}/>
        ) : showModal === "edit" ? (
          <EditModal closeModal={()=>setToggleModal(false)}/>
        ) : (
          ""
        )}
      </BsModal>
    </Fragment>
  );
};

export default ModalList;
