import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  Spacer,
  Square,
} from "@chakra-ui/layout";

import NextImage from "next/image";
import TopSection from "./sideBarComps/TopSection";
import NextLink from "next/link";
//this is used instead of the a tag. a tags use serverside rendering. this is client side.

const playlists = new Array(30).fill(1);

//remember, Boxes are just divs.
const NavBar = () => {
  const edgeSquareWidth = "200px";
  // const { playlist } = usePlaylist();

  return (
    <Box
      width="100%"
      color="gray.400"
      // borderBottom="2px"
      // borderColor="gray.200"
      boxShadow="md"
    >
      <Flex>
        <Square padding="15px" border="2px">
          <Box width={edgeSquareWidth} maxW={edgeSquareWidth}></Box>
        </Square>
        <Spacer />
        <Center height="100%" width="500px" padding="15px" border="2px">
          <NextImage src="/PartsHouse500px.png" height={60} width={60} />
        </Center>
        <Spacer />
        <Square padding="15px" border="2px">
          <Box width={edgeSquareWidth} maxW={edgeSquareWidth} bg="blue.200">
            <Box>user</Box>
          </Box>
        </Square>
      </Flex>
    </Box>
  );
};

export default NavBar;
