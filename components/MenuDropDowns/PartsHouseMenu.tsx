import { ChevronDownIcon } from "@chakra-ui/icons";
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
  Box,
} from "@chakra-ui/react";


const PartsHouseMenu = ({ partsHouse, menuLists }) => {
  return (
  
    <Box p="15px">
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>{partsHouse.name}</MenuButton>
        <MenuList>
          {menuLists.map((list) => {
            return list;
          })}
        </MenuList>
      </Menu>
    </Box>

  );
};

export default PartsHouseMenu
