import React from "react";
import { CContainer, CDesc, CHeading, CForm, CWrapper, SDiv } from "./ContactElements";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const Contact = () => {

  const STextInp = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "white"
      },
      "& .MuiInputBase-input": {
        color: "white",
        fontFamily: "var(--playfair)",
        letterSpacing: "0.7px",
        fontSize: "15px",
        marginTop: "5px",
      },
      "& .MuiFilledInput-underline:after": {
        borderColor: "white"
      },
      "& .MuiFormLabel-root": {
        color: "white"
      }
    }
  })(TextField);

  var cstyle = {
    textStyle: {
      width: "100%",
      margin: "10px 0",
      borderRadius: "20px",
    },
    btn: {
      margin: "10px 0 10px",
      background: "var(--lava)",
    }
  };

  return (
    <>
      <CContainer>
        <CHeading id="contact">Contact Me</CHeading>
        <CDesc>I am always looking for new opportunities to learn, collobrate and work with fellow developers.</CDesc>
        <CWrapper>
          <CForm action="https://formsubmit.co/4a26177c2afdeb8119ecc09f8d0b7402" method="POST" >
          <STextInp variant="filled" label="Name" name="Name" required style={cstyle.textStyle}></STextInp>
          <STextInp variant="filled" label="Email" name="Email" required style={cstyle.textStyle}></STextInp>
          <STextInp variant="filled" label="Subject" name="Subject" required style={cstyle.textStyle}></STextInp>
          <STextInp variant="filled" label="Enter message" multiline rows={4} name="Message" required style={cstyle.textStyle}></STextInp>
          <input type="hidden" name="_subject" value="Message from resume-site" />
          <SDiv>
            <Button variant="contained" color="primary" style={cstyle.btn} type="submit">Submit</Button>
          </SDiv>
          </CForm>
        </CWrapper>
      </CContainer>
    </>
  );
};

export default Contact;
