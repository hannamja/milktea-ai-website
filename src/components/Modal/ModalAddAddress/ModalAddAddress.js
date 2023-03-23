import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, FormGroup, Grid, Modal } from "@mui/material";
import classNames from "classnames/bind";
import { FastField, Field, Form, Formik } from "formik";
import styles from "./ModalAddAddress.module.scss";
import InputMuiField from "~/components/custom-fields/InputMuiField/InputMuiField";
import SelectMuiField from "~/components/custom-fields/SelectMuiField/SelectMuiField";
import * as Yup from "yup";
const styleModal = {
  backgroundColor: "#fff",
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  width: "432px",
  borderRadius: "10px",
  padding: "20px",
};
const options = [
  { id: "1", value: "nam" },
  { id: "2", value: "nu" },
];
const initialValues = {
  fullname: "",
  phoneNumber: "",
  province: "",
  district: "",
  address: "",
  commune: "",
};
const validationShema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Họ tên tối thiểu 2 ký tự")
    .matches(/^[A-Za-z ]*$/, "Họ tên chỉ bao gồm ký tự chữ và dấu cách")
    .required("Thông tin bắt buộc "),
  province: Yup.string().required("Thông tin bắt buộc"),
  district: Yup.string().required("Thông tin bắt buộc"),
  address: Yup.string().required("Thông tin bắt buộc"),
  commune: Yup.string().required("Thông tin bắt buộc"),
  phoneNumber: Yup.string()
    .required("Thông tin bắt buộc")
    .matches(/^[0-9 ]*$/, "Số điện thoại chỉ bao gồm số"),
});
const cx = classNames.bind(styles);
function ModalAddAddress({ openModel, setOpenModel }) {
  const handleSubmit = (value) => {
    // console.log(value);
  };
  return (
    <Modal
      open={openModel}
      onClose={() => setOpenModel(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box style={styleModal} alignItems="center">
        <button
          className={cx("modal-close")}
          onClick={() => setOpenModel(false)}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        <div className={cx("modal-content")}>
          <div className={cx("modal-title")}>Thêm địa chỉ giao hàng</div>
          <div className={cx("modal-content")}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationShema}
              onSubmit={handleSubmit}
              validateOnBlur={true}
            >
              {(props) => {
                //do somthing here

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

          <div className={cx("modal-body")}></div>
        </div>
      </Box>
    </Modal>
  );
}

export default ModalAddAddress;
