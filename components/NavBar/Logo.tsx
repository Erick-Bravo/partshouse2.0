import { Box, Center, AspectRatio } from "@chakra-ui/react";
import Image from "next/image";

const Logo = () => {
  return (
    <Box>
      <Center px="20px" >
        <AspectRatio maxW="325px" ratio={45 / 1}>
          <Image src="/textLogo.svg" height="400px" width="1500px" />
        </AspectRatio>
      </Center>
    </Box>
  );
};

export default Logo;
