import React from 'react'
import { Box, Button, Text, Image, Center } from "@chakra-ui/react"

const Hero = () => {
  return (
    <Box background="#FFA8E2" w="100%" position="relative" h={["60vh","50vh"]} pb="2rem">
      <Image src="https://iconape.com/wp-content/files/zk/93042/svg/react.svg"  className="scale-in-center"
        h="100%" margin="auto" p="1rem 1rem 10rem" objectFit="contain" objectPosition="top"/>
      <Text 
      position="absolute"
      bottom="15%" width="100%" 
      textAlign="center" color="white" 
      fontWeight="bold" fontSize="4rem">
        Some hero section text
      </Text>
      <Center>
        <Button
          _hover={{ opacity: '70%' }} position="absolute" bottom="8%"
          px="2rem" background="#FF38BD" color="white"
        >
          Shop Now
        </Button>
      </Center>
    </Box>
  )
}

export default Hero
