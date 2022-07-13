import { CalendarIcon, PhoneIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import { Button, Input, MenuList } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import RecordCard from "../components/RecordCard";
import { Lib_Button, Lib_Input } from "../lib/lib_components";
import { useUser } from "../lib/hooks";
import prisma from "../lib/prisma";
import { desktop, mobile } from "../lib/styles";
import PartsHouseMenu from "../components/MenuDropDowns/PartsHouseMenu";
import { validateToken } from "../lib/auth";
import prettyjson from "prettyjson";

// There is a weird x axis scroll even when there is no content pushing width.
// This came up when height="100vh" was changed to "100%"

const Home = ({ partshouseData }) => {
  interface PartsHouseProps {
    id: number;
    name: string;
    userId: number;
  }

  partshouseData.map(ph => {
    return console.log(prettyjson.render(ph))
  })



  const { userData } = useUser();
  const [currentPartsHouse, setPartsHouse] = useState<PartsHouseProps>({
    id: null,
    name: null,
    userId: null,
  });

  const menuLists = [];

  //Sets PartsHouse and Create a MenuList for each partshouse

  useEffect(() => {
    if (userData) {
      setPartsHouse(userData.partsHouse[0]);
    }
  }, [userData]);

  if (userData) {
    userData.partsHouse.map((ph) => {
      const handleClick = () => {
        setPartsHouse(ph);
      };
      menuLists.push(
        <MenuList onClick={handleClick} key={ph.id}>
          {ph.name}
        </MenuList>
      );
    });
  }

  //Set list of records of selected

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
        {userData ? (
          <Text>You are logged in as {userData.user.email}</Text>
        ) : (
          ""
        )}

        <PartsHouseMenu partsHouse={currentPartsHouse} menuLists={menuLists} />

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
      </Flex>
    </Flex>
  );
};

export const getServerSideProps = async ({ query, req }) => {
  //Note: query will be a string, so id needs to be converted into a number. You can do this with +
  //example: id: +query.id

  const { id } = validateToken(req.cookies.PH_ACCESS_TOKEN);
  const partshouseData = await prisma.partshouse.findMany({
    where: {
      userId: id,
    },
    include: {
      records: {
        include: {
          parts: true,
        },
      },
    },
  });

  return {
    props: { partshouseData },
  };
};

export default Home;
