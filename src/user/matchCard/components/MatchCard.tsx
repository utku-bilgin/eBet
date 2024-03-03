import React, {useEffect, useState} from "react";
import style from "../scss/MatchCard.module.scss";
import { useBetslipContext } from "../../../context/BetslipContext";

type Props = { match: Match | any };

interface Match {
  LN: string;
  NID: number;
  D: string;
  DAY: string;
  T: string;
  N: string;
  OCG: {
    [key: string]: {
      ID: string;
      N: string;
      MBS: string;
      SO: number;
      OC: {
        [key: string]: {
          G: string;
          ID: string;
          IMF: boolean;
          MBS: string;
          N: string;
          O: string;
          OD: number;
        };
      };
    };
  };
}

const MatchCard: React.FC<Props> = ({ match }) => {
  
  const betslipContext = useBetslipContext();
  const matchesNID = useBetslipContext();
  const addToBetslip = betslipContext.addToBetslip;
  const [activeIndex, setIsActiveIndex] = useState(-1)
  const [NIDBet, setNIDBet] = useState<any>()
  const [indexBet, setIndexBet] = useState<any>()

  const handleClick = (betType: string ,betRate: string, index: number, NID: number) => {
    setNIDBet(NID)
    setIndexBet(index)
 
    addToBetslip({
      N: match.N,
      LN: match.LN,
      DAY: match.DAY,
      T: match.T,
      D: match.D,
      NID: match.NID,
      Ogc: betType,
      Odd: betRate,
    });
  };

  useEffect(() => {
    if (NIDBet !== null && indexBet !== null) {
      const isAsd = betslipContext.betslip.items.some((item: any) => item.odd.NID === NIDBet);
      if (isAsd) {
        setIsActiveIndex(indexBet);
      } else {
        setIsActiveIndex(-1);
      }
    }
  }, [NIDBet, indexBet, betslipContext.betslip.items]);



  //Mac Bilgileri
  // Ligi -------LN
  // Tarih ------D
  // Gun --------DAY
  // Saati ------T
  // Takımlar ---N

  //MBS
  // kuponda en az 4 maç oynamak gerekiyor

  //Maç Sonucları -OGC[4]
  // 1 ----------OGC[4].O
  // X ----------OGC[4].1
  // 2 ----------OGC[4].2

  //2,5 Gol
  // Alt
  // Ust

  //Handikaplı Mac Sonucu
  // HND
  // 1
  // X
  // 2

  //Cifte Sans
  // 1-X
  // 1-2
  // X-2

  //Karsılıklı Gol
  // Var
  // Yok

  //Info ( ı )
  // bunu bilmiyorum



  return (
    <div className={style.contaier}>
      
      <div className={style.team}>
        <div className={style.team_name}>{match.N}</div>
        <div className={style.team_league}>{match.LN}</div>
      </div>

      <div className={style.time}>
        <div className={style.time_day}>{match.DAY}</div>
        <div className={style.time_time}>{match.T}</div>
        <div className={style.time_date}>{match.D}</div>
      </div>

      <div className={style.mbs}>MBS</div>

      <div className={style.matchResult}>
        <div className={`${style.matchResult_firstTeam} ${style.select} ${activeIndex === 10 ?style.active : ""}`} onClick={() => handleClick(match.OCG["1"].N, match.OCG["1"].OC["0"].O, 10, match.NID)}>
          <div>MS{match.OCG["1"].OC["0"].N}</div>
          <div>{match.OCG["1"].OC["0"].O}</div>
        </div>
        <div className={`${style.matchResult_quits} ${style.select} ${activeIndex === 11 ?style.active : ""}`} onClick={() => handleClick(match.OCG["1"].N, match.OCG["1"].OC["1"].O, 11, match.NID)}>
          <div>MS{match.OCG["1"].OC["1"].N}</div>
          <div>{match.OCG["1"].OC["1"].O}</div>
        </div>
        <div className={`${style.matchResult_secondTeam} ${style.select} ${activeIndex === 12 ?style.active : ""}`} onClick={() => handleClick(match.OCG["1"].N, match.OCG["1"].OC["0"].O, 12, match.NID)}>
          <div>MS 2</div>
          <div>{match.OCG["1"].OC["0"].O}</div>
        </div>
      </div>

      <div className={style.upsideDown}>
        <div className={`${style.upsideDown_down} ${style.select} ${activeIndex === 525 ?style.active : ""}`} onClick={() => handleClick(match.OCG["5"].N, match.OCG["5"].OC["25"].O, 525, match.NID)}>
          <div>{match.OCG["5"].OC["25"].N}</div>
          <div>{match.OCG["5"].OC["25"].O}</div>
        </div>
        <div className={`${style.upsideDown_upside} ${style.select} ${activeIndex === 526 ?style.active : ""}`} onClick={() => handleClick(match.OCG["5"].N, match.OCG["5"].OC["26"].O, 526, match.NID)}>
          <div>{match.OCG["5"].OC["26"].N}</div>
          <div>{match.OCG["5"].OC["26"].O}</div>
        </div>
      </div>

      <div className={style.HandicapMatchOutcome}>Handikaplı Maç Sonucu</div>

      <div className={style.doubleChance}>
        <div className={`${style.doubleChance_firstTeamQuits} ${style.select} ${activeIndex === 23 ?style.active : ""}`} onClick={() => handleClick(match.OCG["2"].N, match.OCG["2"].OC["3"].O, 23, match.NID)}>
          <div>{match.OCG["2"].OC["3"].N}</div>
          <div>{match.OCG["2"].OC["3"].O}</div>
        </div>
        <div className={`${style.doubleChance_firstTeamSecondTeam} ${style.select} ${activeIndex === 24 ?style.active : ""}`} onClick={() => handleClick(match.OCG["2"].N, match.OCG["2"].OC["4"].O, 24, match.NID)}>
          <div>{match.OCG["2"].OC["4"].N}</div>
          <div>{match.OCG["2"].OC["4"].O}</div>
        </div>
        <div className={`${style.doubleChance_SecondTeamQuits} ${style.select} ${activeIndex === 25 ?style.active : ""}`} onClick={() => handleClick(match.OCG["2"].N, match.OCG["2"].OC["5"].O, 25, match.NID)}>
          <div>{match.OCG["2"].OC["5"].N}</div>
          <div>{match.OCG["2"].OC["5"].O}</div>
        </div>
      </div>

      <div className={style.BothTeamsScore}>Karş. Gol</div>

      <div className={style.Info}>info</div>
    </div>
  );
};

export default MatchCard;
