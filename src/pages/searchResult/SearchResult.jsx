import React from "react";
import "./SearchResult.scss";
import { useSearchResult } from "features/search/hooks/useSearchResult";
import { SearchFilterBar } from "features/search/components/SearchFilterBar";
import { SearchResultList } from "features/search/components/SearchResultList";


export default function SearchResult() {
  const {
    keyword,
    filterList,
    activeFilter,
    handleFilter
  } = useSearchResult();

  return (
    <div className="search-result-page">
      <h2>검색 결과: "{keyword}"</h2>

      <SearchFilterBar
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      />

      <SearchResultList filterList={filterList} />
    </div>
  );
}
