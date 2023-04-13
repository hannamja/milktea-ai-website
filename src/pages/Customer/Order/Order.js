import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { SearchIcon } from "~/assets/Icons";
import { useDebounce } from "~/hooks";
import styles from "./Order.module.scss";
import { default as searchServices } from "~/services/searchService";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Order() {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef();
  const debounced = useDebounce(searchValue, 500);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  //////
  let firstBtn = useRef();
  const [choosingBtn, setChoosingBtn] = useState({
    // target: firstBtn.current,
    // id: 1,
  });

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (searchValue.startsWith(" ")) return;
    setSearchValue(searchValue);
  };
  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);

    const fetchAPI = async () => {
      setLoading(true);
      setSearchResult([]);
      const result = await searchServices(debounced);

      setSearchResult(result);
      setLoading(false);
    };
    fetchAPI();
  }, [debounced]);
  //////
  useEffect(() => {
    if (!choosingBtn.target && firstBtn.current) {
      setChoosingBtn({ target: firstBtn.current, id: 1 });
    }
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <span className={cx("title")}>Lịch sử đơn hàng</span>
        <div className={cx("search")}>
          <button
            className={cx("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon
              width="1.4rem"
              height="1.4rem"
              color={"var(--primary)"}
              className={cx("search-icon")}
            />
          </button>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Tìm kiếm theo mã đơn hàng ..."
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => {}}
          />
          {!!searchValue && !loading && (
            <button className={cx("clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />
          )}
        </div>
      </div>
      <div className={cx("menu")}>
        <button
          ref={firstBtn}
          onClick={(e) => setChoosingBtn({ target: e.target, id: 1 })}
        >
          <div
            className={cx("menu_item", {
              active: choosingBtn.id === 1,
            })}
          >
            CHỜ THANH TOÁN
          </div>
        </button>
        <button onClick={(e) => setChoosingBtn({ target: e.target, id: 2 })}>
          <div className={cx("menu_item", { active: choosingBtn.id === 2 })}>
            ĐƠN HÀNG MỚI
          </div>
        </button>
        <button onClick={(e) => setChoosingBtn({ target: e.target, id: 3 })}>
          <div className={cx("menu_item", { active: choosingBtn.id === 3 })}>
            ĐANG XỬ LÍ
          </div>
        </button>
        <button onClick={(e) => setChoosingBtn({ target: e.target, id: 4 })}>
          <div className={cx("menu_item", { active: choosingBtn.id === 4 })}>
            ĐANG GIAO
          </div>
        </button>
        <button onClick={(e) => setChoosingBtn({ target: e.target, id: 5 })}>
          <div className={cx("menu_item", { active: choosingBtn.id === 5 })}>
            HOÀN THÀNH
          </div>
        </button>
        <button onClick={(e) => setChoosingBtn({ target: e.target, id: 6 })}>
          <div className={cx("menu_item", { active: choosingBtn.id === 6 })}>
            HỦY
          </div>
        </button>
        {/* {choosingBtn && ( */}
        <div
          className={cx("slider")}
          style={{
            left: choosingBtn.target?.offsetLeft,
            width: choosingBtn.target?.offsetWidth + 20,
          }}
        ></div>
        {/* )} */}
      </div>
      <div className={cx("transaction")}>
        <div className={cx("no_product")}>Không có đơn hàng nào</div>
      </div>
    </div>
  );
}

export default Order;
