import styled from "styled-components";

export const PContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  background-color: #222222;
`

export const PHeading = styled.h1`
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

export const PWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222222;
`

export const EachPBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--auburn);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: all 0.3s ease-out;
`

export const EachPVid = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(60%);
  transition: all 0.3s ease-out;
`

export const EachPImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(90%);
  transition: all 0.3s ease-out;
`

export const EPContent = styled.a`
  position: absolute;
  bottom: 5%;
  left: ${({i}) => i ? "" : "5%"};
  right: ${({i}) => i ? "5%" : ""}; 
  padding: 15px;
  width: 80%;
  min-width: 220px;
  text-decoration: none;
  color: #fff;

  background-color: ${({a}) => a ? "rgba(0,0,0,0.6)" : "#000"};
  transition: all 0.3s ease-out;
`

export const EachP = styled.div`
  position: relative;
  margin: 20px 0;
  width: 80%;
  max-width: 700px;
  height: ${({m}) => m ? 450 : 400}px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.3s ease-out;

  @media screen and (max-width: 400px) {
    width: 85%;
  }

  @media screen and (max-width: 350px) {
    width: 90%;
  }

  &:hover {
    ${EachPBack} {
      transform: ${({i}) => i ? "translate(-10px, -10px)" : "translate(10px, -10px)"};
      transition: transform 0.3s ease-out 0.3s;
    }

    ${EachPVid} {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    ${EachPImg} {
      opacity: ${({a}) => a ? 0 : 1};
      transform: ${({a}) => a ? "" : "scale(1.025)"};
    }

    ${EPContent} {
      transform: ${({a, i}) => a ? i ? "translate(10px, 10px)" : "translate(-10px, 10px)" : "scale(1.05)"};
      opacity: 1;
      bottom: 0;
      left: ${({i}) => i ? "" : "0"};
      right: ${({i}) => i ? "0" : ""}; 

      background-color: ${({a}) => a ? "rgba(0,0,0,0.8)" : ""};
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; 
      transition: all 0.3s ease-out ${({a}) => a ? "0.3s" : ""};
    }
  }
`

export const EPHead = styled.h1`
  font-size: 2.3rem;
  margin-bottom: 10px;
`

export const EPDesc = styled.p`
  width: 100%;
  font-size: 1.1rem;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const EPIcons = styled.div`
  width: 100%;
  margin-bottom: 15px;
  padding: 2px;
`

export const EPI = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({e}) => e};
  padding: 3px;
  margin: 5px 10px;
  
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-out;
  }
`