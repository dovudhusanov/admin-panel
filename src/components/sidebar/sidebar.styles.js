import styled from "styled-components";

export const StyleSidebar = styled.div`
  position: relative;
  flex: 0 0 200px;
  max-width: 250px;
  min-width: 250px;
  width: 250px;
  transition: 0.3s ease;
  z-index: 989;
  
  @media screen and (max-width: 860px) {
    position: fixed;
    left: -100%;
    height: 100%;
    
    ${(props) => {
        if(props.isMobileSidebar) {
            return `
                left: 0;
            `
        }
    }
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
  transition: 0.3s ease;
  z-index: 999;
  

  @media screen and (max-width: 860px) {
    position: fixed;
    left: -100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    ${(props) => {
      if(props.isMobileSidebar) {
        return `
                left: 0
            `
      }
    }
  }
  
`

export const CloneBtn = styled.div`
  position: absolute;
  right: -40px;
  top: 15px;
  background-color: var(--white);
  width: 50px;
  text-align: right;
  padding: 5px 15px;
  border-radius: 0 16px 16px 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid var(--mainColor);

  & i {
    font-size: 18px;
    color: var(--mainColor);
  }

  @media screen and (min-width: 861px) {
    display: none;
  }
`

export const Logo = styled.div`
  text-align: center;
  & img{
    width: 150px;
  }
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
      background-color: var(--mainColor);
      & span {
        color: white;
      }
    }

    & span {
      color: var(--black);
      transition: 0.3s ease;
    }

    &:hover {
      background-color: var(--mainColor);

      & span {
        color: white;
      }
    }
  }
`