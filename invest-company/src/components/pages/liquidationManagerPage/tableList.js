

import React, { useState } from "react";
import PaginationTable from "./../../bases/shared/paginationTable.js";
import { BsModal } from "../../../components/bases/shared";
import WithdrawImageModal from "./modalList/withdrawImageModal"

const tableList = [
  {
    id: 1,
    contractCode: 12352657,
    name: "Nguyễn Văn A",
    moneyWitdraw: 1000000,
    processDate: "16/12/2020",
    processPerson: "Phạm Văn Tĩnh",
    paymentPaper: "images/transform_img.jpg"
  },
  {
    id: 1,
    contractCode: 12352657,
    name: "Nguyễn Văn A",
    moneyWitdraw: 1000000,
    processDate: "16/12/2020",
    processPerson: "Phạm Văn Tĩnh",
    paymentPaper: "images/transform_img.jpg"
  },
  {
    id: 1,
    contractCode: 12352657,
    name: "Nguyễn Văn A",
    moneyWitdraw: 1000000,
    processDate: "16/12/2020",
    processPerson: "Phạm Văn Tĩnh",
    paymentPaper: "images/transform_img.jpg"
  },
  {
    id: 1,
    contractCode: 12352657,
    name: "Nguyễn Văn A",
    moneyWitdraw: 1000000,
    processDate: "16/12/2020",
    processPerson: "Phạm Văn Tĩnh",
    paymentPaper: "images/transform_img.jpg"
  },
  {
    id: 1,
    contractCode: 12352657,
    name: "Nguyễn Văn A",
    moneyWitdraw: 1000000,
    processDate: "16/12/2020",
    processPerson: "Phạm Văn Tĩnh",
    paymentPaper: "images/transform_img.jpg"
  },
  {
    id: 1,
    contractCode: 12352657,
    name: "Nguyễn Văn A",
    moneyWitdraw: 1000000,
    processDate: "16/12/2020",
    processPerson: "Phạm Văn Tĩnh",
    paymentPaper: "images/transform_img.jpg"
  },
  {
    id: 1,
    contractCode: 12352657,
    name: "Nguyễn Văn A",
    moneyWitdraw: 1000000,
    processDate: "16/12/2020",
    processPerson: "Phạm Văn Tĩnh",
    paymentPaper: "images/transform_img.jpg"
  }
];
const TableList = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const setLiquidation = (item, type) => {
    setTypeModal(type);
    setToggleModal(true);
  }
  return (
      <div className="table-content">
        <div className="table">
          <table>
            <thead>
            <tr>
              <th>Mã hợp đồng</th>
              <th>Người thanh lý</th>
              <th>Số tiền thanh lý</th>
              <th>Ngày thanh lý</th>
              <th>Người xử lý</th>
              <th>Phiếu chi</th>
              <th>Biên bản</th>
              </tr>
            </thead>
            <tbody>
              {tableList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="no-wrap">{item.contractCode}</td>
                    <td>{item.name}</td>
                    <td className="no-wrap">{item.moneyWitdraw}</td>
                    <td>{item.processDate}</td>
                    <td>{item.processPerson}</td>
                    <td><button className="show__info" onClick={() => setLiquidation(item, "payment-slip")}><img src="images/icon_img.gif" alt=""/></button></td>
                    <td><button className="show__info" onClick={() => setLiquidation(item, "report")}><img src="images/icon_img.gif" alt=""/></button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <BsModal
        className="withdraw-modal"
        toggleModal={toggleModal}
        onClick={() => setToggleModal(false)}
      >
       <WithdrawImageModal closeModal={()=>setToggleModal(false)} typeModal={typeModal}/>
      </BsModal>
        <PaginationTable list={tableList} />
      </div>
  );
};

export default TableList;

