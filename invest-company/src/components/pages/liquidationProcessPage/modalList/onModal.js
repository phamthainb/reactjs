import React from "react";
const OnModal = (props) => {

    return (
        <div className="modal-andlingLiquidation active1">
            <div className="header-andlingLiquidation">
                <div className="item">
                    <span className="number">
                        01
                </span>
                    <p className="p-text">Biên bản thanh lý</p>
                </div>
                <div className="item">
                    <span className="number">
                        02
                </span>
                    <p className="p-text">Chuyển tiền, hoàn tất</p>

                </div>
            </div>
            <div className="body-andlingLiquidation">
                <button className="btn blue__btn">
                    Xem biên bản thanh lý
            </button>
                <button className="btn green__btn">
                    In biên bản thanh lý
            </button>
                <button className="btn orange__btn">
                    Gửi biên bản thanh lý
            </button>
            </div>

            <div className="footer-andlingLiquidation">
                <div className="bottom">
                    <button className="bottom__btn green__btn" onClick={()=>props.setModal(true)} type="button" >Tiếp tục</button>
                    <button className="bottom__btn red__btn" onClick={()=>props.onClick(false)} type="button">hủy</button>
                </div>
            </div>
        </div>
    )
}
export default OnModal;