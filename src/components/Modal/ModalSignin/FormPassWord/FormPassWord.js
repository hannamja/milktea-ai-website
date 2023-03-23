import { FormGroup } from "@mui/material";
import { unwrapResult } from "@reduxjs/toolkit";
import classNames from "classnames/bind";
import { FastField, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginUser } from "~/app/userSlice";
import InputField from "~/components/custom-fields/InputField";
import styles from "./FormPassWord.module.scss";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function FormPassWord({ setForm, phoneNumber, setOpenModel, otp }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validationShema = Yup.object().shape({
    password: Yup.string().required("Thông tin bắt buộc"),
  });
  const handleSubmit = async (values) => {
    try {
      if (otp.fakeOTP != values.password) {
        setOpenModel(false);
      }
      else {
        const actionResult = await dispatch(
          loginUser({ result: 'true', phone_number: phoneNumber })
        );
        const loggedUser = unwrapResult(actionResult);
        console.log({ loggedUser });

        setOpenModel(false);
        if (loggedUser.status === 'fail') navigate('/customer/register')
      }
    } catch (e) {
      // console.log("dang nhap that bai !! ", e);
    }
    return;
  };
  const handleForgetPass = () => {
    setForm(3);
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
        const { isSubmitting } = formikProps;
        return (
          <Form>
            <div className={cx("modal-title")}>Phúc long xin chào</div>
            <div className={cx("modal-sub-title")}>
              Đăng nhập cho số điện thoại
            </div>
            <div className={cx("sdt-label")}>{phoneNumber}</div>
            <FastField // thằng này ko render lại khi cả components re-render
              name="password"
              component={InputField}
              placeholder="Nhập OTP nhận được"
              type="password"
              autoFocus={true}
            />
            <FormGroup>
              <button
                type="submit"
                className={cx("btn-submit")}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Đang đăng nhập..." : "ĐĂNG NHẬP"}
              </button>
            </FormGroup>
            <FormGroup>
              <button
                type="submit"
                className={cx("btn-forget-password")}
                onClick={handleForgetPass}
              >
                Gửi lại OTP
              </button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormPassWord;
