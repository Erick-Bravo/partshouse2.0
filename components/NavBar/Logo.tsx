import { Box, Center, Text } from "@chakra-ui/react";
import Image from "next/image";
import { desktop, mobile } from "../../lib/styles";

const Logo = () => {
  return (
    <Box>
      <Center px="20px" >
        <Image src="/textLogo.svg" height="88" width="325px" />
      </Center>
    </Box>
  );
};

export default Logo;
