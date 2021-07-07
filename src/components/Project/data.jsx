import vac_bg from "../../media/vaccine-site/bg.jpg";
import vac_bgm from "../../media/vaccine-site/bgm.jpg";
import vac_v from "../../media/vaccine-site/vac-vid.mp4";

import choco_bg from "../../media/choco-site/bg.jpg";
import choco_bgm from "../../media/choco-site/bgM.jpg";
import choco_v from "../../media/choco-site/vid.mp4";

import p_bg from "../../media/portfolio-site/bg.jpg";
import p_bgm from "../../media/portfolio-site/bgM.jpg";
import p_v from "../../media/portfolio-site/p-vid.mp4";

//Framework SVG icons
import react_svg from "../../media/react-icon.svg";
import nodejs_svg from "../../media/nodejs-icon.svg";
import express_svg from "../../media/expressjs-icon.svg";
import mongodb_svg from "../../media/mongodb-icon.svg";
import js_svg from "../../media/javascript-icon.svg";

export const data = [
  {
    bg: vac_bg,
    bgM: vac_bgm,
    vid: vac_v,
    wurl: "https://vaccine-react-app.herokuapp.com/auth/login",
    wtitle: "Vaccine Site",
    wdesc: "A vaccination record management application.",
    wfw: [react_svg, nodejs_svg, express_svg, mongodb_svg],
    wfwB: [
      "rgba(0,0,0,0.6)",
      "rgba(0,0,0,0.6)",
      "rgba(255,255,255,0.5)",
      "rgba(255,255,255,0.9)",
    ],
  },
  {
    bg: choco_bg,
    bgM: choco_bgm,
    vid: choco_v,
    wurl: "https://spsomesh2001.github.io/choco-site/",
    wtitle: "Choco Site",
    wdesc: "Chocolate E-Commerce Front-End.",
    wfw: [react_svg],
    wfwB: ["rgba(0,0,0,0.6)"],
  },
  {
    bg: p_bg,
    bgM: p_bgm,
    vid: p_v,
    wurl: "https://spsomesh2001.github.io/portfolio-site/",
    wtitle: "Portfolio Site",
    wdesc: "Projects I built when I started out.",
    wfw: [react_svg],
    wfwB: ["rgba(0,0,0,0.6)"],
  },
];

export const abt = {
  t: ["JavaScript", "React", "Node.js", "MongoDB"],
  ti: [js_svg, react_svg, nodejs_svg, mongodb_svg],
  tiB: [
    "rgba(0,0,0,0.6)",
    "rgba(0,0,0,0.6)",
    "rgba(0,0,0,0.6)",
    "rgba(255,255,255,0.9)",
  ],
}
