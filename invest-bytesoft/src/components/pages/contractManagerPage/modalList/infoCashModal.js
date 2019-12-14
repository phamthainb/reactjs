import React from "react";

const InfoCashModal = () => {
  return (
    <div className="trade-info">
    <div className="head">
    <p className="title">Thông tin</p>
  </div>
  <div className="content">
      <div className="info-content">
        <div className="img"><img src="images/transform_img.jpg" alt=""/><p className="desc">Giấy biên nhận nhận tiền</p></div>
        <div className="text">
          <div className="text-content">
            <p className="desc">Người nhận tiền đầu tư: <span className="bold">Đoàn Đức Mạnh</span></p>
            <p className="desc">Số giấy biên nhận: <span>123456778</span></p>
            <p className="desc">Số tiền: <span>1000000000</span></p>
          </div>
        </div>
      </div>
      
  </div>
    </div>
  );
};

export default InfoCashModal;