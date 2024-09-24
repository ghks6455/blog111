import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import style from "./Header.module.css";
export default function Header({ data, setData, showCard, setShowCard, children }) {
  return (
    <>
      <header>
        <div className={style.top}>
          <h1>velog</h1>
          <button onClick={() => setShowCard((prev) => !prev)}>{showCard ? "글작성" : "메인으로"}</button>
        </div>
        <div className={style.btn}>
          <a href="#">
            <div className={data === "trending" ? "_active_10o01_15" : "_none_10o01_1"} onClick={() => setData("trending")}>
              <FontAwesomeIcon icon={faArrowTrendUp} /> 트렌딩
            </div>
          </a>
          <a href="#">
            <div className={data === "latest" ? "_active_10o01_15" : "_none_10o01_1"} onClick={() => setData("latest")}>
              <FontAwesomeIcon icon={faClock} /> 최신
            </div>
          </a>
          <a href="#">
            <div className={data === "feed" ? "_active_10o01_15" : "_none_10o01_1"} onClick={() => setData("feed")}>
              <FontAwesomeIcon icon={faRss} /> 피드
            </div>
          </a>
        </div>
        {children}
      </header>
    </>
  );
}
