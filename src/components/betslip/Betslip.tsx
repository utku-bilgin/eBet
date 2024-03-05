import { useEffect, useState } from "react";
import style from "./Betslip.module.scss";
import { useBetslipContext } from "../../context/BetslipContext";
import { FaBan, FaSave, FaEllipsisH } from "react-icons/fa";

const Betslip = () => {
  const betslip = useBetslipContext();
  const clearBetslip = betslip.clearBetslip;
  const clearSelectedMatch = betslip.clearSelectedMatch;
  const maxRate = betslip.maxRate;
  const [selectedRate, setSelectedRate] = useState<number>(1);
  const [selectedPiece, setSelectedPiece] = useState<number>(1);
  const [maxWin, setMaxWin] = useState<number>();
  const [numbers, setNumbers] = useState<number[]>([]);
  const [pieces, setPieces] = useState<number[]>([]);



  useEffect (() => {
    const number = Array.from({ length: 1000 }, (_, i) => i+1)
    setNumbers(number)
  
    const piece = Array.from({ length: 250 }, (_, i) => i+1)
      setPieces(piece)
  })

  const handleSelectChangeRate = (event: any) => {
    setSelectedRate(event.target.value);
  };

  const handleSelectChangePiece = (event: any) => {
    setSelectedPiece(event.target.value);
  };

  const handleClearBetslip = () => {
    clearBetslip();
    setSelectedRate(0);
    setSelectedPiece(0);
  }

  useEffect (() => {
    const win = parseFloat((selectedRate*selectedPiece*maxRate).toFixed(2));
    setMaxWin(win);
  }, [maxRate, selectedRate, selectedPiece])



  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.header_title}>İDDAA KUPONUM</div>
        <div className={style.header_lenght}>
          {betslip.betslip.items.length}
        </div>
      </div>

      <div className={style.matchs}>
        {betslip.betslip.items.map((item, index) => (
          <div key={index} className={style.match}>
            <FaBan
              className={`${style.match_delete}`}
              onClick={() => clearSelectedMatch(item.odd.NID)}
            />
            <div className={style.team}>{item.odd.N}</div>
            <div className={style.time}>
              <div>{item.odd.D}</div>
              <div>{item.odd.DAY}</div>
              <div>{item.odd.T}</div>
            </div>
            <div className={style.rate}>
              <div>{item.odd.Ogc}</div>
              <div>{item.odd.Odd}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={style.footer}>
        <div className={style.betslipInfo}>
          <div className={style.maxRate}>
            <div>Max Oran</div>
            <div>{maxRate.toFixed(2)}</div>
          </div>
          <div className={style.totalRate}>
            <div>Kupon Tutarı</div>
            <select
              value={selectedRate}
              onChange={handleSelectChangeRate}
              className={style.totalRate_select}
            >
              {numbers.map((number, index) => (
                <option key={index} value={number}>
                  {number} TL
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={style.betslipPiece}>
          <div>
            <div>Kupun Adeti</div>
          </div>
          <select
              value={selectedPiece}
              onChange={handleSelectChangePiece}
              className={style.betslipPiece_select}
            >
              {pieces.map((piece, index) => (
                <option key={index} value={piece}>
                  {piece} Adet
                </option>
              ))}
            </select>
        </div>
        <div className={style.maxWin}>
          <div>Maks. Kazanç :</div>
          <div>{maxWin === 1 ? "" : maxWin} TL</div>
        </div>
        <div className={style.betslipNavigation}>
          <FaBan className={`${style.btn}`} onClick={handleClearBetslip} />
          <FaSave className={`${style.btn}`} />
          <FaEllipsisH className={`${style.btn}`} />
          <div className={`${style.playNow}`}>Hemen Oyna</div>
        </div>
      </div>
    </div>
  );
};

export default Betslip;
