import React, {useEffect, useContext} from 'react'
import {useParams, Link} from 'react-router-dom'
import {ShopContext} from '../context/shopContext'
import {
  Box,
  Grid,
  Image,
  Text,
  Button,
  Heading,
  Flex,
  Center
} from '@chakra-ui/react'

const ProductPage = () => {

  const { handle } = useParams();

  const { fetchProductWithHandle, addItemToCheckout, product } = useContext(ShopContext)


  useEffect(() => {
    fetchProductWithHandle(handle)
  }, [fetchProductWithHandle, handle])

  if(!product.id) return <div>Loading...</div>

  return (
    <Box p="2rem">
      <Grid templateColumns={["repeat(1)","repeat(2, 1fr)"]} m="auto">
        <Flex justifyContent="center" align="center">
          <Image src={product.images[0].src}/>
        </Flex>
        <Flex flexDirection="column" alignItems="center" justifyContent="center" px="2rem">
          <Heading pb="2rem">{product.title}</Heading>
          <Text pb="2rem" fontWeight="bold" color="gray.500">{product.variants[0].price}</Text>
          <Text pb="2rem">{product.description}</Text>
          <Button 
            onClick={() => addItemToCheckout(product.variants[0].id, 1)}
            _hover={{ opacity: '70%' }}
            px="2rem" background="#FF38BD" color="white"
          >Add to cart</Button>
        </Flex>
      </Grid>
    </Box>
  )
}

export default ProductPage


 