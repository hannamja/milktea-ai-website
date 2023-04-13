import { Grid } from "@mui/material";
import classNames from "classnames/bind";
import { useCallback, useState } from "react";
import ModalAddAddress from "~/components/Modal/ModalAddAddress/ModalAddAddress";
import styles from "./AddressBook.module.scss";
import AddressBookItem from "./AddressBookItem/AddressBookItem";
const cx = classNames.bind(styles);

function AddressBook() {
  const [openModel, setOpenModel] = useState(false);

  const handleAddAddress = useCallback((e) => {
    setOpenModel(true);
  }, []);
  return (
    <>
      <div className={cx("wrapper")}>
        <div>
          <div>
            Bạn có <strong> 2 địa chỉ</strong>{" "}
          </div>

          <button onClick={handleAddAddress}>
            <div className={cx("add_adress_btn")}>Thêm địa chỉ mới</div>
          </button>
        </div>
        <div className={cx("container")}>
          <Grid container spacing={2}>
            <Grid item md={6} sm={12}>
              <AddressBookItem />
            </Grid>
            <Grid item md={6} sm={12}>
              <AddressBookItem />
            </Grid>
          </Grid>
        </div>
      </div>
      <ModalAddAddress openModel={openModel} setOpenModel={setOpenModel} />
    </>
  );
}

export default AddressBook;
