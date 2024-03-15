import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarker, FaMobile } from "react-icons/fa"
import style from "./Footer.module.scss"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className={style.container}>
        <div className={style.footerTop}>
          <div className={`${style.aboutUs} ${style.top}`}>
            <h4>About us</h4>
            <p>
              Lorem Ipsum ist einfach Dummy-Text der Druck- und Satzindustrie.
              Lorem Ipsum war der Standard der Branche Lorem Ipsum ist einfach
              Dummy-Text der Druck- und Satzindustrie. Lorem Ipsum war der
              Standard der Branche{" "}
            </p>
          </div>

          <div className={`${style.information} ${style.top}`}>
            <h4>Information</h4>
            <ul className="address1">
              <li>
                <FaMapMarker />Lorem Ipsum 132 xyz Lorem Ipsum
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:#">info@test.com</a>
              </li>
              <li>
                <FaMobile />{" "}
                <a href="tel:12 34 56 78 90">12 34 56 78 90</a>
              </li>
            </ul>
          </div>

          <div className={`${style.followMe} ${style.top}`}>
            <h4>Follow us</h4>
            <ul className={style.socialicon}>
              <li>
                <a href="#">
                    <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                <FaXTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.footerbottom}>
          <div className={style.partLeft}>
            <p className={style.copyright}>Copyright © 2023 | UTKU BİLGİN</p>
          </div>
        </div>
    </div>
  )
}

export default Footer