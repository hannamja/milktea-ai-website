import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Box, Modal } from "@mui/material";
import classNames from "classnames/bind";
import { useState } from "react";
import logoList from "~/assets/images/logo";
import FormForgetPass from "./FormForgetPass/FormForgetPass";
import FormPassWord from "./FormPassWord/FormPassWord";
import FormPhone from "./FormPhone/FormPhone";
import styles from "./ModalSigin.module.scss";
import { ArrowLeft } from "~/assets/Icons/BodyIcon";
const styleModal = {
  backgroundColor: "#fff",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  width: "328px",
  borderRadius: "10px",
};
const cx = classNames.bind(styles);

function ModalSignin({ openModel, setOpenModel }) {
  const [form, setForm] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOTP] = useState()
  const handleBack = () => {
    setForm(1);
  };
  return (
    <Modal
      open={openModel}
      onClose={(e, reason) => {
        if (reason && reason === "backdropClick") return;
        setOpenModel(false);
        setForm(1);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box style={styleModal} alignItems="center">
        {form !== 1 && (
          <button className={cx("back-btn")} onClick={handleBack}>
            <ArrowLeft width="25px" height="25px" />
          </button>
        )}
        <div className={cx("modal-logo")}>
          <Avatar
            src={logoList.logo1}
            alt="logo"
            sx={{
              bgcolor: "#fff",
              border: "1px solid var(--border-color)",
              width: "84px",
              height: "84px",
            }}
          />
        </div>
        <button
          className={cx("modal-close")}
          onClick={() => {
            setOpenModel(false);
            setForm(1);
          }}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        <div className={cx("modal-content")}>
          <div className={cx("modal-body")}>
            {form === 1 && (
              <FormPhone setForm={setForm} setPhoneNumber={setPhoneNumber} setOTP={setOTP} />
            )}
            {form === 2 && (
              <FormPassWord
                setForm={setForm}
                phoneNumber={phoneNumber}
                otp={otp}
                setOpenModel={setOpenModel}
              />
            )}
            {form === 3 && (
              <FormForgetPass setForm={setForm} phoneNumber={phoneNumber} />
            )}
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default ModalSignin;
