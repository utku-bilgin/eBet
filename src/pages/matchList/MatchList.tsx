import { useMatchContext } from "../../context/MatchContext.tsx";
import MatchCard from "../../components/matchCard/MatchCard.tsx";
import MatchListHeader from "../../components/matchListHeader/MatchListHeader.tsx";
import style from "./MatchList.module.scss";
import { Virtuoso } from "react-virtuoso";
import Layout from "../../layouts/Layout.tsx";
import Betslip from "../../components/betslip/Betslip.tsx";
import { FaSpinner } from "react-icons/fa";

const MatchList = () => {
  const matches = useMatchContext();
  // const matches = null;
  return (
    <div className={style.contaier}>
      <Layout />

      <div className={style.main}>
        <div>
          <MatchListHeader />
          {matches.length !== 0 ? <Virtuoso
            className={style.virtuoso}
            style={{ height: 760 }}
            data={matches}
            itemContent={(index, match) => {
              return (
                <div key={index}>
                  <MatchCard match={match} />
                </div>
              );
            }}
          /> : <div className={style.loading} ><FaSpinner className={style.loadingicon}/></div> }
          
        </div>

        <Betslip />
      </div>
    </div>
  );
};

export default MatchList;
