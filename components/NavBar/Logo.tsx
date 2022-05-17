import { Box, Center, Text } from "@chakra-ui/react";
import NextImage from "next/image";

const Logo = (props) => {
  return (
    <Box {...props}>
      <NextImage src="/PartsHouse500px.png" height={60} width={60} />
    </Box>
  );
};

export default Logo;
