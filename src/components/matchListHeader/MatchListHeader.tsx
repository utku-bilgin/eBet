import style from "./MatchListHeader.module.scss";
import { FaInfo } from "react-icons/fa";

const MatchListHeader = () => {
  return (
    <div className={style.container}>
      <div className={style.team}>Lig ya da maç giriniz</div>
      <div className={style.mbs}>MBS</div>
      <div className={style.matchResult}>Maç Sonucu</div>
      <div className={style.upsideDown}>2,5 Gol</div>
      <div className={style.HandicapMatchOutcome}>Handikap</div>
      <div className={style.doubleChance}>Çifte Şans</div>
      <div className={style.BothTeamsScore}>Karş. Gol</div>
      <div className={style.Info}>
        <FaInfo />
      </div>
    </div>
  );
};

export default MatchListHeader;
