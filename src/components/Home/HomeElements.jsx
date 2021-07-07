import styled from "styled-components";

export const HomeCon = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 100px;
  background-color: #222222;
  font-family: var(--playfair);
  letter-spacing: 0.7px;
  
  @media screen and (max-width: 750px) {
    padding: 0 30px;
  }

  @media screen and (max-width: 500px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 400px) {
    padding: 0 10px;
  }
`