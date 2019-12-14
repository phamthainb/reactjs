import React, { useState, useRef, useEffect } from "react";
import useForm from 'react-hook-form';
import * as yup from "yup";

const EditForm = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  invest: yup.boolean().default(() => true).required(),
  contract: yup.boolean().default(() => false).required(),
  investProcess: yup.boolean().default(() => false).required(),
  liquidationProcess: yup.boolean().default(() => false).required(),
  statisticalProcess: yup.boolean().default(() => false).required(),
});

const EditModal = ({ closeModal }) => {

  const [triggerList, setTriggerList] = useState(false);
  let formData;

  const { register, errors, handleSubmit, setValue, getValues } = useForm({
    mode: "onChange",
    validationSchema: EditForm
  });

  const onCancel = () => {
    closeModal();
  }
  const onSubmit = (data) => {
    console.log("edit modal", data);

    const list = { ...data };
    delete list.email; delete list.name;

    if (!triggerListValidate()) {
      formData = {
        name: data.name,
        email: data.email,
        listAccess: list
      }
      console.log(formData);
      closeModal();
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

  // console.log("render edit modal");

  return (
    <div className="edit-modal">
      <div className="head">
        <p className="title">Chỉnh sửa</p>
      </div>
      <div className="content">
        <div className="edit-content">
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
                    {errors.email && <p style={{ color: "red" }} >{errors.email.message}</p>}
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
                    {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                  </div>
                </div>
                <div className="bs-col sm-100-15">
                  <div className="item">
                    <label htmlFor="" className="special">Quyền hạn</label>
                    <div className="checkbox-list" name="list" ref={register}>

                      <input type="checkbox" id="invest-modal" name="invest" onChange={() => triggerListValidate()} ref={register({
                        required: {
                          message: "aaaa"
                        }
                      })} />
                      <label htmlFor="invest-modal" >Danh sách đầu tư</label>

                      <input onChange={() => triggerListValidate()} type="checkbox" id="contract-modal" name="contract" ref={register({
                        required: {
                          message: "aaaa"
                        }
                      })} />
                      <label htmlFor="contract-modal">Danh sách hợp đồng</label>

                      <input onChange={() => triggerListValidate()} type="checkbox" id="investProcess-modal" name="investProcess" ref={register({
                        required: {
                          message: "aaaa"
                        }
                      })} />
                      <label htmlFor="investProcess-modal">Xử lý đầu tư</label>

                      <input onChange={() => triggerListValidate()} type="checkbox" id="liquidationProcess-modal" name="liquidationProcess" ref={register({
                        required: {
                          message: "aaaa"
                        }
                      })} />
                      <label htmlFor="liquidationProcess-modal">Xử lý thanh lý</label>

                      <input onChange={() => triggerListValidate()} type="checkbox" id="statisticalProcess-modal" name="statisticalProcess" ref={register({
                        required: {
                          message: "aaaa"
                        }
                      })} />
                      <label htmlFor="statisticalProcess-modal">Xử lý thống kê</label>

                    </div>
                    {triggerList && <p style={{ color: "red" }}>Chọn ít nhất một trường</p>}
                  </div>
                </div>
              </div>
              <div className="bottom">
                <button className="bottom__btn green__btn" type="submit" onSubmit={() => {
                  onSubmit()
                }}> Chỉnh sửa </button>
                <button className="bottom__btn red__btn" type="button" onClick={onCancel}>Hủy</button>
              </div>
            </form>
          </div> </div>
      </div>

    </div>
  );
};

export default EditModal;
