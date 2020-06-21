import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useColorMode,
} from "@chakra-ui/core";
import MenuButton from "./MenuButton";

const MenuDrawer = ({ isOpen, closeMenu }) => {
  const { colorMode } = useColorMode();

  return (
    <Drawer
      isOpen={isOpen}
      onClose={() => {
        closeMenu(false);
      }}
      placement="right"
    >
      <DrawerOverlay />
      <DrawerContent maxWidth="60%">
        <DrawerCloseButton
          _focus={{ outline: 0 }}
          color={colorMode === "light" ? "gray.800" : "white"}
        />
        <DrawerBody>
          <Box height="100%">
            <Flex
              height="100%"
              direction="column"
              justify="center"
              align="center"
              paddingBottom="100px"
            >
              <MenuButton mode={colorMode} url="/" text="About" />
              <MenuButton mode={colorMode} url="/" text="Blog" />
              <MenuButton mode={colorMode} url="/" text="Resume" />
            </Flex>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

MenuDrawer.propTypes = {
  isOpen: PropTypes.bool,
  closeMenu: PropTypes.func,
};

MenuDrawer.defaultProps = {
  isOpen: false,
  closeMenu: null,
};

export default MenuDrawer;
