import React, { useState, useEffect } from "react";
import {
  PContainer,
  PHeading,
  PWrapper,
  EachP,
  EachPBack,
  EachPVid,
  EachPImg,
  EPContent,
  EPHead,
  EPDesc,
  EPIcons,
  EPI,
} from "./ProjectElements";
import { data } from "./data";

const Project = () => {
  const [mobile, setMobile] = useState(false); // Change card dimension
  const [anim, setAnim] = useState(true); // Disable animations for less wider screens

  const handleM = () => {
    if (window.innerWidth < 599) setMobile(true);
    else setMobile(false);
  };

  const handleA = () => {
    if (window.innerWidth < 510) setAnim(false);
    else setAnim(true);
  };

  window.addEventListener("resize", () => {
    handleM();
    handleA();
  });

  useEffect(() => {
    handleM();
    handleA();
  }, []);

  const pElements = data.map((p, i) => {
    return (
      <EachP key={i} m={mobile} a={anim} i={i%2 === 0 ? true : false}>
            {anim ? (
              <>
                <EachPBack i={i%2 === 0 ? true : false}></EachPBack>
                <EachPVid src={p.vid} autoPlay loop muted></EachPVid>
              </>
            ) : (
              <></>
            )}
            <EachPImg src={mobile ? p.bgM : p.bg}></EachPImg>
            <EPContent
              href={p.wurl}
              target="_blank"
              a={anim}
              i={i%2 === 0 ? true : false}
            >
              <EPHead>{p.wtitle}</EPHead>
              <EPDesc>{p.wdesc}</EPDesc>
              <EPDesc>Built with: </EPDesc>
              <EPIcons>
                {p.wfw.map((icon, index) => <EPI src={icon} e={p.wfwB[index]} key={index}></EPI>)}
              </EPIcons>
            </EPContent>
          </EachP>
    );
  });

  return (
    <>
      <PContainer>
        <PHeading id="project">Projects</PHeading>
        <PWrapper>
          {pElements}
        </PWrapper>
      </PContainer>
    </>
  );
};

export default Project;
