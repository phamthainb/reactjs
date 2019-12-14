import React, { useState } from 'react';
import DatePicker from 'react-date-picker'
const InputMoney = (props) => {
    const { name, displayTime } = props.item;
    const [timeStart, setTimeStart] = useState(new Date());
    const [timeEnd, setTimeEnd] = useState(new Date());
    return <div className="bs-col lg-33 md-33 sm-50 tn-100">
        <div className="input-money">
            <span className="mark-border-top"></span>
            <div className="input-title">
                {name}
            </div>
            {/* //input money */}
            <input type="text" className="money" name="total-money" value="123" disabled />
            {displayTime ? (<div className="date-time">
                <div className="bs-row">
                    <div className="bs-col xs-50 tn-100">
                        <div className="time-start">
                            <p>Thời gian từ</p>
                            {/* <input type="date" name="time-start" id="" className="input-time-start" /> */}
                            <DatePicker value={timeStart} onChange={ setTimeStart} />
                        </div>
                    </div>
                    <div className="bs-col xs-50 tn-100">
                        <div className="time-end">
                            <p>Tới</p>
                            {/* <input type="date" name="time-end" id="" className="input-time-end" /> */}
                            <DatePicker value={timeEnd} onChange={ setTimeEnd} />
                        </div>
                    </div>
                </div>
            </div>) : ""}
            <span className="mark-border-bottom"></span>
        </div>
    </div>
}
export default InputMoney;
