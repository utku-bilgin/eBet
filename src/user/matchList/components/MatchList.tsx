import { useMatchContext } from "../../../context/MatchContext";
import MatchCard from "../../matchCard/components/MatchCard";
import MatchListHeader from "../../matchListHeader/components/MatchListHeader";
import style from "../scss/MatchList.module.scss";
import { Virtuoso } from "react-virtuoso";
import Layout from "../../../layouts/components/Layout.tsx";
import Betslip from "../../betslip/components/Betslip.tsx";

const MatchList = () => {
  const matches = useMatchContext();

  return (
    <div className={style.contaier}>
      <Layout />

      <div className={style.main}>
        <div>
          <MatchListHeader />
          <Virtuoso
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
          />
        </div>

        <Betslip />
      </div>
    </div>
  );
};

export default MatchList;
