import { FormGroup, Grid, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Alert, AlertTitle } from "@mui/material"
import classNames from "classnames/bind";
import { FastField, Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { register_complete } from "~/app/userSlice";
import axios from "axios";
import * as Yup from "yup";
import InputMuiField from "~/components/custom-fields/InputMuiField/InputMuiField";
import SelectMuiField from "~/components/custom-fields/SelectMuiField/SelectMuiField";
import styles from "./Account.module.scss";
import React, { useState } from "react";
import DatePickerField from "~/components/custom-fields/DatePickerField/DatePickerField";
import { useNavigate } from "react-router-dom";
import { logout } from "~/app/userSlice";
const cx = classNames.bind(styles);
const options = [
  { id: "1", value: "nam" },
  { id: "2", value: "nu" },
];
const validationShema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Họ tên tối thiểu 2 ký tự")
    .matches(/^[A-Za-z ]*$/, "Họ tên chỉ bao gồm ký tự chữ và dấu cách")
    .required("Thông tin bắt buộc "),
  sex: Yup.string().required("Bạn chưa chọn giới tính "),
  "identity-card-number": Yup.string().matches(
    /^[0-9]+$/,
    "Số CMND/CCCD chỉ bao gồm số"
  ),
  birthday: Yup.string().required("Thông tin bắt buộc"),
  email: Yup.string()
    .email("Email không đúng định dạng")
    .required("Thông tin bắt buộc"),
  province: Yup.string().required("Thông tin bắt buộc"),
  district: Yup.string().required("Thông tin bắt buộc"),
  commune: Yup.string().required("Thông tin bắt buộc"),
  address: Yup.string().required("Thông tin bắt buộc"),
});
function Account({ token }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.current);
  var isRegister = currentUser.status
  const initialValues = {
    fullname: isRegister==='fail' ? currentUser.name:currentUser.information.name,
    phoneNumber: isRegister==='fail' ? currentUser.phoneNumber:currentUser.information.phoneNumber,
    sex: "",
    "identity-card-number": "",
    birthday: "",
    email: "",
    province: "",
    district: "",
    commune: "",
    address: "",
  };
  const handleSubmit = (value) => {
    // console.log(value);

    let data = JSON.stringify({
      "id": currentUser.information.id,
      "name": value.fullname,
      "gender": 0,
      "phone_number": value.phoneNumber,
      "dob": value.dob,
      "active": 1
    });

    let config = {
      method: 'put',
      url: 'https://backendwebtrasualaravel-production-6fb6.up.railway.app/api/admin/customers/'+currentUser.information.id,
      headers: {
        'Authorization': 'Bearer 0'+currentUser.token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setAlert(true)
        setTimeout(() => setAlert(false), 2000)
      })
      .catch(function (error) {
        setE(true)
        setTimeout(() => setE(false), 2000)
      });
  };

  const [alert, setAlert] = useState(false)
  const [e, setE] = useState(false)
  const handleRegister = (values) => {
    let data = JSON.stringify({
      "name": values.fullname,
      "gender": 0,
      "phone_number": currentUser.phone_number,
      "dob": values.birthday,
      "active": 1
    });

    let config = {
      method: 'post',
      url: 'https://backendwebtrasualaravel-production-6fb6.up.railway.app/api/add-new-customer',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setAlert(true)
        dispatch(logout());
        navigate('/')
        setTimeout(() => setAlert(false), 2000)
      })
      .catch(function (error) {
        setE(true)
        setTimeout(() => setE(false), 2000)
      });
  }
  return (
    <div className={cx("wrapper")}>
      <div className={alert ? cx("alert-shown") : cx("alert-hidden")}>
        <Alert severity="success">
          <AlertTitle>Thành công</AlertTitle>
          Thêm thông tin thành công
        </Alert>
      </div>
      <div className={e ? cx("e-shown") : cx("e-hidden")}>
        <Alert severity="error">
          <AlertTitle>Lỗi</AlertTitle>
          Thêm thông tin không thành công
        </Alert>
      </div>
      <div style={{ display: isRegister ? 'none' : 'block', textAlign: 'center', fontWeight: 'bolder' }}>
        Bạn chưa có tài khoản, vui lòng đăng ký!
      </div>
      <div className={cx("title")}>Thông tin cá nhân</div>
      <div className={cx("body")}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationShema}
          onSubmit={isRegister==='fail' ? handleRegister : handleSubmit}
          validateOnBlur={true}
        >
          {(props) => {
            //do somthing here
            // console.log(props);
            return (
              <>
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <FastField
                          name="fullname"
                          component={InputMuiField}
                          label="Họ & tên"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <Field
                          name="phoneNumber"
                          component={InputMuiField}
                          label="Số điện thoại"
                          disabled
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <Field
                          name="sex"
                          component={SelectMuiField}
                          id="id"
                          value="value"
                          initId=""
                          label="Giới tính"
                          options={options}
                          nooptionstext="Không tìm thấy bản ghi nào!"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <Field
                          name="identity-card-number"
                          component={InputMuiField}
                          label="Số CMND/CCCD"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <Field
                            name="birthday"
                            component={DatePickerField}
                            label="Ngày sinh"
                            inputFormat="DD/MM/YYYY"
                          />
                        </LocalizationProvider>
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <Field
                          name="email"
                          component={InputMuiField}
                          label="Email"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <Field
                          name="province"
                          component={SelectMuiField}
                          id="id"
                          value="value"
                          initId=""
                          label="Tỉnh/Thành phố"
                          options={options}
                          nooptionstext="Không tìm thấy bản ghi nào!"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <Field
                          name="district"
                          component={SelectMuiField}
                          id="id"
                          value="value"
                          initId=""
                          label="Quận/Huyện"
                          options={options}
                          nooptionstext="Không tìm thấy bản ghi nào!"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <Field
                          name="commune"
                          component={SelectMuiField}
                          id="id"
                          value="value"
                          initId=""
                          label="Phường/Xã"
                          options={options}
                          nooptionstext="Không tìm thấy bản ghi nào!"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <Field
                          name="address"
                          component={InputMuiField}
                          label="Địa chỉ"
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>
                  <button type="submit" className={cx("btn-submit")}>
                    Lưu thay đổi
                  </button>
                </Form>
              </>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default Account;
