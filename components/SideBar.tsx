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
import { usePlaylist } from "../lib/hooks";
//this is used instead of the a tag. a tags use serverside rendering. this is client side.

const playlists = new Array(30).fill(1);

//remember, Boxes are just divs.
const SideBar = () => {

  const { playlist } = usePlaylist(); 

  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray.400"
    >
      <Box>TOP OF SIDEBAR</Box>
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" padding="20px">
          <NextImage src="/logo.png" height={60} width={120} />
        </Box>

        <TopSection />

        <Divider borderColor="gray.800" marginTop="10px" />

        <Box height="calc(100vh - 405px)" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlist.map((playlist) => (
              <ListItem paddingX="20px" key={playlist.id}>
                <LinkBox>
                  <NextLink href="/" passHref>
                    <LinkOverlay>{`${playlist.name}`}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
          <Box>BOTTOM OF SIDEBAR</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
