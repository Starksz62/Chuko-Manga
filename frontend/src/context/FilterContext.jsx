import PropTypes from "prop-types";
import { createContext, useContext, useState, useMemo } from "react";

const FiltersContext = createContext();

export const useFilters = () => useContext(FiltersContext);
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({});
  const [batch, setBatch] = useState("");

  const updateFilters = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const updateBatch = (newBatch) => {
    setBatch(newBatch);
  };

  const contextValue = useMemo(() => {
    return { filters, updateFilters, batch, setBatch: updateBatch };
  }, [filters, batch]);

  return (
    <FiltersContext.Provider value={contextValue}>
      {children}
    </FiltersContext.Provider>
  );
}

FiltersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
