import React, { createContext, useContext, useEffect, useState } from "react";

// interface Match {
//   LN: string;
//   NID: number;
//   D: string;
//   DAY: string;
//   T: string;
//   N: string;
//   OCG: {
//     [key: string]: {
//       ID: string;
//       N: string;
//       MBS: string;
//       SO: number;
//       OC: {
//         [key: string]: {
//           G: string;
//           ID: string;
//           IMF: boolean;
//           MBS: string;
//           N: string;
//           O: string;
//           OD: number;
//         };
//       };
//     };
//   };
// }

interface Odd {
  LN: string;
  NID: number;
  D: string;
  DAY: string;
  T: string;
  N: string;
  Ogc: string;
  Odd: string;
}

interface BetslipItem {
  odd: Odd;
}

interface Betslip {
  items: BetslipItem[];
}

interface BetslipContextType {
  betslip: Betslip;
  matchesNID: number[];
  maxRate: number;
  addToBetslip: (odd: Odd) => void;
  clearBetslip: () => void;
  clearSelectedMatch: (NID: number) => void;
}

const BetslipContext = createContext<BetslipContextType>({
  betslip: { items: [] },
  matchesNID: [],
  maxRate: 1,
  addToBetslip: () => {},
  clearBetslip: () => {},
  clearSelectedMatch: () => {},
});

interface BetslipProviderProps {
  children: React.ReactNode;
}

export const useBetslipContext = () => useContext(BetslipContext);

export const BetslipProvider: React.FC<BetslipProviderProps> = ({
  children,
}) => {
  const [betslip, setBetslip] = useState<Betslip>({ items: [] });
  const [matchesNID, setMatchesNID] = useState<number[]>([]);
  const [maxRate, setMaxRate] = useState<number>(1);

  useEffect(() => {
    const NIDs = betslip.items.map(item => item.odd.NID)
    setMatchesNID(NIDs);

    const rate = betslip.items.reduce((item, currentItem) => {
      return item * parseFloat(currentItem.odd.Odd);
    }, 1);
    setMaxRate(rate)
  }, [betslip]);


  const addToBetslip = (odd: Odd) => {
    const isNID = betslip.items.find(item => item.odd.NID === odd.NID);
    const isOdd = betslip.items.find(item => item.odd.Odd === odd.Odd);
  
    if (isNID) {
      // NID'ye sahip bir öğe zaten var
      if (isOdd) {
        // NID ve Odd değerleri aynı ise, bet slip'ten kaldır
        const updatedItems = betslip.items.filter(item => item.odd.Odd !== odd.Odd);
        setBetslip({ items: updatedItems });
      } else {
        // NID aynı ancak Odd değerleri farklı ise, Odd değerini güncelle
        const updatedItems = betslip.items.map(item =>
          item.odd.NID === odd.NID ? { odd } : item
        );
        setBetslip({ items: updatedItems });
      }
    } else {
      // NID'ye sahip bir öğe yok, bet slip'e ekle
      setBetslip(prevBetslip => ({
        items: [...prevBetslip.items, { odd }],
      }));
    }

   
  };

  const clearBetslip = () => {
    setBetslip({ items: [] });
  };






  const clearSelectedMatch = (NID: number) => {
    const updatedItems = betslip.items.filter(item => item.odd.NID !== NID)
    setBetslip({items: updatedItems})
  }

  const value: BetslipContextType = {
    betslip,
    matchesNID,
    maxRate,
    addToBetslip,
    clearBetslip,
    clearSelectedMatch,
  };

  return (
    <BetslipContext.Provider value={value}>{children}</BetslipContext.Provider>
  );
};
