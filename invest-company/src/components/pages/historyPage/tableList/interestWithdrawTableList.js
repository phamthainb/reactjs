

import React from "react";
import PaginationTable from "../../../bases/shared/paginationTable";

const tableList = [
  {
    id: 1,
    moneyWithdraw: 20000000,
    processDate: "16/12/2020",
    typeWithdraw: "tiền mặt"
  },
  {
    id: 1,
    moneyWithdraw: 20000000,
    processDate: "16/12/2020",
    typeWithdraw: "chuyển khoản"
  },
  {
    id: 1,
    moneyWithdraw: 20000000,
    processDate: "16/12/2020",
    typeWithdraw: "tiền mặt"
  },
  {
    id: 1,
    moneyWithdraw: 20000000,
    processDate: "16/12/2020",
    typeWithdraw: "chuyển khoản"
  },
  {
    id: 1,
    moneyWithdraw: 20000000,
    processDate: "16/12/2020",
    typeWithdraw: "tiền mặt"
  },
  {
    id: 1,
    moneyWithdraw: 20000000,
    processDate: "16/12/2020",
    typeWithdraw: "chuyển khoản"
  },
  {
    id: 1,
    moneyWithdraw: 20000000,
    processDate: "16/12/2020",
    typeWithdraw: "tiền mặt"
  },
  {
    id: 1,
    moneyWithdraw: 20000000,
    processDate: "16/12/2020",
    typeWithdraw: "chuyển khoản"
  },
  {
    id: 1,
    moneyWithdraw: 20000000,
    processDate: "16/12/2020",
    typeWithdraw: "tiền mặt"
  },
  {
    id: 1,
    moneyWithdraw: 20000000,
    processDate: "16/12/2020",
    typeWithdraw: "chuyển khoản"
  },
];
const InterestWithdrawTableList = () => {
  return (
      <div className="table-content interest-withdraw">
        <div className="table">
          <table>
            <thead>
            <tr>
              <th>Số tiền rút</th>
              <th>Ngày rút lãi</th>
              <th>Hình thức rút</th>
              </tr>
            </thead>
            <tbody>
              {tableList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="no-wrap">{item.moneyWithdraw}</td>
                    <td>{item.processDate}</td>
                    <td className="no-wrap">{item.typeWithdraw}</td>
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

export default InterestWithdrawTableList;

