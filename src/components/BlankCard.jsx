import { Box } from '@chakra-ui/react'
import React from 'react'

export default function BlankCard({children, styles}) {
  return (
    <Box  display="flex" alignItems="center" justifyContent="center" width="100%"  borderRadius={7} background="#fff" padding={10} {...styles}>{children}</Box>
  )
}
