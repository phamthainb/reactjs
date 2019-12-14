

import React, { useState } from "react";
import PaginationTable from "./../../bases/shared/paginationTable.js";

const tableList = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    IDCard: "484958496057965",
    position: "Giám sát kinh doanh",
    investMoney: 10000000,
    interestMoney: 10000,
    bonusMoney: 100000,
    status: 1
  },
  {
    id: 2,
    name: "Nguyễn Văn A",
    IDCard: "484958496057965",
    position: "Giám sát kinh doanh",
    investMoney: 10000000,
    interestMoney: 10000,
    bonusMoney: 100000,
    status: 1
  },
  {
    id: 3,
    name: "Nguyễn Văn A",
    IDCard: "484958496057965",
    position: "Giám sát kinh doanh",
    investMoney: 10000000,
    interestMoney: 10000,
    bonusMoney: 100000,
    status: 1
  },
  {
    id: 4,
    name: "Nguyễn Văn A",
    IDCard: "484958496057965",
    position: "Giám sát kinh doanh",
    investMoney: 10000000,
    interestMoney: 10000,
    bonusMoney: 100000,
    status: 1
  },
  {
    id: 5,
    name: "Nguyễn Văn A",
    IDCard: "484958496057965",
    position: "Giám sát kinh doanh",
    investMoney: 10000000,
    interestMoney: 10000,
    bonusMoney: 100000,
    status: 1
  }
];
const TableList = () => {
  const [listChose, setListChose] = useState([]);
  const choseCheckBox = (e, id) => {
    var newListChose = [...listChose]
    var index = -1;
    for(var i = 0; i< newListChose.length; i++){
      if(listChose[i] === id){
        index = i;
        break
      }
    }
    if(e.target.checked){
      newListChose.push(id);
    }else{
      if(index >= 0){
        newListChose.splice(index, 1)
      }
    }
    setListChose(newListChose);
  };
  return (
      <div className="table-content">
        <div className="table">
          <table>
            <thead>
            <tr>
              <th>All</th>
              <th>họ và tên</th>
              <th>CMND</th>
              <th>Chức vụ</th>
              <th>Tiền đầu tư</th>
              <th>Lãi đã nhận</th>
              <th>Thưởng đã nhận</th>
              <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {tableList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" className="select__box" onChange={(e)=>choseCheckBox(e,item.id)}/>
                    </td>
                    <td className="no-wrap">{item.name}</td>
                    <td>{item.IDCard}</td>
                    <td className="no-wrap">{item.position}</td>
                    <td>{item.investMoney}</td>
                    <td>{item.interestMoney}</td>
                    <td>{item.bonusMoney}</td>
                    <td>{item.status === 1 ? "Chặn" : "Kích hoạt"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <PaginationTable list={tableList} />
      </div>
  );
};

export default TableList;

