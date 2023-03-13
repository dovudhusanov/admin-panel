import styled from "styled-components";

export const StyleSidebar = styled.div`
  position: relative;
  flex: 0 0 200px;
  max-width: 250px;
  min-width: 250px;
  width: 250px;
  
  @media screen and (max-width: 860px) {
    position: fixed;
    left: -100%;
  }
`

export const SidebarItems = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--white);
  width: 250px;
  height: 100%;
  padding: 10px 25px;

  @media screen and (max-width: 860px) {
    position: fixed;
    left: -100%;
  }
  
`

export const Logo = styled.div`
  
`

export const DashboardList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0;

  & a {
    padding: 8px;
    border-radius: 8px;
    margin: 3px 0;
    transition: 0.3s ease;

    &.active {
      background-color: var(--brightViolet);
      & span {
        color: var(--white);
      }
    }

    & span {
      transition: 0.3s ease;
    }

    &:hover {
      background-color: var(--brightViolet);

      & span {
        color: var(--white);
      }
    }
  }
`