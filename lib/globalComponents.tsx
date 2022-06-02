import {
  Button,
  Center,
  Input
} from "@chakra-ui/react";

export const GlobalButton = ({ icon, text }) => {
  return (
    <Button
      leftIcon={icon}
      m="2"
      borderRadius="0px"
      bg="blue.300"
      _hover={{ bg: "blue.200" }}
    >
      {text}
    </Button>
  );
};

export const GlobalInput = ({ placeholder, size, w, display }) => {
  return (
    <Center display={display}>
      <Input
        size={size}
        w={w}
        placeholder={placeholder}
        borderColor="gray.500"
        bg="white"
      />
    </Center>
  );
};
