// import { createContext, useContext, useState } from "react";

// const FiltersContext = createContext();

// export const useFilters = () => useContext(FiltersContext);
// export function FiltersProvider({ children }) {
//   const [filters, setFilters] = useState({});

//   const updateFilters = (newFilters) => {
//     setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
//   };

//   return (
//     <FiltersContext.Provider value={{ filters, updateFilters }}>
//       {children}
//     </FiltersContext.Provider>
//   );
// }
