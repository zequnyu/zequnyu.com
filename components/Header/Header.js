import React, { useState } from "react";
import {
  Box,
  Image,
  Flex,
  Link,
  IconButton,
  useColorMode,
} from "@chakra-ui/core";
import { FiMenu } from "react-icons/fi";
import MenuDrawer from "./MenuDrawer";
import MenuButton from "./MenuButton";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box position="fixed" width="100%">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        zIndex="100"
        backgroundColor={colorMode === "light" ? "gray.50" : "gray.900"}
      >
        <Flex align="center" marginLeft={{ base: "0", md: "50px" }}>
          <Link href="/" _hover={{ opacity: 0.5 }}>
            <Image
              size="48px"
              src={colorMode === "light" ? "/logo.png" : "/logo_dark.png"}
            />
          </Link>
        </Flex>

        <Box
          display={{ base: "none", md: "block" }}
          width="300px"
          marginRight="50px"
        >
          <Flex direction="row" justify="space-between">
            <MenuButton mode={colorMode} url="/" text="About" />
            <MenuButton mode={colorMode} url="/" text="Blog" />
            <MenuButton mode={colorMode} url="/" text="Resume" />
            <IconButton
              aria-label="Mode"
              icon="moon"
              variant="ghost"
              _focus={{ outline: 0 }}
              onClick={toggleColorMode}
            />
          </Flex>
        </Box>

        <IconButton
          aria-label="Menu"
          icon={FiMenu}
          variant="ghost"
          _focus={{ outline: 0 }}
          display={{ base: "block", md: "none" }}
          fontSize="24px"
          marginRight="0"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
        <MenuDrawer isOpen={showMenu} closeMenu={setShowMenu} />
      </Flex>
    </Box>
  );
};

export default Header;
