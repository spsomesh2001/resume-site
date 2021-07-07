import { createGlobalStyle } from "styled-components";

const GlobalContainer = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --red: #FA1414ff;
    --lava: #CC1E20ff;
    --auburn: #9E282Dff;
    --wine: #713339ff;
    --dark-liver: #433D46ff;
    --midnight-green-eagle-green: #154752ff;
    --metallic-seaweed: #127f97eb;
    --monserrat: 'Montserrat', sans-serif;
    --playfair: 'Playfair Display', serif;
  }

  body::-webkit-scrollbar {
    width: 8px;               /* width of the entire scrollbar */
  }

  body::-webkit-scrollbar-track {
    background: #3a3a3a;        /* color of the tracking area */
  }

  body::-webkit-scrollbar-thumb {
    background-color: #1a1a1a;    /* color of the scroll thumb */
    border-radius: 20px;       // roundness of the scroll thumb
  }
`;

export default GlobalContainer;
