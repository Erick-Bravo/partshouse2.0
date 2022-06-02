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

const RecordCard = () => {
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
          <Accordion defaultIndex={[0]} allowMultiple minWidth="480px">
            <AccordionItem>
              <h2>
                <AccordionButton justifyContent="space-between">
                  <Flex justifyContent="flex-end">Omega-3 Oil</Flex>
                  <AccordionIcon />
                </AccordionButton>
              </h2>

              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
    </>
  );
};

export default RecordCard;
