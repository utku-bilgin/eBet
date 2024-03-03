import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

interface Match {

}

interface MatchProviderProps {
  children: React.ReactNode;
}

const MatchContext = createContext<Match[]>([]);

export const useMatchContext = () => {
  return useContext(MatchContext);
};

export const MatchProvider = ({ children }: MatchProviderProps) => {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {

    async function fetchMatches() {
      try {
        const response = await axios.get(
          "https://nesine-case-study.onrender.com/bets"
        );
        setMatches(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchMatches();
  }, []);

  return (
    <MatchContext.Provider
      value={
        matches
      }
    >
      {children}
    </MatchContext.Provider>
  );
};
