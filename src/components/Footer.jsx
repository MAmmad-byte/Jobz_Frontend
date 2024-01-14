import React from 'react'
import PageLayout from './PageLayout'
import { Box, Text } from '@chakra-ui/react'
import TextEditor from './textEditor'
export default function Footer() {
  return (
    <Box alignSelf={"flex-end"} width={"100%"} padding="10px 0" background="teal" color="#fff" >
       
    <PageLayout>
    <Text textAlign="center">Copy Right 2024 | All Right Reserved</Text>
    {/* <TextEditor placeholder={"Write Sometibng"} /> */}
  </PageLayout>
      </Box>
  )
}
