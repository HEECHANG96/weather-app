import styled from "styled-components";
import { FcSearch } from "react-icons/fc";

export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
`;

export const SearchIcon = styled(FcSearch)`
  position: absolute;
  right: 5px;
  font-size: 24px;
  color: white;
  top: 25px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  border: none;
  font-size: 20px;
  color: white;
  background-color: transparent;
  border-bottom: 1px solid white;

  padding-left: 30px;
  margin: 1.5rem 0 0;

  &::placeholder {
    color: white;
  }

  &:focus {
    border: none;
  }
`;
