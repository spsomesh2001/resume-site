import React from "react";
import {
  CopyrightCon,
  FooterContainer,
  FooterWrapper,
  SIcon,
  SIContainer,
} from "./FooterElements";
import { GitHub, LinkedIn, Instagram, Facebook } from "@material-ui/icons";

const Footer = () => {
  var styles = {
    icon: {
      fontSize: "1.8rem",
    },
  };

  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <SIContainer>
            <SIcon href="https://github.com/spsomesh2001" target="_blank">
              <GitHub style={styles.icon}></GitHub>
            </SIcon>
            <SIcon href="https://www.linkedin.com/in/somesh-kirthik-789ba8192?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2A9EYlspS8OthDYD06TdQw%3D%3D" target="_blank">
              <LinkedIn style={styles.icon}></LinkedIn>
            </SIcon>
            <SIcon href="" target="_blank">
              <Instagram style={styles.icon}></Instagram>
            </SIcon>
            <SIcon href="" target="_blank">
              <Facebook style={styles.icon}></Facebook>
            </SIcon>
          </SIContainer>

          <CopyrightCon>Created by Somesh Kirthik</CopyrightCon>
          <CopyrightCon>Copyright @ 2021</CopyrightCon>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
