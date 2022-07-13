import {
  Box,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { FaBrain } from "react-icons/fa";

const RecordCard = ({ record }) => {
  return (
    <>
      <Flex>
        <Flex align="center">
          <FaBrain />
        </Flex>

        <Flex
          border="1px"
          borderColor="gray.300"
          borderRadius="5px"
          m="20px"
          minWidth="480px"
          //   width="500px"
          //   height="140px"
          bg="white"
          //   justifyContent="center"
          //   align="center"
          //   padding="10px"
        >
          <Accordion allowToggle minWidth="480px">
            <AccordionItem>
              <h2>
                <AccordionButton justifyContent="space-between">
                  <Flex justifyContent="flex-end">{record.name}</Flex>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4}>
                {record.brand}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
    </>
  );
};

export default RecordCard;
