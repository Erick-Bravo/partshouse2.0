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
//this is used instead of the a tage. a tags use serverside rendering. this is client side.

const playlists = new Array(30).fill(1);

//remember, Boxes are just divs.
const SideBar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray.400"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" padding="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>

        <TopSection />

        <Divider borderColor="gray.800" marginTop="10px" />

        <Box height="calc(100vh - 405px)" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists.map((playlist, i) => (
              <ListItem paddingX="20px" key={playlist}>
                <LinkBox>
                  <NextLink href="/" passHref>
                    <LinkOverlay>{`Playlist ${i + 1}`}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
