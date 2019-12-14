import React from "react";


const InfoTransferModal = () => {
  return (
    <div className="trade-info">
    <div className="head">
    <p className="title">tài khoản đầu tư</p>
  </div>
  <div className="content">
      <p className="desc">Chủ tài khoản: <span className="bold">Đoàn Đức Mạnh</span></p>
      <p className="desc">Số tài khoản: <span>12345678</span></p>
      <p className="desc">Ngân hàng: <span>Vietcombank</span></p>
      <p className="desc">Chi nhánh: <span>Hà Nội</span></p>
      <p className="desc">Số tiền: <span>100000000</span></p>
      <p className="desc">Nội dung chuyển khoản: <span>2111-01/2019/HĐHT-BYTESOFT</span></p>
  </div>
    </div>
  );
};

export default InfoTransferModal;
