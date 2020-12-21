import React from "react";
import PropTypes from "prop-types";
import { Text, useColorMode } from "@chakra-ui/react";

const LineText = (props) => {
  const { colorMode } = useColorMode();
  const { children, heading } = props;
  const isHeading = heading === "true";

  return (
    <div>
      <Text
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        fontSize={isHeading ? "4xl" : "2xl"}
        style={{
          fontFamily: isHeading ? "LeituraNews-Roman3" : "LeituraNews-Roman4",
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
          width: isHeading ? "80%" : "18%",
          height: isHeading ? "15px" : "10px",
          background: colorMode === "light" ? "#00bbcc" : "#9b175e",
          opacity: 0.3,
          position: "relative",
          bottom: isHeading ? "35px" : "25px",
          zIndex: 1,
        }}
      />
    </div>
  );
};

LineText.propTypes = {
  children: PropTypes.string,
  heading: PropTypes.string,
};

LineText.defaultProps = {
  children: "",
  heading: "",
};

export default LineText;
