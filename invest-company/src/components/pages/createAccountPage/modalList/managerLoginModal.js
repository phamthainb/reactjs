import React, { useState } from "react";

const BlockLoginModal = ({closeModal, manager}) => {
  const [submit, setSubmit] = useState(false);
 
  const onSubmit = () => {
    console.log(submit)
    setSubmit(true);
    closeModal();
  }
  const onCancel = () => {
    closeModal();
    
  }
  return (
    <div className="manager-login">
      <div className="head">
        <p className="desc">
        {manager === 1 ? "Bạn đang mở khóa tài khoản đăng nhập của Phạm Văn Tĩnh, bạn có chắc chắn?" : "Bạn đang khóa tài khoản đăng nhập của Phạm Văn Tĩnh, bạn có chắc chắn?"}
      </p>
      </div>
      <div className="content">
      {
        manager === 1 ? <img src="images/icon_active.gif" alt=""/> :  <img src="images/icon_deactive.gif" alt=""/>
      }
      </div>
      <div className="bottom">
      <button className="bottom__btn green__btn" type="button" onClick={onSubmit}>Đồng ý</button>
      <button className="bottom__btn red__btn" type="button" onClick={onCancel}>hủy</button>
  </div>
      </div>
  );
};

export default BlockLoginModal;
