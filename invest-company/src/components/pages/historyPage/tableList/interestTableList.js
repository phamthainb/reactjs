

import React from "react";
import PaginationTable from "../../../bases/shared/paginationTable";

const tableList = [
  {
    id: 1,
    interestType: "Lãi đầu tư",
    contractCode: 1234567,
    interestMoney: 1000000,
    processDate: "16/12/2020",
  },
  {
    id: 1,
    interestType: "Lãi đầu tư",
    contractCode: 1234567,
    interestMoney: 1000000,
    processDate: "16/12/2020",
  },
  {
    id: 1,
    interestType: "Lãi đầu tư",
    contractCode: 1234567,
    interestMoney: 1000000,
    processDate: "16/12/2020",
  },
  {
    id: 1,
    interestType: "Lãi đầu tư",
    contractCode: 1234567,
    interestMoney: 1000000,
    processDate: "16/12/2020",
  },
  {
    id: 1,
    interestType: "Lãi đầu tư",
    contractCode: 1234567,
    interestMoney: 1000000,
    processDate: "16/12/2020",
  },
  {
    id: 1,
    interestType: "Lãi đầu tư",
    contractCode: 1234567,
    interestMoney: 1000000,
    processDate: "16/12/2020",
  },
  {
    id: 1,
    interestType: "Lãi đầu tư",
    contractCode: 1234567,
    interestMoney: 1000000,
    processDate: "16/12/2020",
  },
];
const InterestTableList = () => {
  return (
      <div className="table-content interest-history">
        <div className="table">
          <table>
            <thead>
            <tr>
              <th>Loại lãi</th>
              <th>Mã hợp đồng</th>
              <th>Số tiền lãi</th>
              <th>Ngày trả lãi</th>
              </tr>
            </thead>
            <tbody>
              {tableList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="no-wrap">{item.interestType}</td>
                    <td>{item.contractCode}</td>
                    <td className="no-wrap">{item.interestMoney}</td>
                    <td>{item.processDate}</td>
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

export default InterestTableList;

