import style from "../scss/Layout.module.scss";
import { FaFutbol, FaUsers, FaNewspaper, FaThumbsUp } from "react-icons/fa";

const Layout = () => {
  return (
    <div className={style.contaier}>
      <div className={`${style.btn}`}>
        <FaNewspaper className={`${style.icon}`} />
        <h4>Bülten</h4>
      </div>
      <div className={`${style.btn}`}>
        <FaUsers className={`${style.icon}`} />
        <h4>Kupondaş</h4>
      </div>
      <div className={`${style.btn}`}>
      <FaFutbol className={`${style.icon}`} />
      <h4>Canlı Sonuç</h4>
      </div>
      <div className={`${style.btn}`}>
        <FaThumbsUp className={`${style.icon}`} />
        <h4>Popüler Bahis</h4>
      </div>
    </div>
  );
};

export default Layout;
