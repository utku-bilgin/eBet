import React, { useState, useEffect, createContext, useContext, useMemo } from "react";
import axios from "axios";

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

interface MatchContextType {
  filteredMatched: Match[];
  SearchedMatches: (search: string) => void;
}

interface MatchProviderProps {
  children: React.ReactNode;
}

const MatchContext = createContext<MatchContextType>({
  filteredMatched: [],
  SearchedMatches: () => {},
});

export const useMatchContext = () => {
  return useContext(MatchContext);
};

export const MatchProvider = ({ children }: MatchProviderProps) => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [searched, setSearched] = useState<string>("");
  useEffect(() => {
    async function fetchMatches() {
      try {
        const response = await axios.get(
          "https://nesine-case-study.onrender.com/bets"
        );
        setMatches(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchMatches();
  }, []);

  const SearchedMatches = (search: string) => {
    setSearched(search)
  };

  const filteredMatched = useMemo(() => {
    if(searched !== ""){
      return matches.filter(
        (match) => match.N.toLowerCase().includes(searched.toLowerCase()) || match.LN.includes(searched)
      );
    } else {
      return matches;
    }
  }, [matches, searched])
  

  const value : MatchContextType = {
    filteredMatched: filteredMatched,
    SearchedMatches,
  }

  return (
    <MatchContext.Provider value={value}>{children}</MatchContext.Provider>
  );
};
