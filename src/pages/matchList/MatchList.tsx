import { useMatchContext } from "../../context/MatchContext.tsx";
import MatchCard from "../../components/matchCard/MatchCard.tsx";
import MatchListHeader from "../../components/matchListHeader/MatchListHeader.tsx";
import style from "./MatchList.module.scss";
import { Virtuoso } from "react-virtuoso";
import Header from "../../layouts/Header.tsx";
import Betslip from "../../components/betslip/Betslip.tsx";
import { FaSpinner } from "react-icons/fa";
import Footer from "../../layouts/Footer.tsx";

const MatchList = () => {
  const {filteredMatched} = useMatchContext();
  
  // const matches = null;
  return (
    <div className={style.contaier}>
      <Header />
      
      <div className={style.main}>
        <div>
          <MatchListHeader />
          {filteredMatched.length !== 0 ? <Virtuoso
            className={style.virtuoso}
            style={{ height: 700 }}
            data={filteredMatched}
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
      <Footer />
    </div>
  );
};

export default MatchList;
