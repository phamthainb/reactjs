import React, { Fragment, useState } from "react";
import { BsModal } from "../../../../components/bases/shared";
import NextModal from "./nextModal";
import OnModal from "./onModal";
const ModalList = props => {
  const [modal, setModal] = useState(false);
  const [successProcess, setSuccessProcess] = useState(false);
  const close = data => {
    props.onClick(data);
    setModal(data);
  };
  return (
    <Fragment>
      <BsModal
      className="process-modal"
        toggleModal={props.toggleModal}
        onClick={() => props.setToggleModal(false)}
      >
        {!successProcess ? (
          <Fragment>{
            (modal===true)?(
            <NextModal onClick={data => close(data)} setSuccessProcess={setSuccessProcess}/>
            ):(
            <OnModal
              onClick={data => close(data)}
              modal={modal}
              setModal={setModal}
            />
            )}
          </Fragment>
        ) : (
          <Fragment>
         <div className="withdraw-process">  
            <div className="success-content">
              <div className="head">
                <p className="desc">Xử lý rút tiền thành công cho gói đầu tư</p>
              </div>
              <div className="content" style={{textAlign: "center"}}>
                <img src="images/icon_success_process.gif" alt="" />
              </div>
              <div className="bottom">
                <button
                  className="bottom__btn green__btn"
                  type="button"
                  onClick={() => props.setToggleModal(false)}
                >
                  OK
                </button>
              </div>
            </div>
            </div>
          </Fragment>
        )}
      </BsModal>
    </Fragment>
  );
};

export default ModalList;
