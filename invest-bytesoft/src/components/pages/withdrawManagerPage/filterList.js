import React, { useState } from "react";
import Select from 'react-select';
import DatePicker from "react-date-picker";




const option1 = [
    { value: 1, label: 'Giám sát kinh doanh' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const option2 = [
    { value: 1, label: 'Danh sách hiển thị' },
    { value: '2', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


const FilterList = () => {
  const [name, setName] = useState("");
  const [processPerson, setProcessPerson] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [list, setList] = useState(1);
  const onStartDateChange = date => {
    setStartDate(date);
  };
  const onEndDateChange = date => {
    setEndDate(date);
  };
 const onSubmit = () => {
   console.log(name, processPerson,startDate, endDate, list)
 }
  return (
    <div className="search-content liquidation-content">
      <div className="bs-row row-sm-10">
        <div className="bs-col sm-20-10">
          <div className="item">
            <label htmlFor="">Mã hợp đồng</label>
            <input type="text" className="search__input" placeholder="" name="name" onChange={(e) => setName(e.target.value)}/>
          </div>
        </div>
        <div className="bs-col sm-20-10">
          <div className="item">
            <label htmlFor="">Người xử lý</label>
            <Select options={option1} name="processPerson"  value={option1.filter(option => option.value === processPerson)} onChange={ (newValue) => setProcessPerson(newValue.value)}/>
          </div>
        </div>
        <div className="bs-col sm-20-10">
            <div className="item">
            <label htmlFor="">Từ ngày</label>
              <DatePicker onChange={onStartDateChange} value={startDate} />
            </div>
          </div>
          <div className="bs-col sm-20-10">
            <div className="item">
            <label htmlFor="">Đến ngày</label>
              <DatePicker onChange={onEndDateChange} value={endDate} />
            </div>
          </div>
        <div className="bs-col sm-20-10">
          <div className="item">
            <label htmlFor="">Hiển thị</label>
            <Select options={option2} name="list"  value={option2.filter(option => option.value === list)} onChange={ (newValue) => setList(newValue.value)}/>
          </div>
        </div>
      </div>
      <button className="search__btn" type="button" onClick={ onSubmit }>Lọc</button>
    </div>
  );
};

export default FilterList;

