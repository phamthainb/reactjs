import React, { Fragment, useState } from "react";

const InvestProcessModal = ({ itemProcess, closeModal }) => {
  const [agreeCheck, setAgreeCheck] = useState(false);
  const [uploadReceipt, setUploadReceipt] = useState("");
  const [uploadScan, setUploadScan] = useState("");
  const [receivePerson, setReceivePerson] = useState("");
  const [sendPerson, setSendPerson] = useState("");
  const [moneyTotal, setMoneyTotal] = useState("");
  const [payNumber, setPayNumber] = useState("");
  const [successProcess, setSuccessProcess] = useState(false);

  const onSubmit = () => {
    console.log(
      "a",
      agreeCheck,
      uploadScan,
      uploadReceipt,
      receivePerson,
      sendPerson,
      moneyTotal,
      payNumber
    );
    setSuccessProcess(true);
  };
  const onFinish = () => {
    closeModal()
  }
  return (
    <div className="invest-process">
      {!successProcess ? (
        <Fragment>
          {" "}
          <div className="head">
            <p className="title">
              {itemProcess.investType === 0
                ? "Bạn đang xử lý đầu tư bằng hình thức chuyển khoản"
                : "Bạn đang xử lý đầu tư bằng hình thức nhận tiền mặt"}
            </p>
          </div>
          <div className="content">
            {itemProcess.investType === 0 ? (
              <div className="part">
                <p className="title">
                  Xác nhận đã nhận được tiền chuyển khoản theo các thông tin
                </p>
                <div className="info-content">
                  <p className="desc">
                    Chủ tài khoản: <span className="bold">Đoàn Đức Mạnh</span>
                  </p>
                  <p className="desc">
                    Số tài khoản nhận tiền đầu tư: 12345689090900
                  </p>
                  <p className="desc">Ngân hàng: Vietcombank</p>
                  <p className="desc">Chi nhánh: Hà Nội</p>
                  <p className="desc">Số tiền: 1000000</p>
                  <p className="desc">
                    <label
                      htmlFor="checkbox"
                      className={`checkbox__label ${
                        agreeCheck ? "active" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="agree"
                        id="checkbox"
                        onChange={e => setAgreeCheck(e.target.checked)}
                      />{" "}
                      Xác nhận
                    </label>
                  </p>
                </div>
              </div>
            ) : (
              <div className="part">
                <p className="title">
                  Xác nhận đã nhận được tiền đầu tư bằng tiền mặt
                </p>
                <div className="form-content">
                  <div className="bs-row row-sm-10">
                    <div className="bs-col sm-50-10">
                      <div className="item">
                        <label htmlFor="">Người nhận tiền</label>
                        <input
                          type="text"
                          className="modal__input"
                          name="receivePerson"
                          onChange={e => setReceivePerson(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="bs-col sm-50-10">
                      <div className="item">
                        <label htmlFor="">Người nộp tiền</label>
                        <input
                          type="text"
                          className="modal__input"
                          name="sendPerson"
                          onChange={e => setSendPerson(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="bs-col sm-50-10">
                      <div className="item">
                        <label htmlFor="">Số tiền</label>
                        <input
                          type="number"
                          className="modal__input"
                          name="moneyTotal"
                          onChange={e => setMoneyTotal(e.target.value)}
                        />
                      </div>
                      <div className="item">
                        <label htmlFor="">Số phiếu thu</label>
                        <input
                          type="text"
                          className="modal__input"
                          name="payNumber"
                          onChange={e => setPayNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="bs-col sm-50-10">
                      <div className="item upload-item">
                        <div className="upload__file">
                          <input
                            type="file"
                            className="modal__input"
                            id="upload__img"
                            onChange={e => setUploadReceipt(e.target.value)}
                          />
                          <img
                            src="images/icon_upload_img.gif"
                            alt=""
                            className="img__icon"
                          />
                          <img src="" alt="" className="result__img" />
                        </div>
                        <label htmlFor="">
                          {uploadReceipt === ""
                            ? "Upload ảnh phiếu thu"
                            : uploadReceipt}
                        </label>
                      </div>
                      <div className="item">
                        <label
                          htmlFor="checkbox1"
                          className={`checkbox__label ${
                            agreeCheck ? "active" : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="agree"
                            id="checkbox1"
                            onChange={e => setAgreeCheck(e.target.checked)}
                          />{" "}
                          Xác nhận
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="part">
              <p className="title">
                Xác nhận đã hoàn thành hợp đồng ký kết 2 bên
              </p>
              <div className="upload__img">
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
              <p className="desc">
                {uploadScan === ""
                  ? "Upload bản scan hợp đồng đã ký kết"
                  : uploadScan}
              </p>
            </div>
          </div>
          <div className="bottom">
            <button
              className="bottom__btn green__btn"
              type="button"
              onClick={onSubmit}
            >
              kích hoạt đầu tư
            </button>
            <button className="bottom__btn red__btn" type="button" onClick={onFinish}>
              hủy
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
        <div className="success-content">
        <div className="head">
            <p className="desc">Kích hoạt thành công gói đầu tư</p>
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

export default InvestProcessModal;
