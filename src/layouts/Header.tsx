import { FaBasketball, FaDice, FaMessage } from "react-icons/fa6";
import style from "./Header.module.scss";
import {
  FaFutbol,
  FaUsers,
  FaNewspaper,
  FaThumbsUp,
  FaUser,
  FaLock,
  FaStar,
  FaMobile,
} from "react-icons/fa";

const Layout = () => {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.article}>
          <img
            className={style.logo}
            src="./src/assets/images/logo003.jpg"
            alt=""
          />
          <div className={style.login}>
            <div className={style.user}>
              <FaUser className={style.loginIcon} />
              <input
                className={style.userNameInput}
                type="text"
                name=""
                id=""
              />
            </div>
            <div className={style.user}>
              <FaLock className={style.loginIcon} />
              <input
                className={style.userNameInput}
                type="password"
                name=""
                id=""
              />
            </div>
            <div className={style.rememberMe}>
              
              <input type="checkbox" className={style.checkbox}/>
              <label className={style.label}>Beni Hatırla</label>
            </div>
            <button className={style.loginbtn}>GİRİŞ</button>
          </div>
        </div>
      </div>
      <div className={style.navigation}>
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
        <div className={`${style.btn}`}>
          <FaMessage className={`${style.icon}`} />
          <h4>Yazarlar</h4>
        </div>
        <div className={`${style.btn}`}>
          <FaDice className={`${style.icon}`} />
          <h4>Şans Oyunları</h4>
        </div>
        <div className={`${style.btn}`}>
          <FaStar className={`${style.icon}`} />
          <h4>Süper Lig</h4>
        </div>
        <div className={`${style.btn}`}>
          <FaBasketball className={`${style.icon}`} />
          <h4>Diğer Sporlar</h4>
        </div>
        <div className={`${style.btn}`}>
          <FaMobile className={`${style.icon}`} />
          <h4>Mobil</h4>
        </div>
      </div>
    </div>
  );
};

export default Layout;
