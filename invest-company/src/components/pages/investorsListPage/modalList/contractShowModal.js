import React from "react";
import PaginationTable from "./../../../bases/shared/paginationTable.js";

const details = {
  id: 1,
  name: "nguyễn văn a",
  idCard: 1246567567,
  phoneNumber: "000-000-000",
  email: "afdfd@getMaxListeners.com",
  address: "21 Lê Đức Thọ, Mỹ Đình 2, Nam Từ Liêm, Hà Nội",
  contractList: [
    {
      contractCode: 121323454,
      investMoney: 100000000,
      period: "2 năm",
      startDate: "21/01/2019",
      endDate: "21/01/2021"
    },
    {
        contractCode: 121323454,
        investMoney: 100000000,
        period: "2 năm",
        startDate: "21/01/2019",
        endDate: "21/01/2021"
      },
      {
        contractCode: 121323454,
        investMoney: 100000000,
        period: "2 năm",
        startDate: "21/01/2019",
        endDate: "21/01/2021"
      },{
        contractCode: 121323454,
        investMoney: 100000000,
        period: "2 năm",
        startDate: "21/01/2019",
        endDate: "21/01/2021"
      },
      {
        contractCode: 121323454,
        investMoney: 100000000,
        period: "2 năm",
        startDate: "21/01/2019",
        endDate: "21/01/2021"
      },
      {
        contractCode: 121323454,
        investMoney: 100000000,
        period: "2 năm",
        startDate: "21/01/2019",
        endDate: "21/01/2021"
      }
  ]
};
const SendSmsModal = () => {
  return (
    <div className="show-contract">
      <div className="head">
        <p className="title">Chi tiết hợp đồng</p>
      </div>
      <div className="content">
      <div className="info-content">
      <div className="bs-row row-xs-10">
      <div className="bs-col xs-33-10">
        <div className="item">
          <p className="label">Nhà đầu tư</p>
          <p className="value">{details.name}</p>
        </div>
      </div>
      <div className="bs-col xs-33-10">
        <div className="item">
          <p className="label">CMND</p>
          <p className="value">{details.idCard}</p>
        </div>
      </div>
      <div className="bs-col xs-33-10">
        <div className="item">
          <p className="label">Điện thoại</p>
          <p className="value">{details.phoneNumber}</p>
        </div>
      </div>
      <div className="bs-col xs-33-10">
        <div className="item">
          <p className="label">Email</p>
          <p className="value">{details.email}</p>
        </div>
      </div>
      <div className="bs-col xs-66-10">
        <div className="item">
          <p className="label">Điạ chỉ</p>
          <p className="value">
            {details.address}
          </p>
        </div>
      </div>
    </div>
      </div>
        

        <div className="table-content">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Mã hợp đồng</th>
                  <th>Tiền đầu tư</th>
                  <th>Kỳ hạn</th>
                  <th>Kích hoạt</th>
                  <th>Hết kỳ hạn</th>
                </tr>
              </thead>
              <tbody>
                {
                    details.contractList.map((item, index) => {
                        return (
                            <tr key={index}>
                            <td>{item.contractCode}</td>
                            <td>{item.investMoney}</td>
                            <td>{item.period}</td>
                            <td>{item.startDate}</td>
                            <td>{item.endDate}</td>
                          </tr>
                        )
                    })
                }
              </tbody>
            </table>
          </div>
        </div>
        <PaginationTable />
      </div>
    </div>
  );
};

export default SendSmsModal;
