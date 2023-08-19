import React from "react";
import { Container, SearchInput, SearchIcon } from "./Search";

const Search = () => {
  return (
    <Container>
      <SearchInput type="text" placeholder="지역을 검색해보세요" />
      <SearchIcon />
    </Container>
  );
};

export default Search;
