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
import { HamburgerIcon } from "@chakra-ui/icons";

//BUTTON
export const Lib_Button = ({ icon, text }) => {
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

//INPUT
export const Lib_Input = ({ placeholder, size, w, display }) => {
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

//MENU-DROPDOWN
export const Lib_MenuDropDown = ({ title = "Menu", menuLists }) => {

  return (
    <>
      <Menu>
        {title === "Menu" ? (
          <MenuButton as={Button} rightIcon={<HamburgerIcon />}>
            Menu
          </MenuButton>
        ) : (
          <MenuButton as={Button}>{title}</MenuButton>
        )}
        <MenuList>
          {menuLists.map(menuitem => {
            return menuitem;
          })}
        </MenuList>
      </Menu>
    </>
  );
};
