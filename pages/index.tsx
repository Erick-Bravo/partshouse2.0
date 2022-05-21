import { CalendarIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import { Button, Input } from "@chakra-ui/react";
import { GlobalButton, GlobalInput } from "../lib/globalComponents";
import { desktop, mobile } from "../lib/styles";

const Home = () => {
  return (
    <Flex
      height="100vh"
      width="100vw"
      justify="center"
      pt="150px"
      flexDir="column"
      align="center"
      justifyContent="flex-start"
      border="2px"
      bg="gray.200"
    >
      <GlobalInput
        placeholder="Psuedo Record Search"
        size="lg"
        w="350px"
        display={desktop}
      />
      <GlobalInput
        placeholder="Psuedo Record Search"
        size="md"
        w="280px"
        display={mobile}
      />
      You are signed in as
      <Flex>
        <GlobalButton icon={<SmallAddIcon />} text={"Add Record"} />
        <GlobalButton icon={<CalendarIcon />} text={"Calendar"} />
      </Flex>
    </Flex>
  );
};

export default Home;
