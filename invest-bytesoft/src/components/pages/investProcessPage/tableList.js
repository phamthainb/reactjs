import React, { useState } from "react";
import PaginationTable from "./../../bases/shared/paginationTable.js";
import { BsModal } from "../../../components/bases/shared";
import InvestProcessModal from "./modalList/investProcessModal";


const tableList = [
  {
    id: 1,
    contractCode: 12344657,
    name: "Nguyễn Văn A",
    investMoney: 10000000,
    investType: 0,
    content: "Giám sát kinh doanhfdhgfhgg",
    processDate: "05/12/2019",
    status: 1
  },
  {
    id: 1,
    contractCode: 12344657,
    name: "Nguyễn Văn A",
    investMoney: 10000000,
    investType: 0,
    content: "Giám sát kinh doanhfdhgfhgg",
    processDate: "05/12/2019",
    status: 1
  },
  {
    id: 1,
    contractCode: 12344657,
    name: "Nguyễn Văn A",
    investMoney: 10000000,
    investType: 0,
    content: "Giám sát kinh doanhfdhgfhgg",
    processDate: "05/12/2019",
    status: 0
  },
  {
    id: 1,
    contractCode: 12344657,
    name: "Nguyễn Văn A",
    investMoney: 10000000,
    investType: 1,
    content: "Giám sát kinh doanhfdhgfhgg",
    processDate: "05/12/2019",
    status: 1
  },
  {
    id: 1,
    contractCode: 12344657,
    name: "Nguyễn Văn A",
    investMoney: 10000000,
    investType: 0,
    content: "Giám sát kinh doanhfdhgfhgg",
    processDate: "05/12/2019",
    status: 0
  },
  {
    id: 1,
    contractCode: 12344657,
    name: "Nguyễn Văn A",
    investMoney: 10000000,
    investType: 0,
    content: "Giám sát kinh doanhfdhgfhgg",
    processDate: "05/12/2019",
    status: 1
  },
  {
    id: 1,
    contractCode: 12344657,
    name: "Nguyễn Văn A",
    investMoney: 10000000,
    investType: 0,
    content: "Giám sát kinh doanhfdhgfhgg",
    processDate: "05/12/2019",
    status: 1
  },
  {
    id: 1,
    contractCode: 12344657,
    name: "Nguyễn Văn A",
    investMoney: 10000000,
    investType: 0,
    content: "Giám sát kinh doanhfdhgfhgg",
    processDate: "05/12/2019",
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
      <div className="table-content process-table">
      <div className="table">
        <table>
          <thead>
          <tr>
            <th>Mã hợp đồng</th>
            <th>Họ tên <br/> nhà đầu tư</th>
            <th>Tiền đầu tư</th>
            <th>Hình thức</th>
            <th>Nội dung</th>
            <th>Ngày kích hoạt</th>
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
                  <td className="no-wrap">{item.investMoney}</td>
                  <td>{item.investType === 0 ? "Chuyển khoản" : "Tiền mặt"}</td>
                  <td>{item.content}</td>
                  <td>{item.processDate}</td>
                  <td>{item.status === 0 ? "Chưa xử lý" : "Đang xử lý"}</td>
                  <td><button className={`process__btn ${item.status === 0 ? "" : "gray__btn"}`} type="button" onClick={() => showModalType(item)}>Kích hoạt</button></td>
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
         <InvestProcessModal itemProcess={modalType} closeModal={() =>  setToggleModal(false)}/> : ""
       }
      </BsModal>
        <PaginationTable list={tableList} />
      </div>
  );
};

export default TableList;