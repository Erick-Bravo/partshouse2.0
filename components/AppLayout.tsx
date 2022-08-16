import { Box } from "@chakra-ui/layout";


const AppLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100%" p="0">
      <Box>
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
