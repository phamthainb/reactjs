import React from "react";
import PaginationTable from "../../../bases/shared/paginationTable";

const tableList = [
  {
    id: 1,
    receiveFrom: "Nguyễn Văn Hùng",
    investPackage: "1 năm",
    bonusBrokerage: "2%",
    receiveMoney: 1000000,
  },
  {
    id: 1,
    receiveFrom: "Nguyễn Văn Hùng",
    investPackage: "1 năm",
    bonusBrokerage: "2%",
    receiveMoney: 1000000,
  },
  {
    id: 1,
    receiveFrom: "Nguyễn Văn Hùng",
    investPackage: "1 năm",
    bonusBrokerage: "2%",
    receiveMoney: 1000000,
  },
  {
    id: 1,
    receiveFrom: "Nguyễn Văn Hùng",
    investPackage: "1 năm",
    bonusBrokerage: "2%",
    receiveMoney: 1000000,
  },
  {
    id: 1,
    receiveFrom: "Nguyễn Văn Hùng",
    investPackage: "1 năm",
    bonusBrokerage: "2%",
    receiveMoney: 1000000,
  },
  {
    id: 1,
    receiveFrom: "Nguyễn Văn Hùng",
    investPackage: "1 năm",
    bonusBrokerage: "2%",
    receiveMoney: 1000000,
  },
  {
    id: 1,
    receiveFrom: "Nguyễn Văn Hùng",
    investPackage: "1 năm",
    bonusBrokerage: "2%",
    receiveMoney: 1000000,
  },
  {
    id: 1,
    receiveFrom: "Nguyễn Văn Hùng",
    investPackage: "1 năm",
    bonusBrokerage: "2%",
    receiveMoney: 1000000,
  },
  {
    id: 1,
    receiveFrom: "Nguyễn Văn Hùng",
    investPackage: "1 năm",
    bonusBrokerage: "2%",
    receiveMoney: 1000000,
  },
  {
    id: 1,
    receiveFrom: "Nguyễn Văn Hùng",
    investPackage: "1 năm",
    bonusBrokerage: "2%",
    receiveMoney: 1000000,
  },
  {
    id: 1,
    receiveFrom: "Nguyễn Văn Hùng",
    investPackage: "1 năm",
    bonusBrokerage: "2%",
    receiveMoney: 1000000,
  },
  {
    id: 1,
    receiveFrom: "Nguyễn Văn Hùng",
    investPackage: "1 năm",
    bonusBrokerage: "2%",
    receiveMoney: 1000000,
  },
];
const BonusTableList = () => {
  return (
      <div className="table-content bonus-history">
        <div className="table">
          <table>
            <thead>
            <tr>
              <th>Hướng từ <br /> người đầu tư</th>
              <th>Gói đầu tư</th>
              <th>Hoa hồng môi giới</th>
              <th>Tiền thưởng</th>
              </tr>
            </thead>
            <tbody>
              {tableList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="no-wrap">{item.receiveFrom}</td>
                    <td>{item.investPackage}</td>
                    <td className="no-wrap">{item.bonusBrokerage}</td>
                    <td>{item.receiveMoney}</td>
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

export default BonusTableList;

