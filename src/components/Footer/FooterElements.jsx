import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 0 100px;
  background-color: #3a3a3a;
  transition: all 0.3s ease-out;

  @media screen and (max-width: 750px) {
    padding: 0 40px;
  }
  
  @media screen and (max-width: 450px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 350px) {
    padding: 0;
  }
`

export const FooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 10px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SIContainer = styled.div`
  display: none;

  @media screen and (max-width: 750px) {
    width: 80%;
    margin: 5px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`

export const SIcon = styled.a`
  width: 10%;
  min-width: 40px;
  height: 40px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  transition: all 0.3s ease-out;

  &:hover {
    color: #f0f6fc;
    transform: scale(1.2);
  }
`

export const CopyrightCon = styled.h4`
  margin: 5px 0;
  font-size: 1.2rem;
`