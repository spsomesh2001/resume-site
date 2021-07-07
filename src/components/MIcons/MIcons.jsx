import React from "react";
import { Facebook, GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import { IContainer, IDiv, IDivLine, ILine } from "./MIconsElements";

const MIcons = () => {
  return (
    <>
    <IContainer>
      <IDiv href="https://github.com/spsomesh2001" target="_blank" hc="#f0f6c"><GitHub></GitHub></IDiv>
      <IDiv href="https://www.linkedin.com/in/somesh-kirthik-789ba8192?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2A9EYlspS8OthDYD06TdQw%3D%3D" target="_blank"><LinkedIn></LinkedIn></IDiv>
      <IDiv href="" target="_blank"><Instagram></Instagram></IDiv>
      <IDiv href="" target="_blank"><Facebook></Facebook></IDiv>
      <IDivLine><ILine></ILine></IDivLine>
    </IContainer>
    </>
  );
};

export default MIcons;
