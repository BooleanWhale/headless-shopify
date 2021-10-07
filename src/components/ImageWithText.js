import React from 'react'
import { Text, Image, Box, Button, Flex, Heading } from "@chakra-ui/react"

export const ImageWithText = ({ reverse, image, heading, text, url }) => {

  const reverseSection = reverse ? 'row-reverse' : 'row'

  return (
    <Box>
      <Flex flexDir={['column',reverseSection]} width="100%">
        <Image src={image} objectFit="cover" w={['100%', '50%']} h={['20rem', '24rem']}/>
        <Flex w={['100%','50%']} flexDir="column" justifyContent="center" alignItems="center" p="2rem"> 
          <Heading pb="1rem">
            { heading && heading }
          </Heading>
          <Text pb="1rem">
            { text && text }
          </Text>
          { url && 
            <Button
              _hover={{ opacity: '70%' }}
              px="2rem" background="#FF38BD" color="white"
            >Shop Now</Button>
           }
        </Flex>
      </Flex>
    </Box>
  )
}
