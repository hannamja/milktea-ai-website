import { FormGroup } from "@mui/material";
import classNames from "classnames/bind";
import { Form, Formik } from "formik";
import { useState } from "react";
import OtpInput from "react-otp-input";
import * as Yup from "yup";
import styles from "./FormForgetPass.module.scss";
const cx = classNames.bind(styles);

function FormForgetPass({ setForm, phoneNumber }) {
  const [otp, setOtp] = useState("");
  const validationShema = Yup.object().shape({
    password: Yup.string().required("Thông tin bắt buộc"),
  });
  const handleSubmit = (values) => {
    //call api here
    // console.log(phoneNumber, values.password);

    return;
  };
  const handleOtpChange = (otp) => {
    setOtp(otp);
  };
  return (
    <Formik
      initialValues={{ password: "" }}
      validationSchema={validationShema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        //do somthing here
        // console.log(values, errors, touched);
        return (
          <>
            <Form>
              <div className={cx("modal-title")}>Phục hồi mật khẩu</div>
              <div className={cx("modal-sub-title")}>
                Nhập mã kích hoạt đã gửi đến số điện thoại
              </div>
              <div className={cx("sdt-label")}>{phoneNumber}</div>
              <div className={cx("otp-inputs")}>
                <OtpInput
                  containerStyle={{
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                  value={otp}
                  inputStyle={cx("input")}
                  onChange={handleOtpChange}
                  numInputs={6}
                  shouldAutoFocus={true}
                  focusStyle={cx("input-focused")}
                  isInputNum={true}
                />
              </div>
              <FormGroup>
                <button
                  disabled={otp.length !== 6}
                  type="submit"
                  className={cx("btn-submit")}
                  onClick={() => {
                    // console.log(otp);
                  }}
                >
                  XÁC NHẬN
                </button>
              </FormGroup>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

export default FormForgetPass;
