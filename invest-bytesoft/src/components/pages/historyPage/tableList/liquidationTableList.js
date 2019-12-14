import React from "react";
import PaginationTable from "../../../bases/shared/paginationTable";

const tableList = [
  {
    id: 1,
    contractCode: 12352657,
    moneyInvest: 100000000,
    moneyReceive: 10000000,
    dayLiquidation: "12/12/2019",
    typeLiquidation: "Trước hạn",
    personLiquidation: "Nguyễn Văn Tuấn"
  },
  {
    id: 1,
    contractCode: 12352657,
    moneyInvest: 100000000,
    moneyReceive: 10000000,
    dayLiquidation: "12/12/2019",
    typeLiquidation: "Trước hạn",
    personLiquidation: "Nguyễn Văn Tuấn"
  },
  {
    id: 1,
    contractCode: 12352657,
    moneyInvest: 100000000,
    moneyReceive: 10000000,
    dayLiquidation: "12/12/2019",
    typeLiquidation: "Trước hạn",
    personLiquidation: "Nguyễn Văn Tuấn"
  },
  {
    id: 1,
    contractCode: 12352657,
    moneyInvest: 100000000,
    moneyReceive: 10000000,
    dayLiquidation: "12/12/2019",
    typeLiquidation: "Trước hạn",
    personLiquidation: "Nguyễn Văn Tuấn"
  },
  {
    id: 1,
    contractCode: 12352657,
    moneyInvest: 100000000,
    moneyReceive: 10000000,
    dayLiquidation: "12/12/2019",
    typeLiquidation: "Trước hạn",
    personLiquidation: "Nguyễn Văn Tuấn"
  },
  {
    id: 1,
    contractCode: 12352657,
    moneyInvest: 100000000,
    moneyReceive: 10000000,
    dayLiquidation: "12/12/2019",
    typeLiquidation: "Trước hạn",
    personLiquidation: "Nguyễn Văn Tuấn"
  },
  {
    id: 1,
    contractCode: 12352657,
    moneyInvest: 100000000,
    moneyReceive: 10000000,
    dayLiquidation: "12/12/2019",
    typeLiquidation: "Trước hạn",
    personLiquidation: "Nguyễn Văn Tuấn"
  },
];
const LiquidationTableList = () => {
  return (
      <div className="table-content liquidation-history">
        <div className="table">
          <table>
            <thead>
            <tr>
              <th>Mã hợp đồng</th>
              <th>Số tiền đầu tư</th>
              <th>Số tiền nhận về</th>
              <th>Ngày thanh lý</th>
              <th>Kiểu thanh lý</th>
              <th>Người thanh lý</th>
              </tr>
            </thead>
            <tbody>
              {tableList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="no-wrap">{item.contractCode}</td>
                    <td>{item.moneyInvest}</td>
                    <td>{item.moneyReceive}</td>
                    <td className="no-wrap">{item.dayLiquidation}</td>
                    <td>{item.typeLiquidation}</td>
                    <td>{item.personLiquidation}</td>
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

export default LiquidationTableList;

