import styled from "styled-components";

export const NavContainer = styled.div`
  height: 100px;
  padding: 0 40px;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 999;
  font-family: var(--monserrat);
  transition: all 0.3s ease-out;

  @media screen and (max-width: 750px) {
    padding: 0 5px 0 20px;
  }
`;

export const NavWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoCon = styled.div`
  height: 70px;
  width: 70px;
  margin-top: 10px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 65px;
  }
`;

export const NavItemsCon = styled.ul`
  width: 450px;
  font-size: 1.3rem;
  list-style: none;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;

  @media screen and (max-width: 750px) {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to right, #433d46, #4b4a5d, #485a75, #386c8a, #127f97);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    opacity: ${({ o }) => (o ?  "1" : "0")};
    pointer-events: ${({ o }) => (o ? "all" : "none")};
    z-index: 999;
    transition: ${({m}) => m ? "all 0.2s ease-out" : ""};
  }
`;

export const NavItem = styled.li`
  margin: 0 5%;
  height: 30px;
  cursor: pointer;
  transition: all 0.1s ease-out;

  &:hover {
    border-bottom: 2px solid #fff;
    transition: all 0.1s ease-out;
  }

  @media screen and (max-width: 750px) {
    margin: 15px 0;
  }
`;

export const DLink = styled.a`
  text-decoration: none;
  color: #fff;
  transition: all 0.3 ease-out;
`

export const MobileMenu = styled.div`
  height: 40px;
  width: 40px;
  margin-right: 15px;
  position: relative;
  cursor: pointer;
`;

export const MIcon = styled.div`
  top: 17px;
  left: 7px;
  z-index: 1000;

  & {
    background: #ffffff;
    content: "";
    height: 3px;
    position: absolute;
    transition: background ease 0.3s, top ease 0.3s 0.3s, transform ease 0.3s;
    width: 25px;

    ${({ o }) =>
      o &&
      `
      background: transparent;
    `}
  }

  &:before {
    top: -7px;
    ${({ o }) =>
      o &&
      `
    transform: rotate(45deg);
  `}
  }

  &:after {
    top: 7px;
    ${({ o }) =>
      o &&
      `
    transform: rotate(-45deg);
  `}
  }

  &:before,
  &:after {
    background: #ffffff;
    content: "";
    height: 3px;
    position: absolute;
    transition: background ease 0.3s, top ease 0.3s 0.3s, transform ease 0.3s;
    width: 25px;

    ${({ o }) =>
      o &&
      `
      top: 0;
      transition: top ease .3s, transform ease .3s .3s;
    `}
  }
`;

