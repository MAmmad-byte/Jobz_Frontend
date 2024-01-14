import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { LuClock9 } from "react-icons/lu";
export default function JobCard({styles, title, city, country, jobType, lastDate, onClick}) {
  return (
    <Box  display="flex" alignItems="center" justifyContent="space-between" width="100%"  borderRadius={7} background="#fff" padding={10} {...styles}>
        <Box>
            <Heading as="h6" fontWeight={600} fontSize={30}>{title}</Heading>
            <Flex alignItems="center" mt={2}>
            <MdLocationPin/><Text mr={20} ml={1}>{city}, {country}</Text>
            <LuClock9/><Text ml={2}>{jobType}</Text>
            </Flex>
        </Box>
        <Box textAlign="right">
            <Button  onClick={onClick} colorScheme='blue'>Apply Now</Button>
            <Text mt={2} fontSize={13}>Last Date: {lastDate}</Text>
        </Box>
    </Box>
  )
}
