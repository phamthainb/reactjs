import React, { useState } from "react";
import Select from 'react-select'



  const option2 = [
    { value: 1, label: 'Danh sách hiển thị' },
    { value: '2', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


const FilterList = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(1);
 const onSubmit = () => {
   console.log(name, list)
 }
  return (
    <div className="search-content invest-search">
      <div className="bs-row row-sm-10">
        <div className="bs-col sm-60-10">
          <div className="item">
            <label htmlFor="">Mã hợp đồng/Tên nhà đầu tư</label>
            <input type="text" className="search__input" placeholder="" name="name" onChange={(e) => setName(e.target.value)}/>
          </div>
        </div>
        <div className="bs-col sm-40-10">
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

