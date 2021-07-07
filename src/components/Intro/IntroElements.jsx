import styled from "styled-components";

export const IntroCon = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: 1;
  background-color: #222222;

  @media screen and (max-width: 920px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const SVGCon = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
  filter: brightness(65%);
`;

export const ICWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  margin-left: 100px;
  min-height: 80%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-out;
  z-index: 3;
  color: #fff;
  font-family: var(--monserrat);

  @media screen and (max-width: 750px) {
    margin: 0 5%;
    width: 90%;
  }
`

export const Hey = styled.h3`
  margin-top: 50px;
  font-size: 1.3rem;
`

export const Name = styled.div`
  width: 90%;
  max-width: 540px;
  margin-top: 10px;

  @media screen and (max-width: 750px) {
    width: 90%;
  }
`

export const IPara = styled.p`
  width: 55%;
  font-family: var(--playfair);
  font-size: 1.3rem;
  letter-spacing: 0.2px;

  @media screen and (max-width: 750px) {
    width: 90%;
  }
`

export const KnowCon = styled.div`
  margin-top: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  
`

export const KIcon = styled.div`
  height: 100%;
  margin-left: 12px;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease-out;
  color: #1050db;
  transform: translate(-50px, 0);
  z-index: 2;
`

export const Know = styled.p`
  height: 100%;
  font-size: 1.3rem;
  font-weight: bold;
  z-index: 3;

  &:hover {
    cursor: pointer;

    & ~ ${KIcon} {
      transform: translate(0, 0);
      opacity: 1;
    } 
  }
`