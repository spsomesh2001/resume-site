import styled from "styled-components";

export const ILine = styled.div`
  height: 100px;
  background-color: #000;
  border: 2px solid #000;
  border-radius: 50px;
  transition: all 0.3s ease-out;
`;

export const IContainer = styled.div`
  width: 50px;
  height: 350px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255,255,255,0.15);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: fixed;
  bottom: 0;
  left: 25px;
  z-index: 999;
  border-radius: 30px;

  &:hover {
    ${ILine} {
      background-color: #f0f6fc;
      border: 2px solid #f0f6fc;
      color: #fff;
    }
  }

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const IDiv = styled.a`
  margin: 5px 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  transition: all 0.3s ease-out;

  &:hover {
    color: #f0f6fc;
    transform: scale(1.2);
  }
`;

export const IDivLine = styled.div`
  padding-top: 5px;
  display: flex;
  justify-content: center;
`;
