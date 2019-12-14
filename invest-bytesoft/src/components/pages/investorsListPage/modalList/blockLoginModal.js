import React, { Fragment, useState } from "react";
import TimePicker from "react-time-picker";
import DatePicker from "react-date-picker";

const BlockLoginModal = ({closeModal}) => {
  const [time, setTime] = useState("00:00");
  const [date, setDate] = useState(new Date());
  const [reasonMessenger, setReasonMessenger] = useState("");
  const [timeLimit, setTimeLimit] = useState(false);
  const [submit, setSubmit] = useState(false);
  const onTimeChange = time => {
    setTime(time);
  };
  const onDateChange = date => {
    setDate(date);
  };
  const onSubmit = () => {
      console.log(time, date, reasonMessenger,timeLimit);
      setSubmit(true);
  }
  const onFinish = () => {
    setSubmit(false);
    closeModal();
    
  }
  return (
    <div className="block-login">
      <div className="head">
        <p className="title">Chặn đăng nhập</p>
        <p className="desc">
        Bạn đang chặn đăng nhập tài khoản của nhà đầu tư: Nguyễn Văn A
      </p>
      </div>
      {
        !submit ? 
        <Fragment>
        <div className="content">
      
        <label htmlFor="">Chặn đăng nhập tới</label>
        <div className="bs-row row-xs-10">
          <div className="bs-col xs-30-10">
            <div className="item">
              <TimePicker onChange={onTimeChange} value={time} />
            </div>
          </div>
          <div className="bs-col xs-35-10">
            <div className="item">
              <DatePicker onChange={onDateChange} value={date} />
            </div>
          </div>
          <div className="bs-col xs-35-10">
            <div className="item">
              <label htmlFor="timeLimit" className={`radio__label ${timeLimit ? "active" : ""}`}>
                {" "}
                <input
                  type="checkbox"
                  name="timeLimit"
                  id="timeLimit"
                  className="item__radio"
                  onChange={e=> setTimeLimit(e.target.checked)}
                />
                Vô thời hạn
              </label>
            </div>
          </div>
          <div className="bs-col xs-100-10">
            <div className="item">
              <textarea
                name="reasonMessenger"
                id=""
                cols="30"
                rows="10"
                class="item__textarea"
                onChange={e => setReasonMessenger(e.target.value)}
                placeholder="Lý do bị chặn.."
              ></textarea>
            </div>
          </div>
        </div>
        </div>
        <div className="bottom">
            <button className="bottom__btn green__btn" type="button" onClick={onSubmit}>Chặn đăng nhập</button>
            <button className="bottom__btn red__btn" type="button">hủy</button>
        </div>
        </Fragment>: <Fragment>
        <div className="content">
            <p className="desc">Một email thông báo đã được gửi tới nhà đầu tư để họ biết được lý do bị chặn đăng nhập</p>
        </div>
        <div className="bottom">
            <button className="bottom__btn green__btn" type="button" onClick={onFinish}>OK</button>
        </div>
        </Fragment>
      }
      </div>
  );
};

export default BlockLoginModal;
