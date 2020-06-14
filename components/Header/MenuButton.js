import React from "react";
import PropTypes from "prop-types";
import { Text, Button } from "@chakra-ui/core";

const MenuButton = ({ mode, url, text }) => (
  <Button
    as="a"
    target="_blank"
    href={url}
    variant="ghost"
    size={{ base: "lg", md: "md" }}
    color={mode === "light" ? "gray.800" : "white"}
    _focus={{ outline: 0 }}
  >
    <Text padding={{ base: "20px", md: 0 }} display="block">
      {text}
    </Text>
  </Button>
);

MenuButton.propTypes = {
  mode: PropTypes.string,
  url: PropTypes.string,
  text: PropTypes.string,
};

MenuButton.defaultProps = {
  mode: "light",
  url: "/",
  text: "",
};

export default MenuButton;
