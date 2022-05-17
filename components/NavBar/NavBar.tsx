import {
  Box,
  Center,
  Divider,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  Spacer,
  Square,
} from "@chakra-ui/layout";

import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";

import NextImage from "next/image";
import NextLink from "next/link";
import { MdSupervisorAccount } from "react-icons/md";
import { useState } from "react";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const edgeSquareWidth = "300px";

  return (
    <Flex>
      <Flex pos="fixed" top="1rem" right="1rem" align="center">
        <Flex>
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
        <Switch color="green" isChecked={isDark} onChange={toggleColorMode} paddingLeft="10px" />
      </Flex>
    </Flex>
  );

  // return (
  //   <Box width="100%" color="gray.400" boxShadow="md">
  //     <Flex>
  //       <Square padding="15px" border="2px">
  //         <Box width={edgeSquareWidth} maxW={edgeSquareWidth}></Box>
  //       </Square>
  //       <Spacer />
  //       <Center height="100%" width="500px" padding="15px" border="2px">
  //         <NextImage src="/PartsHouse500px.png" height={60} width={60} />
  //       </Center>
  //       <Spacer />
  //       <Square padding="15px" border="2px">
  //         <Flex>
  //           <Square>
  //             <Box width={edgeSquareWidth} maxW={edgeSquareWidth}>
  //               <UserMenu />
  //             </Box>
  //           </Square>
  //         </Flex>
  //       </Square>
  //     </Flex>
  //   </Box>
  // );
};

export default NavBar;
