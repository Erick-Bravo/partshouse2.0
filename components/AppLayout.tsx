import { Box } from "@chakra-ui/layout";
import NextImage from "next/image";
import NavBar from "./NavBar";

const AppLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100%" >
      <Box position="absolute" top="0" width="100vw" left="0">
        <NavBar />
      </Box>
      <Box>
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
