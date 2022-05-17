import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";

import NextImage from "next/image";
import NextLink from "next/link";
import { useState } from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [display, changeDisplay] = useState("none");

  return (
    <Flex>
      <Flex pos="fixed" top="1rem" right="1rem" align="center">
        <Flex display={["none", "none", "flex", "flex"]}>
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
        </Flex>

        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          display={["flex", "flex", "none", "none"]}
          onClick={() => changeDisplay("flex")}
        />

        <Switch
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
          paddingLeft="10px"
        />
      </Flex>

      <Flex
        w="100vw"
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflow="auto"
        flexDir="column"
        display={display}
      >
        <Flex justify="flex-end" >
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
            <Button as="a" variant="ghost" aria-label="Home" my="5" w="100%">
              About
            </Button>
          </NextLink>

          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my="5" w="100%">
              Logout
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
