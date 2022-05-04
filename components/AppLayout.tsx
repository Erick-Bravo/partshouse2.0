import { Box } from "@chakra-ui/layout";


const AppLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
       {children}
      </Box>

    </Box>
  );
};

export default AppLayout;
