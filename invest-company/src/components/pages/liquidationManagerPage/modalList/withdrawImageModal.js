import React, { Fragment } from "react";

const BlockLoginModal = ({ closeModal, typeModal }) => {
  return (
    <Fragment>
      <div className="content">
        <div className="withdraw-img">
          <div className="withdraw-content">
            <div className="img">
              {typeModal === "report" ? (
                <Fragment>
                  <img src="images/transform_img.jpg" alt="" />
                  <p className="desc">Biên bản</p>
                </Fragment>
              ) : (
                <Fragment>
                  <img src="images/transform_img.jpg" alt="" />
                  <p className="desc">Phiếu chi</p>
                </Fragment>
              )}
            </div>
            <div className="text">
              <div className="text-content">
                <div className="item">
                  <p className="label">Mã Hợp đồng</p>
                  <p className="value">rểtrtyrtyryt</p>
                </div>
                <div className="item">
                  <p className="label">Người rút tiền</p>
                  <p className="value">rểtrtyrtyryt</p>
                </div>
                <div className="item">
                  <p className="label">Số tiền rút</p>
                  <p className="value">rểtrtyrtyryt</p>
                </div>
                <div className="item">
                  <p className="label">Ngày xuất tiền</p>
                  <p className="value">rểtrtyrtyryt</p>
                </div>
                <div className="item">
                  <p className="label">Người xử lý</p>
                  <p className="value">rểtrtyrtyryt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <button
          className="bottom__btn green__btn"
          type="button"
          onClick={closeModal}
        >
          Ok
        </button>
      </div>
    </Fragment>
  );
};

export default BlockLoginModal;
