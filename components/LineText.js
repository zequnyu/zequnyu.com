import React from "react";
import PropTypes from "prop-types";
import { Text, useColorMode } from "@chakra-ui/core";

const LineText = (props) => {
  const { colorMode } = useColorMode();
  const { children, heading } = props;

  return (
    <div>
      <Text
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        fontSize={heading ? "4xl" : "2xl"}
        style={{
          fontFamily: heading ? "LeituraNews-Roman3" : "LeituraNews-Roman4",
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        {children}
      </Text>
      <p
        style={{
          margin: "0 auto",
          width: heading ? "80%" : "18%",
          height: heading ? "15px" : "10px",
          background: colorMode === "light" ? "#00bbcc" : "#9b175e",
          opacity: 0.3,
          position: "relative",
          bottom: heading ? "35px" : "25px",
          zIndex: 1,
        }}
      />
    </div>
  );
};

LineText.propTypes = {
  children: PropTypes.string,
  heading: PropTypes.bool,
};

LineText.defaultProps = {
  children: "",
  heading: false,
};

export default LineText;
