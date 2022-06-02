import { Box } from "@chakra-ui/layout";
import NextImage from "next/image";
import NavBar from "./NavBar/NavBar";

const AppLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100%" overflow="auto">
      <Box position="absolute" top="0" width="100vw" left="0">
        <NavBar />
      </Box>
      <Box overflow="auto">
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
