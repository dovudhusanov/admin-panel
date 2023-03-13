import styled from "styled-components";

export const CardsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 100%;

  @media screen and (max-width: 550px) {
    justify-content: center;
  }
`