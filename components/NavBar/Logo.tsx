import { Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import { desktop, mobile } from "../../lib/styles";

const Logo = () => {
  return (
    <Box>
      <Center>
        <Image src="/textLogo.png" height="63.53px" width="300px"/>
      </Center>
    </Box>
  );
};

export default Logo;
