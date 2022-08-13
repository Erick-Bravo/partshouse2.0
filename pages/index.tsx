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

  // console.log("ServerSide - " + JSON.stringify(partshouseData));
  // console.log("ServerSide - " + JSON.stringify(partshouseData[1]));
  
  const { userData } = useUser();
  const [currentPartsHouse, setPartsHouse] = useState<PartsHouseProps>({
    id: null,
    name: null,
    userId: null,
  });

  const [currentRecords, setRecords] = useState([]); 
  
  const menuLists = [];
  
  //Sets PartsHouse and Records then Create a MenuList for each partshouse
  
  useEffect(() => {
    if (partshouseData) {
      setPartsHouse(partshouseData[partshouseData.length - 1]);
      setRecords(partshouseData[partshouseData.length - 1].records);
    }
  }, [partshouseData]);

  if (partshouseData) {
    partshouseData.map((ph) => {
      const handleClick = () => {
        setPartsHouse(ph);
        setRecords(ph.records);
      };
      menuLists.unshift(
        <MenuList onClick={handleClick} key={ph.id}>
          {ph.name}
        </MenuList>
      );
    });
  }

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

        {currentRecords.map(rec => {
          return (
            <RecordCard record={rec} key={rec.id} />
          )
        })}
      </Flex>
    </Flex>
  );
};

export const getServerSideProps = async ({ req }) => {

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
