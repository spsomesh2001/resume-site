import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

import {
  NavContainer,
  NavWrapper,
  LogoCon,
  MobileMenu,
  NavItemsCon,
  NavItem,
  DLink,
  MIcon,
} from "./NavbarElements";
import { SIContainer, SIcon } from "../Footer/FooterElements";
import { GitHub, LinkedIn, Instagram, Facebook } from "@material-ui/icons";
import resume from "../../media/Resume.pdf";

const Navbar = () => {
  var styles = {
    icon: {
      fontSize: "1.8rem",
    },
  };

  const [mmenu, setMmenu] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    if (window.innerWidth < 751) setMmenu(true);
    else setMmenu(false);
    setOpen(false);
  };

  useEffect(() => {
    handleMenu();
  }, []);

  window.addEventListener("resize", () => handleMenu());

  return (
    <>
      <NavContainer>
        <NavWrapper>
          <LogoCon>
            <svg
              viewBox="0 0 136 146"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="136"
                height="146"
              >
                <path
                  d="M87.5 35.101L57.4624 69.343C54.8208 72.3543 55.3984 76.9961 58.6974 79.2681V79.2681C61.45 81.1638 65.1792 80.7382 67.4338 78.2711L75.5 69.4444M87.5 56.3131L75.5 69.4444M75.5 69.4444L95.6852 89.8335C97.1681 91.3314 98 93.354 98 95.4618V124.495"
                  stroke="black"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
                <path
                  d="M89.5 25H53.8113C47.1624 25 43.4152 32.6401 47.4857 37.8975L58.0143 51.4964C62.0848 56.7538 58.3376 64.3939 51.6887 64.3939H16"
                  stroke="black"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="110.5"
                  cy="119.444"
                  rx="5.5"
                  ry="5.55556"
                  fill="black"
                />
                <path
                  d="M5 45V10C5 7.23858 7.23858 5 10 5H45"
                  stroke="black"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
                <path
                  d="M131 101L131 136C131 138.761 128.761 141 126 141L91 141"
                  stroke="black"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
              </mask>
              <g mask="url(#mask0)">
                <rect
                  x="-2"
                  y="-4"
                  width="144"
                  height="159"
                  fill="url(#paint0_linear)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="70"
                  y1="-4"
                  x2="70"
                  y2="155"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FA1414" />
                  <stop offset="1" stopColor="#154752" />
                </linearGradient>
              </defs>
            </svg>
          </LogoCon>

          {mmenu ? (
            <MobileMenu onClick={() => setOpen((o) => !o)}>
              <MIcon o={open}></MIcon>
            </MobileMenu>
          ) : (
            <></>
          )}

          <NavItemsCon o={open} m={mmenu}>
            <NavItem o={open}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                duration={600}
                onClick={() => setOpen((o) => !o)}
              >
                About
              </Link>
            </NavItem>
            <NavItem o={open}>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-35}
                duration={750}
                onClick={() => setOpen((o) => !o)}
              >
                Projects
              </Link>
            </NavItem>
            <NavItem o={open}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={950}
                onClick={() => setOpen((o) => !o)}
              >
                Contact
              </Link>
            </NavItem>
            <NavItem o={open} onClick={() => setOpen((o) => !o)}>
              <DLink href={resume} download="resume">
                Resume
              </DLink>
            </NavItem>
            <SIContainer style={{ marginTop: "30px" }}>
              <SIcon href="https://github.com/spsomesh2001" target="_blank">
                <GitHub style={styles.icon}></GitHub>
              </SIcon>
              <SIcon
                href="https://www.linkedin.com/in/somesh-kirthik-789ba8192?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2A9EYlspS8OthDYD06TdQw%3D%3D"
                target="_blank"
              >
                <LinkedIn style={styles.icon}></LinkedIn>
              </SIcon>
              <SIcon href="" target="_blank">
                <Instagram style={styles.icon}></Instagram>
              </SIcon>
              <SIcon href="" target="_blank">
                <Facebook style={styles.icon}></Facebook>
              </SIcon>
            </SIContainer>
          </NavItemsCon>
        </NavWrapper>
      </NavContainer>
    </>
  );
};

export default Navbar;
