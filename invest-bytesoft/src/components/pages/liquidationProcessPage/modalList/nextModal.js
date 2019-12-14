import React, { Fragment, useState } from "react";
import $ from 'jquery';
const NextModal = (props) => {
    const [ActiveCheck, setActiveCheck] = useState(false);
    const [cart, setCart] = useState(false);
    const [name, setName] = useState("");
    const [bank, setbank] = useState("");
    const [accountHolder, setAccountHolder] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [branch, setbranch] = useState("");
    const [paymentSlip, setPaymentSlip] = useState("");
    const [liquidationVersion, setLiquidationVersion] = useState("");
    const readURL = (input,ID) => {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (event) {
                $(ID).attr("src", event.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    };
    const isFile = (event)=>{
        var files = event.target.files[0];
        readURL(event.target,"#blah");
        setPaymentSlip(files);
    }
    const isFile2 = (event)=>{
        var files = event.target.files[0];
        readURL(event.target,"#blah2");
        setLiquidationVersion(files);
    }
    const onClos = ()=>{
        props.onClick(false);
        setActiveCheck(false);
        setCart(false);
        setName("");
        setbank("");
        setAccountHolder("");
        setAccountNumber("");
        setbranch("");
        setPaymentSlip("");
        setLiquidationVersion("");
    }
    const onSubmit = () =>{
        let formData = new FormData();
        if(paymentSlip.size>0){
            formData.append('paymentSlip', paymentSlip);
        }
        if(liquidationVersion.size){
            formData.append('liquidationVersion', paymentSlip);
        }
        if(setCart==false){
            formData.append('name',name);
            formData.append('cart',cart);
        }else{
            formData.append('bank',bank);
            formData.append('accountHolder',accountHolder);
            formData.append('accountNumber',accountNumber);
            formData.append('branch',branch);
            formData.append('bank',bank);
        }
        props.setSuccessProcess(true);
    }
    return (
        <div className="modal-andlingLiquidation">
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
                <div className="formAnd">
                    <div className="bs-row row-md-10 row-sm-10 row-lg-15">
                        <div className="bs-col sm-100-10 md-50-10 lg-50-15">
                            <div className="form-group">
                                <label htmlFor="name">Người chi tiền</label>
                                <input onChange={(event) => setName(event.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label onClick={()=>setCart(!cart)} htmlFor="cashTransfer" className={cart===false?"cart active":"cart"}>
                                    <span className="radio"></span>
                                    Chuyển tiền mặt
                                </label>
                                <label onClick={()=>setCart(!cart)} htmlFor="transfer" className={cart===false?"cart":"active cart"}>
                                    <span className="radio"></span>
                                    Chuyển khoản
                                </label>
                            </div>
                            {
                                (cart ===true) ? (
                                    <Fragment>
                                        <div className="form-group">
                                            <label htmlFor="bank">Ngân hàng</label>
                                            <input type="text" onChange={(event) => setbank(event.target.value)} name="bank" value={bank} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="accountHolder">Chủ tài khoản</label>
                                            <input type="text" onChange={(event) => setAccountHolder(event.target.value)} name="accountHolder" value={accountHolder} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="accountNumber">Số tài khoản nhận</label>
                                            <input type="text" onChange={(event) => setAccountNumber(event.target.value)} name="accountNumber" value={accountNumber} className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="branch">Chi nhánh</label>
                                            <input type="text" onChange={(event) => setbranch(event.target.value)} name="branch" value={branch} className="form-control" />
                                        </div>
                                    </Fragment>
                                ) : ("")
                            }

                        </div>
                        <div className="bs-col sm-100-10 md-50-10 lg-50-15">
                            <div className="bs-row row-xs-5 row-sm-5 row-md-5 row-lg-10">
                                <div className="bs-col xs-100-5 sm-50-5 md-50-5 lg-50-10">
                                    <div className="formFile">

                                        <div className="bg-input">
                                            <img id="blah" src={"images/transform_img.jpg"} className="img-responsive" alt="Image" />
                                            <input onChange={(event)=>isFile(event)} name="paymentSlip" type="file" className="file" />
                                        </div>
                                        <p className="titleFile">
                                            Upload phiếu chi
                                        </p>
                                    </div>
                                </div>
                                <div className="bs-col xs-100-5 sm-50-5 md-50-5 lg-50-10">
                                    <div className="formFile">
                                        <div className="bg-input">
                                            <img id="blah2" src="images/transform_img.jpg" className="img-responsive" alt="Image" />

                                            <input  onChange={(event)=>isFile2(event)} type="file" name="liquidationVersion" className="file" />
                                        </div>
                                        <p className="titleFile">
                                            Upload phiên bản thanh lý
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bs-col lg-100-15">
                    <div className="form-group" onClick={() => setActiveCheck(!ActiveCheck)}>
                        <label htmlFor="price" className="price">
                            <input type="checkbox" className="checkBox" />
                            {
                                (ActiveCheck === true) ? (
                                    <span className="spanCheckBox active"></span>

                                ) : (
                                        <span className="spanCheckBox"></span>
                                    )
                            }

                            Xác nhận đã chuyển tiền
                        </label>
                    </div>
                </div>
            </div>
            <div className="footer-andlingLiquidation">
                <div className="bottom">
                    <button className="bottom__btn green__btn" onClick={onSubmit} type="button">Gửi tin</button>
                    <button onClick={onClos} className="bottom__btn red__btn" type="button">hủy</button>
                </div>
            </div>
        </div>

    )
}
export default NextModal;