import { Box } from "@chakra-ui/layout";
import NextImage from "next/image";
import SideBar from "./SideBar";

const AppLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100%">
      <Box position="absolute" top="0" width="250px" left="0">
        <SideBar />
      </Box>
      <Box>
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
