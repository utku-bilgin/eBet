import { useState, useEffect } from "react";
import style from "./MatchListHeader.module.scss";
import { FaInfo } from "react-icons/fa";
import { useMatchContext } from "../../context/MatchContext";

const MatchListHeader = () => {
  const {SearchedMatches} = useMatchContext();
  const [search, setSearch] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  };

  useEffect(() => {
    SearchedMatches(search);
  }, [search])


  return (
    <div className={style.container}>
      <div className={style.team}>
        <input
          className={style.teaminput}
          type="text"
          value={search}
          placeholder="Lig ya da maç giriniz"
          onChange={handleInputChange}
        />
        
      </div>
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
