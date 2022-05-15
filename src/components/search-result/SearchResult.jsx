import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import { getActiveLanguageName } from "store/reducer-and-action/language/language";
import { getSearchResult } from "store/reducer-and-action/news/newsSlice";
import FilteredNewsItems from "./../filtered-news/filtered-news-items";

const SearchResult = () => {
  // const activeLang = useSelector(getActiveLanguageName);
  const [searchResult, pending] = useSelector(getSearchResult);
  debugger;
  useEffect(() => {}, [pending]);
  return (
    <div>
      {pending ? (
        "Loading"
      ) : searchResult?.length > 0 ? (
        <FilteredNewsItems news={searchResult} />
      ) : (
        "Not found"
      )}
    </div>
  );
};

export default SearchResult;
