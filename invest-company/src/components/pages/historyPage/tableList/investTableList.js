import React from "react";
import PaginationTable from "../../../bases/shared/paginationTable";

const tableList = [
  {
    id: 1,
    contractCode: 12352657,
    moneyInvest: 100000000,
    activeDay: "12/12/2019",
    period: "3 năm",
    activePerson: "Nguyễn Văn Tuấn"
  },
  {
    id: 1,
    contractCode: 12352657,
    moneyInvest: 100000000,
    activeDay: "12/12/2019",
    period: "3 năm",
    activePerson: "Nguyễn Văn Tuấn"
  },
  {
    id: 1,
    contractCode: 12352657,
    moneyInvest: 100000000,
    activeDay: "12/12/2019",
    period: "3 năm",
    activePerson: "Nguyễn Văn Tuấn"
  },
  {
    id: 1,
    contractCode: 12352657,
    moneyInvest: 100000000,
    activeDay: "12/12/2019",
    period: "3 năm",
    activePerson: "Nguyễn Văn Tuấn"
  },
  {
    id: 1,
    contractCode: 12352657,
    moneyInvest: 100000000,
    activeDay: "12/12/2019",
    period: "3 năm",
    activePerson: "Nguyễn Văn Tuấn"
  },
  {
    id: 1,
    contractCode: 12352657,
    moneyInvest: 100000000,
    activeDay: "12/12/2019",
    period: "3 năm",
    activePerson: "Nguyễn Văn Tuấn"
  },
  {
    id: 1,
    contractCode: 12352657,
    moneyInvest: 100000000,
    activeDay: "12/12/2019",
    period: "3 năm",
    activePerson: "Nguyễn Văn Tuấn"
  },
  {
    id: 1,
    contractCode: 12352657,
    moneyInvest: 100000000,
    activeDay: "12/12/2019",
    period: "3 năm",
    activePerson: "Nguyễn Văn Tuấn"
  },
  
];
const InvestTableList = () => {
  return (
      <div className="table-content invest-history">
        <div className="table">
          <table>
            <thead>
            <tr>
              <th>Mã hợp đồng</th>
              <th>Số tiền đầu tư</th>
              <th>Ngày kích hoạt</th>
              <th>Kỳ hạn đầu tư</th>
              <th>Người kích hoạt</th>
              </tr>
            </thead>
            <tbody>
              {tableList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="no-wrap">{item.contractCode}</td>
                    <td>{item.moneyInvest}</td>
                    <td className="no-wrap">{item.activeDay}</td>
                    <td>{item.period}</td>
                    <td>{item.activePerson}</td>
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

export default InvestTableList;

