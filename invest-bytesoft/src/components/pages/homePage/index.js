
import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, } from 'react-redux';
import InputMoney from './inputMoney';
import CirProgress from './cirProgress';
import RelativeLink from "./../../bases/shared/relativeLink.js";
import { BsModal } from "../../../components/bases/shared";
import PaginationTable from "./../../bases/shared/paginationTable.js";
import * as actions from "./../../../states/duck/pages/homeReducer/actions"

const HomePage = () => {
    const [toggleModal, setToggleModal] = useState(false);
    const [indexModal, setIndexModal] = useState(0);
    const [valueInput, setValueInput] = useState("");
    const [total, setTotal] = useState(0);

    const showModal = (index) => {
        setIndexModal(index);
        setToggleModal(!toggleModal);
    }

    useEffect(() => {
        let temp = 0;
        DataChart.forEach(element => {
            temp += element.value;
        });
        setTotal(temp);
    }, []);

    return (
        <Fragment>
            <RelativeLink />
            <section className="section-statistic">
                <div className="module module-statistic">
                    <div className="module-header">
                        <h2 className="title"><img src="images/title_img.png" alt="" /> Thống kê </h2>
                    </div>
                    <div className="module-content">
                        <div className="statistic-position">
                            <div className="content-sub">Thống kê chức vụ kinh doanh</div>
                            <div className="list-chart">
                                {DataChart.map((item, index) => <CirProgress key={index} total={total} item={item} showModal={showModal} />)}
                            </div>
                            <div className="list-input-money">
                                <div className="bs-row">
                                    {DataInput.map((item, index) => <InputMoney key={index} item={item} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BsModal className="modal-home" toggleModal={toggleModal} onClick={() => setToggleModal(false)}>
                    <h2 className="title-modal">Danh sách những nhà đầu tư đạt chức vụ <span>{DataChart[indexModal].name}</span></h2>
                    <div className="modal-search">
                        <span>Họ và tên</span> <br />
                        <input type="text" value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
                        <button className="btn-search" onClick={() => actions.homeModalSearch(valueInput)}>Tìm</button>
                    </div>
                    <TableContent />
                </BsModal>
            </section>
        </Fragment>
    );
}
export default HomePage;
/// data
const DataChart = [
    { index: 0, name: "quản lý", value: 125, color_1: "07a4e6", color_2: "0dddfc" },
    { index: 1, name: "giám sát", value: 25, color_1: "f78300", color_2: "ffc500" },
    { index: 2, name: "trưởng nhóm", value: 254, color_1: "e50532", color_2: "fe4584" },
    { index: 3, name: "trưởng phòng", value: 22, color_1: "d50df1", color_2: "7a64f4" },
    { index: 4, name: "giám đốc", value: 75, color_1: "12e089", color_2: "92ff5d" }
]
const DataInput = [
    { name: "Tổng tiền lãi đã trả cho nhà đầu tư", valueMoney: 1, time_start: Date(), time_end: Date(), displayTime: true },
    { name: "Tổng tiền lãi đã trả cho nhà đầu tư", valueMoney: 1, time_start: Date(), time_end: Date(), displayTime: true },
    { name: "Tổng tiền lãi đã trả cho nhà đầu tư", valueMoney: 1, time_start: Date(), time_end: Date(), displayTime: true },
    { name: "Tổng tiền lãi đã trả cho nhà đầu tư", valueMoney: 1, time_start: Date(), time_end: Date(), displayTime: true },
    { name: "Tổng tiền lãi đã trả cho nhà đầu tư", valueMoney: 1, time_start: Date(), time_end: Date(), displayTime: true },
    { name: "Tổng tiền lãi đã trả cho nhà đầu tư", valueMoney: 1, time_start: Date(), time_end: Date(), displayTime: true },
    { name: "Tổng tiền lãi đã trả cho nhà đầu tư", valueMoney: 1, time_start: Date(), time_end: Date(), displayTime: true },
    { name: "Tổng tiền lãi đã trả cho nhà đầu tư", valueMoney: 1, time_start: Date(), time_end: Date(), displayTime: true },
    { name: "Tổng tiền lãi đã trả cho nhà đầu tư", valueMoney: 1, time_start: Date(), time_end: Date(), displayTime: true },
    { name: "Tổng tiền lãi đã trả cho nhà đầu tư", valueMoney: 1, time_start: Date(), time_end: Date(), displayTime: false },
]
const DataModal = [
    { name: "nguyen van a", cmnd: "1234566", email: "abc@gmail.com", phone: "033903129" },
    { name: "nguyen van b", cmnd: "1234566", email: "abc@gmail.com", phone: "033903129" },
    { name: "nguyen van c", cmnd: "1234566", email: "abc@gmail.com", phone: "033903129" },
    { name: "nguyen van d", cmnd: "1234566", email: "abc@gmail.com", phone: "033903129" },
]

const TableContent = () => {
    const valueModal = useSelector(state => state.home.valueModal);
    let Data = [];
    if (valueModal !== "") {
        Data = DataModal.filter(item => item.name.indexOf(valueModal) !== -1);
        if (Data.length === 0) Data.push({ name: "no match" });
    } else {
        Data = [...DataModal];
    }
    return <div className="table-content">
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Họ và tên</th>
                        <th>CMND</th>
                        <th>Email</th>
                        <th>Điện thoại</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="no-wrap">{item.name}</td>
                                <td>{item.cmnd}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        <PaginationTable list={DataModal} />
    </div>
}