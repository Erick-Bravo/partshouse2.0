import { CalendarIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import RecordCard from "../components/RecordCard";
import { GlobalButton, GlobalInput } from "../lib/globalComponents";
import { usePartshouse } from "../lib/hooks";
import prisma from "../lib/prisma";
import { desktop, mobile } from "../lib/styles";

// There is a weird x axis scroll even when there is no content pushing width.
// This came up when height="100vh" was changed to "100%"

const Home = () => {
  const { partshouse } = usePartshouse();
  const { storePartsHouse, setPartshouse } = useState();


  return (
    <Flex bg="gray.200" height="100vh">
      <Flex
        height="100%"
        width="100%"
        justify="center"
        pt="150px"
        flexDir="column"
        align="center"
        justifyContent="flex-start"
        bg="gray.200"
        overflow="auto"
      >
        <Box>
          {/* {tempParthouseDisplay} */}
        </Box>
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
        <Flex marginBottom="10px">
          <GlobalButton icon={<SmallAddIcon />} text={"Add Record"} />
          <GlobalButton icon={<CalendarIcon />} text={"Calendar"} />
        </Flex>
        <RecordCard />
        <Box>{/* Why is this not overflowing */}</Box>
      </Flex>
    </Flex>
  );
};

// export const useServerSideProbs = () => {
//   const recordsWithPart = prisma.record.findMany({
//     where: {
//       partsHouseId: //current partshouse
//     }
//   })
// }

export default Home;
