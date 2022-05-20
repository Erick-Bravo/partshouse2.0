import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Box,
  Center,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { useState } from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
import { desktop, mobile, two } from "../../lib/styles";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [display, changeDisplay] = useState("none");

  return (
    <>
      {/* Main */}
      <Flex
        pos="absolute"
        top="0"
        align="center"
        w="100vw"
        boxShadow="lg"
        // border={two}
        justifyContent="space-between"
      >
        <Flex px="10px">
          <Logo />
        </Flex>

        <Flex>
          <Flex display={desktop} align="right">
            <NextLink href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my="5" w="100%">
                Home
              </Button>
            </NextLink>

            <NextLink href="/about" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my="5" w="100%">
                About
              </Button>
            </NextLink>

            <NextLink href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my="5" w="100%">
                Logout
              </Button>
            </NextLink>

            <Center>
              <Switch
                color="green"
                isChecked={isDark}
                onChange={toggleColorMode}
                paddingLeft="10px"
                paddingRight="20px"
              />
            </Center>
          </Flex>

          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon />}
            display={mobile}
            onClick={() => changeDisplay("flex")}
          />
        </Flex>
      </Flex>

      {/* DropDown Menu */}
      <Flex
        w="100vw"
        // bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflow="auto"
        flexDir="column"
        display={display}
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Close Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my="5" w="100%">
              Home
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" aria-label="About" my="5" w="100%">
              About
            </Button>
          </NextLink>

          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Logout" my="5" w="100%">
              Logout
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </>
  );
};

export default NavBar;
