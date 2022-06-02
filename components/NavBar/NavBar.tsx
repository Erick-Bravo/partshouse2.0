import {
  Switch,
  Flex,
  Button,
  IconButton,
  Box,
  Center,
} from "@chakra-ui/react";

import NextLink from "next/link";
import Logo from "./Logo";
import { desktop, mobile, two } from "../../lib/styles";
import { MenuDropDown } from "./MenuDropDown";

const NavBar = () => {
  return (
    <>
      {/* Main */}
      <Flex
        pos="absolute"
        top="0"
        align="center"
        w="100vw"
        boxShadow="lg"
        bg="white"
        justifyContent="space-between"
      >
        <Flex px="10px">
          <NextLink href="/" passHref>
            <Box as="a">
              <Logo />
            </Box>
          </NextLink>
        </Flex>

        <Flex>
          <Flex display={desktop} align="right" mx="20px">
            <NextLink href="/" passHref>
              <Button
                as="a"
                variant="ghost"
                size="lg"
                aria-label="Home"
                my="5"
                w="100%"
              >
                Home
              </Button>
            </NextLink>

            <NextLink href="/about" passHref>
              <Button
                as="a"
                variant="ghost"
                size="lg"
                aria-label="Home"
                my="5"
                w="100%"
              >
                About
              </Button>
            </NextLink>

            <NextLink href="/" passHref>
              <Button
                as="a"
                variant="ghost"
                size="lg"
                aria-label="Home"
                my="5"
                w="100%"
              >
                Logout
              </Button>
            </NextLink>
          </Flex>

          <Box display={mobile} mx="25px">
            <MenuDropDown />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default NavBar;
