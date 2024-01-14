import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import { LuClock9 } from "react-icons/lu";
import parse from "html-react-parser"
export default function AdminUserJobCard({
  styles,
  title,
  lastDate,
  appliedDate,
  onClick,
  coverLetter
}) {
  return (
    <Box
      width="100%"
      borderRadius={7}
      background="#fff"
      padding={10}
      {...styles}
    >
      <Box>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize={17}>Job Title: {title}</Text>
          <Text fontSize={17}>Applied Date: {appliedDate}</Text>
        </Flex>
        <Flex mt={5} alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize={17}>Last Date: {lastDate}</Text>
          <Text >
            Resume:
          <Button ml={10} width="150px" onClick={onClick} colorScheme="blue">
            OPEN
          </Button>
          </Text>
        </Flex>
          <Text fontWeight={700} fontSize={20}>Cover Letter</Text>
        <Box p={2}>
        {parse(coverLetter)}
        </Box >
        
      </Box>
    </Box>
  );
}
