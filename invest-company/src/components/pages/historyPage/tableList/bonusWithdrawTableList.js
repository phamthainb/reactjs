import React from "react";
import PaginationTable from "../../../bases/shared/paginationTable";

const tableList = [
  {
    id: 1,
    moneyWithdraw: 1000000,
    processDate: "16/12/2020",
    typeWithdraw: "Tiền mặt"
  },
  {
    id: 1,
    moneyWithdraw: 1000000,
    processDate: "16/12/2020",
    typeWithdraw: "Tiền mặt"
  },
  {
    id: 1,
    moneyWithdraw: 1000000,
    processDate: "16/12/2020",
    typeWithdraw: "Tiền mặt"
  },
  {
    id: 1,
    moneyWithdraw: 1000000,
    processDate: "16/12/2020",
    typeWithdraw: "Tiền mặt"
  },
  {
    id: 1,
    moneyWithdraw: 1000000,
    processDate: "16/12/2020",
    typeWithdraw: "Tiền mặt"
  },
  {
    id: 1,
    moneyWithdraw: 1000000,
    processDate: "16/12/2020",
    typeWithdraw: "Tiền mặt"
  },
  {
    id: 1,
    moneyWithdraw: 1000000,
    processDate: "16/12/2020",
    typeWithdraw: "Tiền mặt"
  },
  {
    id: 1,
    moneyWithdraw: 1000000,
    processDate: "16/12/2020",
    typeWithdraw: "Tiền mặt"
  },
];
const BonusWithdrawTableList = () => {
  return (
      <div className="table-content bonus-withdraw">
        <div className="table">
          <table>
            <thead>
            <tr>
              <th>Số tiền rút</th>
              <th>Ngày rút thưởng</th>
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

export default BonusWithdrawTableList;

