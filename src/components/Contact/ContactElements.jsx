import styled from "styled-components";

export const CContainer = styled.div`
  margin: 20px 0 0;
  background: var(--dark-liver);
  padding: 40px 30px;
  border-radius: 25px 25px 0 0;

  @media screen and (max-width: 550px) {
    padding: 40px 20px;
  }
`

export const CHeading = styled.h1`
  margin-bottom: 10px;
  height: 50px;
  color: #fff;
  position: relative;

  &:after {
    content: "";
    background: -webkit-linear-gradient(right, var(--metallic-seaweed) , var(--red));
    display: block;
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`

export const CDesc = styled.p`
  margin: 20px 0;
  width: 100%;
  font-size: 1.2rem;
  color: #fff;
`

export const CWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 30vh;
`

export const CForm = styled.form`
  width: 80%;
  transition: all 0.3s ease-out;
  
  @media screen and (max-width: 750px) {
    width: 90%;
  }

  @media screen and (max-width: 450px) {
    width: 95%;
  }
`

export const SDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`