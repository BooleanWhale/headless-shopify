import React from 'react'
import { Text, Box, Heading, Center } from '@chakra-ui/react'

export const RichText = ({ heading, text }) => {
  return (
    <Box>
      <Center display="flex" flexDir="column" textAlign="center">
        <Heading p="4rem 0 2rem">
          { heading && heading }
        </Heading>
        <Text pb="4rem">
          { text && text }
        </Text>
      </Center>
    </Box>
  )
}