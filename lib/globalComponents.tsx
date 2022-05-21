import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

export const GlobalButton = ({ icon, text }) => {
  return (
    <Button
      leftIcon={icon}
      m="2"
      borderRadius="0px"
      bg="blue.300"
      _hover={{ bg: "blue.200" }}
    >
      {text}
    </Button>
  );
};

export const GlobalInput = ({ placeholder, size, w, display }) => {
  return (
    <Center display={display}>
      <Input
        size={size}
        w={w}
        placeholder={placeholder}
        borderColor="gray.500"
        bg="white"
      />
    </Center>
  );
};

export const GlobalMenuDropDown = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<HamburgerIcon />}>
        Menu
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};
