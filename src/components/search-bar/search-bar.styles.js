import styled from "styled-components";

export const SearchForm = styled.form`
  width: 50%;
  
  @media screen and (max-width: 600px) {
    width: 100%;
  }

  & input {
    border: 1px solid transparent;
    background-color: #f1f1ff;
    outline: none;
    padding: 8px;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 20px;

    &:focus {
      border: 1px solid var(--brightViolet);
    }
  }
`