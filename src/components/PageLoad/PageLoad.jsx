import React from "react";
import { motion } from "framer-motion";

import { PLCon, Logo } from "./PageLoadElements";

const PageLoad = () => {
  return (
    <>
      <PLCon>
        <Logo
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{
            x: "calc(-49vw)",
            y: "calc(-49vh)",
            opacity: 0,
            width: 75,
          }}
          transition={{ duration: 0.7, delay: 5 }}
        >
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
              <motion.path
                d="M87.5 35.101L57.4624 69.343C54.8208 72.3543 55.3984 76.9961 58.6974 79.2681V79.2681C61.45 81.1638 65.1792 80.7382 67.4338 78.2711L75.5 69.4444M87.5 56.3131L75.5 69.4444M75.5 69.4444L95.6852 89.8335C97.1681 91.3314 98 93.354 98 95.4618V124.495"
                stroke="black"
                strokeWidth="9"
                strokeLinecap="round"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 3, delay: 1, type: "tween" }}
              />
              <motion.path
                d="M89.5 25H53.8113C47.1624 25 43.4152 32.6401 47.4857 37.8975L58.0143 51.4964C62.0848 56.7538 58.3376 64.3939 51.6887 64.3939H16"
                stroke="black"
                strokeWidth="9"
                strokeLinecap="round"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 3, delay: 1, type: "tween" }}
              />
              <motion.ellipse
                cx="110.5"
                cy="119.444"
                rx="5.5"
                ry="5.55556"
                fill="black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 4, type: "tween" }}
              />
              <motion.path
                d="M5 45V10C5 7.23858 7.23858 5 10 5H45"
                stroke="black"
                strokeWidth="9"
                strokeLinecap="round"
                initial={{ x: 20, y: 20 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 1 }}
              />
              <motion.path
                d="M131 101L131 136C131 138.761 128.761 141 126 141L91 141"
                stroke="black"
                strokeWidth="9"
                strokeLinecap="round"
                initial={{ x: -20, y: -20 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 1 }}
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
        </Logo>
      </PLCon>
    </>
  );
};

export default PageLoad;
