import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { default as searchServices } from "~/services/searchService";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useDebounce } from "~/hooks";
import { Wrapper as PoperWrapper } from "~/components/Popper";
import styles from "./Search.module.scss";
import HeadlessTippy from "@tippyjs/react/headless";
import { SearchIcon } from "~/assets/Icons";
import BavarageItem from "./BavarageItem/BavarageItem";
import BavarageItemLoading from "./BavarageItemLoading/BavarageItemLoading";
import { searchMood } from "~/services/searchService";
const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const debounced = useDebounce(searchValue, 500);

  const [searchValue1, setSearchValue1] = useState("");
  const [searchResult1, setSearchResult1] = useState([]);
  const [showResult1, setShowResult1] = useState(true);
  const [loading1, setLoading1] = useState(false);
  const [mood, setMood] = useState()
  const inputRef1 = useRef();
  const debounced1 = useDebounce(searchValue1, 500);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    const abortController = new AbortController();
    const { signal } = abortController;
    const fetchAPI = async () => {
      setLoading(true);
      setSearchResult([]);
      const result = await searchServices(debounced, signal);

      setSearchResult(result);
      setLoading(false);
    };
    fetchAPI();
  }, [debounced]);
  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (searchValue.startsWith(" ")) return;
    setSearchValue(searchValue);
  };

  useEffect(() => {
    if (!debounced1.trim()) {
      setSearchResult1([]);
      return;
    }
    setLoading1(true);

    const fetchAPI1 = async () => {
      setLoading1(true);
      setSearchResult1([]);
      const result = await searchMood(searchValue1);
      setMood(result)

      setSearchResult1(result.list.special)
      console.log(result.list.special)
      setLoading1(false);
    };
    fetchAPI1();
  }, [debounced1]);
  const handleClear1 = () => {
    setSearchValue1("");
    setSearchResult1([]);
    inputRef1.current.focus();
  };
  const handleHideResult1 = () => {
    setShowResult1(false);
  };
  const handleChange1 = (e) => {
    const searchValue1 = e.target.value;
    if (searchValue1.startsWith(" ")) return;
    setSearchValue1(searchValue1);
  };
  useEffect(() => {
    setMood(undefined);
  }, [searchValue1])
  return (
    <div>
      <div className={cx("searchbar")}>
        {/* the div on top to delete tippy warning */}
        <HeadlessTippy
          visible={(showResult && searchResult.length > 0) || loading}
          interactive
          onClickOutside={handleHideResult}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PoperWrapper>
                <div className={cx("bavarage-label")}>Kết quả tìm kiếm:</div>
                <div className={cx("reasult_wrapp")}>
                  {searchResult.map((result) => (
                    <BavarageItem key={result.data.id} data={result.data} />
                  ))}
                  {loading && (
                    <div style={{ marginBottom: "20px" }}>
                      <BavarageItemLoading />
                      <BavarageItemLoading />
                      <BavarageItemLoading />
                      <BavarageItemLoading />
                      <BavarageItemLoading />
                    </div>
                  )}
                </div>
              </PoperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <button
              className={cx("search-btn")}
              onMouseDown={(e) => e.preventDefault()}
            >
              <SearchIcon width="1rem" className={cx("search-icon")} />
            </button>
            <input
              ref={inputRef}
              value={searchValue}
              placeholder="Bạn muốn mua gì ..."
              spellCheck={false}
              onChange={handleChange}
              onFocus={(e) => setShowResult(true)}
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
          {/* loadding */}
        </HeadlessTippy>
        <span className={cx("spanf4m")}>Food for mood</span>
        <HeadlessTippy
          visible={(showResult1 && searchResult1.length > 0) || loading1}
          interactive
          onClickOutside={handleHideResult1}
          render={(attrs) => (
            <div className={cx("search-result1")} tabIndex="-1" {...attrs}>
              <PoperWrapper>
                <div className={cx("bavarage-label1")}> {mood === undefined || searchValue1 === "" ? 'Siêu máy tính đang dự đoán tâm trạng của bạn và tìm đồ uống thích hợp...' : "Chúng tôi đoán rằng bạn đang cảm thấy '" + mood.mood + "', hãy thử những thức uống sau đây:"} </div>
                <div className={cx("reasult_wrapp1")}>
                  {searchResult1.map((result) => (
                    <BavarageItem key={result.id} data={result} />
                  ))}
                  {loading1 && (
                    <div style={{ marginBottom: "20px" }}>
                      <BavarageItemLoading />
                      <BavarageItemLoading />
                      <BavarageItemLoading />
                      <BavarageItemLoading />
                      <BavarageItemLoading />
                    </div>
                  )}
                </div>
              </PoperWrapper>
            </div>
          )}
        >
          <div className={cx("search1")}>
            <button
              className={cx("search-btn1")}
              onMouseDown={(e) => e.preventDefault()}
            >
              <SearchIcon width="1rem" className={cx("search-icon1")} />
            </button>
            <input
              ref={inputRef1}
              value={searchValue1}
              placeholder="Food for mood ..."
              spellCheck={false}
              onChange={handleChange1}
              onFocus={(e) => setShowResult1(true)}
            />
            {!!searchValue1 && !loading1 && (
              <button className={cx("clear1")} onClick={handleClear1}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            )}
            {loading && (
              <FontAwesomeIcon icon={faSpinner} className={cx("loading1")} />
            )}
          </div>
          {/* loadding */}
        </HeadlessTippy>
      </div>
    </div>
  );
}

export default Search;
