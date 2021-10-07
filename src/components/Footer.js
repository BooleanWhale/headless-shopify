import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Text, Flex, Image, VStack } from '@chakra-ui/react'
 
const Footer = () => {
  return (
    <Box background="#FFA8E2">
      <Grid templateColumns={["repeat(1, 1fr)","repeat(3, 1fr)"]} color="white" fontWeight="bold" p="2rem">
        <Flex justifyContent="center" align="center">
          <Link to="/">
            <Image src="https://iconape.com/wp-content/files/zk/93042/svg/react.svg" h={100} margin="auto"/>
          </Link>
        </Flex>
        <VStack p="2rem">
          <Link to="/">About Us</Link>
          <Link to="/">Learn More</Link>
          <Link to="/">Contact</Link>
        </VStack>
        <VStack p="2rem">
          <Link to="/">About Us</Link>
          <Link to="/">Learn More</Link>
          <Link to="/">Contact</Link>
        </VStack>
      </Grid>
      <Box>
        <Text textAlign="center" color="white" w="100%" borderTop="1px solid white" p="1rem">
          Copyright Company Name
        </Text>
       </Box>
    </Box>
  )
}

export default Footer
