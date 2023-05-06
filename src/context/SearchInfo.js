import { createContext, useState } from "react";
export const SearchContext = createContext(null);

const SearchStore = (props) => {
  const [resultData, setResultData] = useState([]);

  return (
    <SearchContext.Provider value = {{ resultData, setResultData }}>
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchStore;
