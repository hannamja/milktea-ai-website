import { FormGroup } from "@mui/material";
import classNames from "classnames/bind";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "~/components/custom-fields/InputField";
import styles from "./FormPhone.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);
function FormPhone({ setForm, setPhoneNumber, setOTP }) {
  const navigate = useNavigate()
  
  const validationShema = Yup.object().shape({
    sdt: Yup.string()
      .required("Thông tin bắt buộc")
      .test(
        "len",
        "Số điện thoại không đúng. Vui lòng nhập lại",
        (val) => !isNaN(val) && val.length === 10
      ),
  });
  const handleSubmit = async (values) => {
    let data = await fetch('https://backendwebtrasualaravel-production-6fb6.up.railway.app/api/login-customer', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',

        // 'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRF-TOKEN': '{{csrf_token()}}'
      },
      body: JSON.stringify({ phone_number: values.sdt }) // body data type must match "Content-Type" header
    })
    data = await data.json()
    console.log(data)
    setOTP(data)
    setForm(2);
    setPhoneNumber(values.sdt);
  };
  return (
    <Formik
      initialValues={{ sdt: "" }}
      validationSchema={validationShema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        //do somthing here
        // console.log(values, errors, touched);
        return (
          <Form>
            <div className={cx("modal-title")}>Phúc long xin chào</div>
            <div className={cx("modal-sub-title")}>Đăng nhập</div>
            <FastField // thằng này ko render lại khi cả components re-render
              name="sdt"
              component={InputField}
              placeholder="Nhập số điện thoại*"
            />
            <FormGroup>
              <button type="submit" className={cx("btn-submit")}>
                ĐĂNG NHẬP
              </button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormPhone;
