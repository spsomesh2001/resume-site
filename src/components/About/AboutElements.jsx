import styled, { keyframes} from "styled-components";

export const AboutCon = styled.div`
  width: 100%;
  padding : 80px 0;

  @media screen and (max-width: 750px) {
    padding: 80px 0 30px;
  }
`

export const AbtHead = styled.h1`
  margin: 0 0 20px;
  height: 60px;
  color: #fff;
  font-size: 2.5rem;
  border-radius: 3px;
  position: relative;

  &:after {
    content: "";
    background: -webkit-linear-gradient(right, var(--metallic-seaweed), var(--red));
    display: block;
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`

export const AWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  line-height: 1.8;
  font-size: 1.05rem;

  @media screen and (max-width: 750px) {
    flex-direction: column-reverse;
  }
`

export const AContentCon = styled.div`
  margin: 20px 0;
  padding: 10px 40px;
  width: 50%;
  color: white;

  @media screen and (max-width: 750px) {
    padding: 10px 25px;
    width: 100%;
  }
`

export const ACPara = styled.p`
  margin-top: 20px;
`

export const ACList = styled.ul`
  margin: 20px 0 0 3px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;


`

export const ACEle = styled.li`

  &:before {
    content: "";
    position: absolute;
    top: 15px;
    left: -3px;
    width: 0;
    height: 0;
    border-left: 10px solid var(--lava);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }

  min-width: 200px;
  margin: 5px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  list-style: none;
`

export const ACn = styled.p`
  width: 100px;
`

export const ACi = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({bg}) => bg};
  padding: 3px;
  margin: 5px 10px;
  
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-out;
  }
`

export const RLink = styled.a`
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.3s ease-out;

  &:hover {
    color: var(--auburn);
  }
`


export const AImgCon = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 750px) {
    width: 90%;
    padding: 30px;
  }

  @media screen and (max-width: 350px) {
    width: 100%;
    padding: 30px 15px;
  }
`

export const Anim = styled.div`
  width: 290px;
  height: 325px;
  border-radius: 7px;
  position: relative;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`

const orotate360 = keyframes`
  0% { transform: rotate(0) }
  100% { transform: rotate(360deg) }
`

export const AnimSpCon = styled.div`
  border: 0.5px solid white;
  width: 100%;
  height: 100%;
  animation: ${orotate360} linear 8s infinite;

  & span {
    display: block;
    width: 100%; height: 100%;
    position: relative;
    transform: translate(-50%, -50%);

    &:after {
      display: block;
      content: "";
      width: 100%; height: 100%;
      position: absolute;
      left: 100%;
    }

    &:first-child {
                background: var(--auburn);
      &:after { background: var(--wine); }
    }

    &:last-child {
                background: var(--dark-liver);
      &:after { background: var(--metallic-seaweed);}
    }
  }
`

export const AImg = styled.img`
  width : calc(100% - 15px);
  height: calc(100% - 15px);
  object-fit: cover;
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 7px;
`