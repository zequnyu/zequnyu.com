import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Text } from "@chakra-ui/core";

const Project = (props) => {
  const { title, subTitle, badges, description, links } = props;
  return (
    <Box marginBottom="50px">
      <Flex
        direction={{ base: "column", md: "row" }}
        style={{ margin: "25px" }}
      >
        <Box
          style={{ margin: "0 0 25px" }}
          minWidth={{ md: "180px" }}
          maxWidth={{ md: "180px" }}
        >
          <Flex direction="column" align={{ base: "center", md: "flex-start" }}>
            <Text fontSize="2xl" style={{ fontFamily: "LeituraNews-Roman4" }}>
              {title}
            </Text>
            <Text fontSize="xs" marginBottom="10px">
              {subTitle}
            </Text>
            <Box style={{ fontFamily: "Larsseit" }}>{badges}</Box>
          </Flex>
        </Box>
        <Box style={{ marginTop: "5px" }}>
          <p>{description}</p>
          <Flex style={{ marginTop: "15px" }}>{links}</Flex>
        </Box>
      </Flex>
    </Box>
  );
};

Project.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.element),
  description: PropTypes.element,
  links: PropTypes.arrayOf(PropTypes.element),
};

Project.defaultProps = {
  title: "",
  subTitle: "",
  badges: [],
  description: null,
  links: [],
};

export default Project;
