import React, { useState } from "react";
import PaginationTable from "./../../bases/shared/paginationTable.js";
import { BsModal } from "../../../components/bases/shared";
import WithdrawProcessModal from "./modalList/withdrawProcessModal";


const tableList = [
  {
    id: 1,
    contractCode: 12344657,
    name: "Nguyễn Văn A",
    withdrawMoney: 10000000,
    withdrawType: 0,
    processDate: "05/12/2019",
    processPerson: "Phạm Văn Tĩnh",
    status: 1,
  },
  {
    id: 1,
    contractCode: 12344657,
    name: "Nguyễn Văn A",
    withdrawMoney: 10000000,
    withdrawType: 0,
    processDate: "05/12/2019",
    processPerson: "Phạm Văn Tĩnh",
    status: 1,
  },
  {
    id: 1,
    contractCode: 12344657,
    name: "Nguyễn Văn A",
    withdrawMoney: 10000000,
    withdrawType: 0,
    processDate: "05/12/2019",
    processPerson: "Phạm Văn Tĩnh",
    status: 1,
  },
  {
    id: 1,
    contractCode: 12344657,
    name: "Nguyễn Văn A",
    withdrawMoney: 10000000,
    withdrawType: 0,
    processDate: "05/12/2019",
    processPerson: "Phạm Văn Tĩnh",
    status: 1,
  },
  {
    id: 1,
    contractCode: 12344657,
    name: "Nguyễn Văn A",
    withdrawMoney: 10000000,
    withdrawType: 0,
    processDate: "05/12/2019",
    processPerson: "Phạm Văn Tĩnh",
    status: 1,
  },
  {
    id: 1,
    contractCode: 12344657,
    name: "Nguyễn Văn A",
    withdrawMoney: 10000000,
    withdrawType: 0,
    processDate: "05/12/2019",
    processPerson: "Phạm Văn Tĩnh",
    status: 1,
  },
  {
    id: 1,
    contractCode: 12344657,
    name: "Nguyễn Văn A",
    withdrawMoney: 10000000,
    withdrawType: 0,
    processDate: "05/12/2019",
    processPerson: "Phạm Văn Tĩnh",
    status: 0,
  },
  {
    id: 1,
    contractCode: 12344657,
    name: "Nguyễn Văn A",
    withdrawMoney: 10000000,
    withdrawType: 0,
    processDate: "05/12/2019",
    processPerson: "Phạm Văn Tĩnh",
    status: 1,
  },
  {
    id: 1,
    contractCode: 12344657,
    name: "Nguyễn Văn A",
    withdrawMoney: 10000000,
    withdrawType: 0,
    processDate: "05/12/2019",
    processPerson: "Phạm Văn Tĩnh",
    status: 0,
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
      <div className="table-content process-table">
      <div className="table">
        <table>
          <thead>
          <tr>
            <th>Mã hợp đồng</th>
            <th>Họ tên <br/> nhà đầu tư</th>
            <th>Số tiền rút</th>
            <th>Loại rút</th>
            <th>Ngày yêu cầu rút</th>
            <th>Người xử lý</th>
            <th>Trạng thái</th>
            <th>hành động</th>
            </tr>
          </thead>
          <tbody>
            {tableList.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="no-wrap">{item.contractCode}</td>
                  <td>{item.name}</td>
                  <td className="no-wrap">{item.withdrawMoney}</td>
                  <td>{item.withdrawType === 0 ? "Chuyển khoản" : "Tiền mặt"}</td>
                  <td>{item.processDate}</td>
                  <td>{item.processPerson}</td>
                  <td>{item.status === 0 ? "Chờ ký phiếu chi" : "Đang xử lý"}</td>
                  <td><button className={`process__btn ${item.status === 0 ? "" : "gray__btn"}`} type="button" onClick={() => showModalType(item)}>Trả tiền</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
        <BsModal
        className="process-modal"
        toggleModal={toggleModal}
        onClick={() => setToggleModal(false)}
      >
       { toggleModal ?
         <WithdrawProcessModal itemProcess={modalType} closeModal={() =>  setToggleModal(false)}/> : ""
       }
      </BsModal>
        <PaginationTable list={tableList} />
      </div>
  );
};

export default TableList;