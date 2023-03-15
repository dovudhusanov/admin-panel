import styled from "styled-components";

export const NavbarStyle = styled.div`
  margin: 0!important;
  height: 64px;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16px;
  width: 100%;
`

export const Menu = styled.div`
  & i{
    color: var(--mainColor);
  }
  
  @media screen and (min-width: 861px) {
    display: none;
  }
`