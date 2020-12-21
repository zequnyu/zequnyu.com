import React, { useState } from "react";
import {
  Box,
  Image,
  Flex,
  Link,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import MenuDrawer from "./MenuDrawer";
import MenuButton from "./MenuButton";
import LoadingModal from "./LoadingModal";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { colorMode } = useColorMode();

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

        <Box width={{ base: "50px", md: "300px" }} marginRight="50px">
          <Flex justify="space-between">
            <Box>
              <LoadingModal />
            </Box>
            <Box display={{ base: "none", md: "block" }}>
              <Flex
                height="100%"
                width="250px"
                direction="row"
                justify="space-around"
              >
                <MenuButton mode={colorMode} url="/" text="About" />
                <MenuButton mode={colorMode} url="/" text="Blog" />
                <MenuButton mode={colorMode} url="/" text="Resume" />
              </Flex>
            </Box>
            <Box>
              <IconButton
                aria-label="Menu"
                icon={FiMenu}
                variant="ghost"
                _focus={{ outline: 0 }}
                display={{ base: "block", md: "none" }}
                fontSize="24px"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              />
            </Box>
          </Flex>
        </Box>
        <MenuDrawer isOpen={showMenu} closeMenu={setShowMenu} />
      </Flex>
    </Box>
  );
};

export default Header;
