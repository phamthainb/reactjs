

import React, { useState } from "react";
import PaginationTable from "./../../bases/shared/paginationTable.js";

const tableList = [
  {
    id: 1,
    email: "adg@gmail.com",
    name: "Nguyễn Văn A",
    access: [1,2,3,4],
    status: 1
  },
  {
    id: 1,
    email: "adg@getMaxListeners.com",
    name: "Nguyễn Văn A",
    access: [1,2,3,4,5],
    status: 0
  },
  {
    id: 1,
    email: "adg@getMaxListeners.com",
    name: "Nguyễn Văn A",
    access: [1,2,3,4],
    status: 0
  },
  {
    id: 1,
    email: "adg@getMaxListeners.com",
    name: "Nguyễn Văn A",
    access: [1,2,3,4],
    status: 1
  },
  {
    id: 1,
    email: "adg@getMaxListeners.com",
    name: "Nguyễn Văn A",
    access: [1,2,3,4],
    status: 1
  },
  {
    id: 1,
    email: "adg@getMaxListeners.com",
    name: "Nguyễn Văn A",
    access: [1,2,3,4],
    status: 1
  },
  {
    id: 1,
    email: "adg@getMaxListeners.com",
    name: "Nguyễn Văn A",
    access: [1,2,3,4],
    status: 1
  },
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
      <div className="table-content create-table">
        <div className="table">
          <table>
            <thead>
            <tr>
              <th>All</th>
              <th>Email</th>
              <th>Tên nhân viên</th>
              <th>Quyền hạn</th>
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
                    <td className="no-wrap">{item.email}</td>
                    <td>{item.name}</td>
                    <td style={{
                      maxWidth: "150px"
                    }}>{item.access.map((item1, index)=>{
                      return <span key={index}>{
                        item1 === 1 ? "danh sách đầu tư" :
                        item1 === 2 ? "danh sách hợp đồng" :
                        item1 === 3 ? "xử lý đầu tư" :
                        item1 === 4 ? "xử lý thanh lý" :
                        item1 === 5 ? "xử lý thống kê" :
                        ""
                      }{index !== item.access.lenght ? "," : ""} </span>
                    })}</td>
                    <td>{item.status === 1 ? "Hoạt động" : "Chờ duyệt"}</td>
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

