import styled from "styled-components";

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 990;
  visibility: hidden;
  transition: 0.3s ease;
  opacity: 0;

  ${(props) => {
    if(props.isModalOpen) {
      return `
            visibility: visible;
            opacity: 1
          `
    }
  }}
`

export const Modal = styled.div`
  position: fixed;
  right: -100%;
  top: 0;
  background-color: white;
  max-width: 300px;
  width: 300px;
  height: 100%;
  z-index: 999;
  transition: 0.3s ease;

  @media screen and (max-width: 375px) {
    width: 100%;
    max-width: 100%;
  }
  
  ${(props) => {
      if(props.isModalOpen) {
          return `
            right: 0;
          `
      }
  }}
`

export const Close = styled.div`
  padding: 20px;
  
  & i{
    font-size: 25px;
  }
`