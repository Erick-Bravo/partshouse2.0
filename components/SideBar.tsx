import {
  Box,
  Divider,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
} from "@chakra-ui/layout";

import NextImage from "next/image";
import TopSection from "./sideBarComps/TopSection";
import NextLink from "next/link";
//this is used instead of the a tag. a tags use serverside rendering. this is client side.

const playlists = new Array(30).fill(1);

//remember, Boxes are just divs.
const SideBar = () => {

  // const { playlist } = usePlaylist(); 

  return (
    <Box
      width="100%"
      height="100vh"
      bg="black"
      color="gray.400"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" padding="20px">
          <NextImage src="/logo.png" height={120} width={120} />
        </Box>

        <TopSection />

        <Divider borderColor="gray.800" marginTop="10px" />

      </Box>
    </Box>
  );
};

export default SideBar;
