import styled from "styled-components";

export const BaseLayoutStyles = styled.div`
  width: 100%;
  display: flex;
`

export const BaseLayoutApp = styled.section`
  width: 100%;
  height: 100%;

  & > div {
    margin: 24px 16px;
  }
`
export const BaseLayoutItems = styled.div`
  padding: 24px;
  min-height: 600px;
  background: var(--white);
  width: 100%;
`