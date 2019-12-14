import React, { Fragment, useState } from "react";

const SendSmsModal = ({closeModal}) => {
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
        <p className="title">Gửi tin</p>
        
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
                className="item__textarea"
                onChange={e => setReasonMessenger(e.target.value)}
                placeholder="Tin nhắn.."
              ></textarea>
            </div>
          </div>
        </div>
        </div>
        <div className="bottom">
            <button className="bottom__btn green__btn" type="button" onClick={onSubmit}>Gửi tin</button>
            <button className="bottom__btn red__btn" type="button">hủy</button>
        </div>
        </Fragment>: <Fragment>
        <div className="content">
            <p className="desc">Gửi tin thành công tới nhà đầu tư</p>
            <img src="images/icon_success.gif" alt="" className="icon__success"/>
        </div>
        <div className="bottom">
            <button className="bottom__btn green__btn" type="button" onClick={onFinish}>OK</button>
        </div>
        </Fragment>
      }
      </div>
  );
};

export default SendSmsModal;