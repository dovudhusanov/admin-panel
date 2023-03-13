import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 20%;
  max-width: 300px;
  
  @media screen and (max-width: 2129px) {
    max-width: 20%;
  }

  @media screen and (max-width: 1700px) {
    max-width: 25%;
    flex-basis: 25%;
  }
  
  @media screen and (max-width: 1300px) {
    flex-basis: 33%;
    max-width: 350px;
  }

  @media screen and (max-width: 1050px) {
    flex-basis: 40%;
    max-width: 350px;
  }

  @media screen and (max-width: 860px) {
    max-width: 320px;
    flex-basis: 33%;
  }

  @media screen and (max-width: 780px) {
    max-width: 350px;
    flex-basis: 35%;
  }
  
  @media screen and (max-width: 550px) {
    width: 100%;
    flex-basis: 100%;
  }
`

export const CardItem = styled.div`
  width: 100%;
  min-height: 380px;
  border-radius: 8px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  margin: 6px;
  position: relative;
  transition: all 0.3s ease 0s;
  background-color: var(--white);
`

export const Img = styled.img`
  object-fit: cover;
  height: 200px;
  width: 100%;
  border-radius: 8px 8px 0 0;
`

export const CardInfo = styled.div`
  padding: 10px 20px;
  position: relative;
  top: -7px;
  
  & h3{
    font-size: 20px;

    @media screen and (max-width: 1080px) {
      font-size: 18px;
    }
  }
  
  & span{
    font-size: 14px;
    @media screen and (max-width: 1080px) {
    font-size: 13px;
    }
  }
`

export const Counter = styled.div`
  border: 1px solid rgba(128, 128, 128, 0.29);
  border-radius: 2px;
  padding: 3px;
  display: flex;
  align-items: center;
  max-width: 160px;
  width: 160px;
  justify-content: center;
  margin-top: 12px;

  @media screen and (max-width: 1080px) {
    width: 140px;
  }
  
  & button{
    border: none;
    background-color: transparent;
    font-size: 18px;
    color: rgb(145, 145, 145);
    margin: 0px 10px 0px 7px;
    cursor: pointer;
    width: inherit;
  }
`