import React, { useState, useRef, useEffect } from "react";
import useForm from 'react-hook-form';
import * as yup from "yup";


const CreateForm = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  invest: yup.boolean().default(() => false).required(),
  contract: yup.boolean().default(() => false).required(),
  investProcess: yup.boolean().default(() => false).required(),
  liquidationProcess: yup.boolean().default(() => false).required(),
  statisticalProcess: yup.boolean().default(() => false).required(),
});

const FilterList = () => { 
  
  const [triggerList, setTriggerList] = useState(false);
  let formData;
  const { register, errors, handleSubmit, setValue, getValues } = useForm({
    mode: "onChange",
    validationSchema: CreateForm
  });


  const onSubmit = (data) => {
    const list = { ...data };
    delete list.email; delete list.name;
    if (!triggerListValidate()) {
      formData = {
        name: data.name,
        email: data.email,
        listAccess: list
      }
      console.log(formData);
    }
  }

  const triggerListValidate = () => {
    const dataCurrent = Object.values(getValues());
    let shouldTrigger = true;
    dataCurrent.map(item => {
      if (item === true) shouldTrigger = false;
    })

    if (shouldTrigger) {
      setTriggerList(true);
      return true
    } else {
      setTriggerList(false);
      return false
    }
  }
  return (
    <div className="create-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bs-row row-sm-15">
          <div className="bs-col sm-50-15">
            <div className="item">
              <label >Email đăng nhập</label>
              <input className="search__input"
                name="email"
                type="email"
                ref={register({
                  required: "email vaild"
                })}
              />
              {errors.email && <p style={{ color: "red" }} >Nhập lại Email</p>}
            </div>
          </div>
          <div className="bs-col sm-50-15">
            <div className="item">
              <label >Tên nhân viên</label>
              <input className="search__input"
                name="name"
                type="text"
                ref={register({
                  required: "name valid"
                })}
              />
              {errors.name && <p style={{ color: "red" }}>Nhập lại Tên</p>}
            </div>
          </div>
          <div className="bs-col sm-100-15">
            <div className="item">
              <label htmlFor="" className="special">Quyền hạn</label>
              <div className="checkbox-list" name="list" ref={register}>

                <input type="checkbox" id="invest" name="invest" onChange={() => triggerListValidate()} ref={register({
                  required: {
                    message: "checkbox"
                  }
                })} />
                <label htmlFor="invest" >Danh sách đầu tư</label>

                <input onChange={() => triggerListValidate()} type="checkbox" id="contract" name="contract" ref={register({
                  required: {
                    message: "checkbox"
                  }
                })} />
                <label htmlFor="contract">Danh sách hợp đồng</label>

                <input onChange={() => triggerListValidate()} type="checkbox" id="investProcess" name="investProcess" ref={register({
                  required: {
                    message: "checkbox"
                  }
                })} />
                <label htmlFor="investProcess">Xử lý đầu tư</label>

                <input onChange={() => triggerListValidate()} type="checkbox" id="liquidationProcess" name="liquidationProcess" ref={register({
                  required: {
                    message: "checkbox"
                  }
                })} />
                <label htmlFor="liquidationProcess">Xử lý thanh lý</label>

                <input onChange={() => triggerListValidate()} type="checkbox" id="statisticalProcess" name="statisticalProcess" ref={register({
                  required: {
                    message: "checkbox"
                  }
                })} />
                <label htmlFor="statisticalProcess">Xử lý thống kê</label>

              </div>
              {triggerList && <p style={{ color: "red" }}>Chọn ít nhất một trường</p>}
            </div>
          </div>
        </div>
        <button className="create__btn" type="submit" onSubmit={() => {
          onSubmit()
        }}>Khởi tạo tài khoản</button>
      </form>
    </div>
  );
};

export default FilterList;


