import React, { Fragment, useState } from "react";

const WithdrawProcessModal = ({ itemProcess, closeModal }) => {
  const [agreeCheck, setAgreeCheck] = useState(false);
  const [uploadScan, setUploadScan] = useState("");
  const [successProcess, setSuccessProcess] = useState(false);

  const [step, setStep] = useState(1);
  const witdrawProcess = () => {
    console.log(agreeCheck, uploadScan)
    setSuccessProcess(true)
  }
  const onFinish = () => {
    closeModal();
  };
  return (
    <div className="withdraw-process">
      {!successProcess ? (
        <Fragment>
          {" "}
          <div className="head">
            <div className={`step-content ${step === 1 ? "first-step" : "second-step"}`}>
              <div className="step1 step">
                <p className="number">01</p>
                <p className="desc">Ký phiếu chi</p>
              </div>
              <div className="step2 step">
                <p className="number">02</p>
                <p className="desc">Xử lý chuyển tiền</p>
              </div>
            </div>
          </div>
          {step === 1 ? (
            <Fragment>
              <div className="content button-content">
                <button className="modal__btn blue__btn">Xem phiếu chi</button>
                <button className="modal__btn green__btn">Tải phiếu chi</button>
                <button className="modal__btn orange__btn">In phiếu chi</button>
              </div>
              <div className="bottom">
                <button
                  className="bottom__btn green__btn"
                  type="button"
                  onClick={() => setStep(2)}
                >
                  Tiếp tục
                </button>
                <button
                  className="bottom__btn red__btn"
                  type="button"
                  onClick={onFinish}
                >
                  Đóng
                </button>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="content">
                <div className="item">
                  <label
                    htmlFor="checkbox1"
                    className={`checkbox__label ${agreeCheck ? "active" : ""}`}
                  >
                    <input
                      type="checkbox"
                      name="agree"
                      id="checkbox1"
                      onChange={e => setAgreeCheck(e.target.checked)}
                    />{" "}
                    Xác thực khách hàng đã nhận được tiền
                  </label>
                </div>
                <div className="item upload-item">
                  <div className="upload__file">
                    <input
                      type="file"
                      className="modal__input"
                      id="upload__img"
                      onChange={e => setUploadScan(e.target.value)}
                    />
                    <img
                      src="images/icon_upload_img.gif"
                      alt=""
                      className="img__icon"
                    />
                    <img src="" alt="" className="result__img" />
                  </div>
                  <label htmlFor="">
                    {uploadScan === ""
                      ? "Upload ảnh phiếu thu"
                      : uploadScan}
                  </label>
                </div>
              </div>
              <div className="bottom">
              <button
              className="bottom__btn orange__btn"
              type="button"
              onClick={() => setStep(1)}
            >
              Quay lại
            </button>
                <button
                  className="bottom__btn green__btn"
                  type="button"
                  onClick={witdrawProcess}
                >
                  Tiếp tuc
                </button>
                <button
                  className="bottom__btn red__btn"
                  type="button"
                  onClick={onFinish}
                >
                  Đóng
                </button>
              </div>
            </Fragment>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <div className="success-content">
            <div className="head">
              <p className="desc">Xử lý rút tiền thành công cho gói đầu tư</p>
            </div>
            <div className="content">
              <img src="images/icon_success_process.gif" alt="" />
            </div>
            <div className="bottom">
              <button
                className="bottom__btn green__btn"
                type="button"
                onClick={onFinish}
              >
                OK
              </button>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default WithdrawProcessModal;
