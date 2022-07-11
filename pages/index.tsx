import { CalendarIcon, PhoneIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import { Button, Input, MenuList } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import RecordCard from "../components/RecordCard";
import { Lib_Button, Lib_Input } from "../lib/lib_components";
import { useUser, usePartshouse } from "../lib/hooks";
import prisma from "../lib/prisma";
import { desktop, mobile } from "../lib/styles";

// There is a weird x axis scroll even when there is no content pushing width.
// This came up when height="100vh" was changed to "100%"

const Home = () => {
  interface PartsHouseProps { 
    id: number;
    name: string;
    userId: number;
  }

  const { userData } = useUser();
  const [ currentPartsHouse, setPartsHouse ] = useState<undefined | PartsHouseProps>(userData.partsHouse[0]);

  const menuLists = [];

  useEffect(() => {
    if (userData) {
      userData.partsHouse.map(ph => {
        const handleClick = () => {
          setPartsHouse(ph)
        }
        return menuLists.push(<MenuList onClick={handleClick}>{ph.name}</MenuList>)
      })
    }
  }, [userData])

  // const menuList = [
  //   userData.partsHouse.map(ph => {
  //     return (
  //       <MenuList>{ph.name}</MenuList>
  //     )
  //   })
  // ]
  console.log("MENULIST - " + `${userData !== undefined ? userData.partsHouse[0] : "nope"} `)

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
        {userData ? <Text>You are logged in as {userData.user.email}</Text> : "" }
        <Lib_Input
          placeholder="Psuedo Record Search"
          size="lg"
          w="350px"
          display={desktop}
        />
        <Lib_Input
          placeholder="Psuedo Record Search"
          size="md"
          w="280px"
          display={mobile}
        />
        <Flex marginBottom="10px">
          <Lib_Button icon={<SmallAddIcon />} text={"Add Record"} />
          <Lib_Button icon={<CalendarIcon />} text={"Calendar"} />
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
