import { Box, Center, Text } from "@chakra-ui/react";
import NextImage from "next/image";

const Logo = () => {
  return (
    <Box>
      <NextImage src="/PartsHouse500px.png" height={80} width={80} />
    </Box>
  );
};

export default Logo;
