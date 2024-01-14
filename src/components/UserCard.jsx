import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { MdEmail , MdOutlinePhone, MdHome   } from "react-icons/md";
export default function UserCard({styles, fullName, email, phone, address, dob, onClick}) {
  return (
    <Box  display="flex" alignItems="center" justifyContent="space-between" width="100%"  borderRadius={7} background="#fff" padding={10} {...styles}>
        <Box>
            <Heading as="h6" fontWeight={600} fontSize={30}>{fullName}</Heading>
            <Flex alignItems="center" mt={2}>
            <MdEmail /><Text mr={20} ml={1}>{email}</Text>
            </Flex>
            <Flex alignItems="center" >
            <MdOutlinePhone /><Text ml={2}>{phone}</Text>
            </Flex>
            <Flex alignItems="center" >
            <MdHome  /><Text ml={2}>{address}</Text>
            </Flex>
        </Box>
        {   onClick || dob ?

            <Box textAlign="right">
            {onClick && <Button  onClick={onClick} colorScheme='blue'>Applied Jobs</Button>}
            {dob && <Text mt={2} fontSize={13}>Date of Birth: {dob}</Text>}
        </Box>:""
        }
    </Box>
  )
}
