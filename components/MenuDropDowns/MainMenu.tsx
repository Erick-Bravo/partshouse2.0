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
  
  export const MenuDropDown = () => {
    return (
      <>
        <Menu>
          <MenuButton as={Button} rightIcon={<HamburgerIcon />}>
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>Account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </>
    );
  };