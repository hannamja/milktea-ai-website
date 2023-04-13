import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Modal } from "@mui/material";
import classNames from "classnames/bind";
import styles from "./ModalCoupon.module.scss";
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
function ModalCoupon({ openModel, setOpenModel }) {
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
          <div className={cx("modal-title")}>Nhập mã giảm giá</div>

          <div className={cx("modal-body")}>
            <input
              type="text"
              className={cx("modal-input")}
              placeholder="MÃ GIẢM GIÁ"
            />
            <div className="modal-btn">
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  backgroundColor: "var(--primary)",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  marginBottom: "10px",
                  "&: hover": {
                    opacity: 0.9,
                    backgroundColor: "var(--primary)",
                  },
                }}
              >
                ÁP DỤNG
              </Button>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default ModalCoupon;
