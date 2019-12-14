import React, { Fragment, useState } from "react";

const OnLoginModal = ({closeModal}) => {
  const [reasonMessenger, setReasonMessenger] = useState("");
  const [submit, setSubmit] = useState(false);
  
  const onSubmit = () => {
      console.log(reasonMessenger);
      setSubmit(true);
  }
  const onFinish = () => {
    setSubmit(false);
    closeModal();
    
  }
  return (
    <div className="block-login">
      <div className="head">
        <p className="title">Mở đăng nhập</p>
        <p className="desc">
        Bạn đang mở đăng nhập tài khoản của nhà đầu tư: Nguyễn Văn A
      </p>
      </div>
      {
        !submit ? 
        <Fragment>
        <div className="content">
        <div className="bs-row row-xs-10">
          <div className="bs-col xs-100-10">
            <div className="item">
              <textarea
                name="reasonMessenger"
                id=""
                cols="30"
                rows="10"
                class="item__textarea"
                onChange={e => setReasonMessenger(e.target.value)}
                placeholder="Lý do mở.."
              ></textarea>
            </div>
          </div>
        </div>
        </div>
        <div className="bottom">
            <button className="bottom__btn green__btn" type="button" onClick={onSubmit}>Mở đăng nhập</button>
            <button className="bottom__btn red__btn" type="button">hủy</button>
        </div>
        </Fragment>: <Fragment>
        <div className="content">
            <p className="desc">Một email thông báo đã được gửi tới nhà đầu tư để họ biết được lý do tài khoản được mở</p>
        </div>
        <div className="bottom">
            <button className="bottom__btn green__btn" type="button" onClick={onFinish}>OK</button>
        </div>
        </Fragment>
      }
      </div>
  );
};

export default OnLoginModal;
