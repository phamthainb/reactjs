import React, { useState } from "react";
import PaginationTable from "./../../bases/shared/paginationTable.js";
import { BsModal } from "../../../components/bases/shared";
import ContractImagesModal from "./modalList/contractImagesModal";
import InfoCashModal from "./modalList/infoCashModal";
import InfoTransferModal from "./modalList/infoTransferModal";

const tableList = [
  {
    id: 1,
    contractCode: 1243465567,
    name: "Nguyễn văn A",
    investMoney: 10000000,
    period:"2 năm",
    dateActive: "22/12/2018",
    endate: "22/12/2019",
    investType: 0,
    activePerson: "Nguyễn Văn A",
    status: 1
  },
  {
    id: 1,
    contractCode: 1243465567,
    name: "Nguyễn văn A",
    investMoney: 10000000,
    period:"2 năm",
    dateActive: "22/12/2018",
    endate: "22/12/2019",
    investType: 1,
    activePerson: "Nguyễn Văn A",
    status: 0
  },
  {
    id: 1,
    contractCode: 1243465567,
    name: "Nguyễn văn A",
    investMoney: 10000000,
    period:"2 năm",
    dateActive: "22/12/2018",
    endate: "22/12/2019",
    investType: 0,
    activePerson: "Nguyễn Văn A",
    status: 1
  },
  {
    id: 1,
    contractCode: 1243465567,
    name: "Nguyễn văn A",
    investMoney: 10000000,
    period:"2 năm",
    dateActive: "22/12/2018",
    endate: "22/12/2019",
    investType: 1,
    activePerson: "Nguyễn Văn A",
    status: 1
  },
  {
    id: 1,
    contractCode: 1243465567,
    name: "Nguyễn văn A",
    investMoney: 10000000,
    period:"2 năm",
    dateActive: "22/12/2018",
    endate: "22/12/2019",
    investType: 1,
    activePerson: "Nguyễn Văn A",
    status: 1
  },
  {
    id: 1,
    contractCode: 1243465567,
    name: "Nguyễn văn A",
    investMoney: 10000000,
    period:"2 năm",
    dateActive: "22/12/2018",
    endate: "22/12/2019",
    investType: 0,
    activePerson: "Nguyễn Văn A",
    status: 0
  },
  {
    id: 1,
    contractCode: 1243465567,
    name: "Nguyễn văn A",
    investMoney: 10000000,
    period:"2 năm",
    dateActive: "22/12/2018",
    endate: "22/12/2019",
    investType: 1,
    activePerson: "Nguyễn Văn A",
    status: 1
  },
];
const TableList = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const showModalType = value => {
    setModalType(value);
    setToggleModal(true);
  };
  return (
      <div className="table-content">
        <div className="table">
          <table>
            <thead>
            <tr>
              <th>Mã HĐ</th>
              <th>họ và tên <br/>Nhà đầu tư</th>
              <th>Tiền đầu tư</th>
              <th>Kỳ hạn</th>
              <th>Kích hoạt</th>
              <th>Hết kỳ hạn</th>
              <th>Hình thức</th>
              <th>Người kích hoạt</th>
              <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {tableList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="no-wrap"><button className="show__info" type="button" onClick={() => showModalType("contractCode")}>{item.contractCode}</button></td>
                    <td>{item.name}</td>
                    <td className="no-wrap">{item.investMoney}</td>
                    <td className="no-wrap">{item.period}</td>
                    <td>{item.dateActive}</td>
                    <td>{item.endate}</td>
                    <td>{item.investType === 0 ? <button className="show__info" type="button" onClick={() => showModalType(0)}>Chuyển khoản</button> : <button className="show__info" type="button" onClick={() => showModalType(1)}>Tiền mặt</button>}</td>
                    <td>{item.activePerson}</td>
                    <td>{item.status === 1 ? "Chờ kích hoạt" : "Kích hoạt"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <BsModal
        className={modalType === "contractCode" ? "contract-img" : modalType === 0 ? "transform-trade" : "cash-trade"}
        toggleModal={toggleModal}
        onClick={() => setToggleModal(false)}
      >
        {modalType === "contractCode" ? (
          <ContractImagesModal closeModal={()=>setToggleModal(false)}/>
        ) : modalType === 0 ? (
          <InfoTransferModal closeModal={()=>setToggleModal(false)}/>
        ) : modalType === 1 ? (
          <InfoCashModal closeModal={()=>setToggleModal(false)}/>
        ) : (
          ""
        )}
      </BsModal>
        <PaginationTable list={tableList} />
      </div>
  );
};

export default TableList;