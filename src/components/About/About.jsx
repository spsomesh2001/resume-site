import React from "react";
import {
  AboutCon,
  AbtHead,
  AWrapper,
  AContentCon,
  ACPara,
  ACList,
  ACEle,
  ACn,
  ACi,
  RLink,
  AImgCon,
  Anim,
  AnimSpCon,
  AImg
} from "./AboutElements";

import { abt } from "../Project/data";
import photo from "../../media/photo.jpg"
import resume from "../../media/Resume.pdf";

const About = () => {
  const alie = abt.t.map((e, i) => {
    return (
      <ACEle key={i}>
        <ACn>{e}</ACn>
        <ACi src={abt.ti[i]} bg={abt.tiB[i]}></ACi>
      </ACEle>
    );
  });

  return (
    <>
      <AboutCon>
        <AbtHead id="about">About Me</AbtHead>

        <AWrapper>
          <AContentCon>
            <ACPara>
              Hi, my name is Somesh Kirthik. I have been working on designing and building
              websites for over 7 months now. And, know what? Its actually fun.
              Here are some web dev tools I have been working with:
            </ACPara>
            <ACList>
              {alie}
            </ACList>
            <ACPara>
              Web Dev is not all I know!! To know more, check out my <RLink href={resume}
                download="resume">resume</RLink> .
            </ACPara>
          </AContentCon>
          <AImgCon>
            <Anim>
              <AnimSpCon>
              <span></span>
              <span></span>
              </AnimSpCon>
              <AImg src={photo} alt="photo"></AImg>
            </Anim>
          </AImgCon>
        </AWrapper>
      </AboutCon>
    </>
  );
};

export default About;
