import {
  Box,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
} from "react-icons/md";
import NextLink from "next/link";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdPlaylistAdd,
    route: "/favorites",
  },
];

const MenuItemsList = ({list}) => {
  return (
    <List spacing={2}>
          {list.map((item) => (
            <ListItem paddingX="20px" fontSize="16px" key={item.name}>
              <LinkBox>
                <NextLink href={item.route} passHref>
                  <LinkOverlay>
                    <ListIcon
                      as={item.icon}
                      color="white"
                      marginRight="20px"
                    />
                    {item.name}
                  </LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
  )
}

const TopSection = () => {
  return (
    <>
      <Box marginBottom="20px">
        <MenuItemsList list={navMenu} />
      </Box>
      <Box marginTop="20px">
        <MenuItemsList list={musicMenu} />
      </Box>
    </>
  );
};

export default TopSection;
