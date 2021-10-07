import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Box, Grid, Text, Image } from '@chakra-ui/react'
import Hero from '../components/Hero'
import { RichText } from '../components/RichText'
import { ImageWithText } from '../components/ImageWithText'

const Home = () => {

  const { fetchAllProducts, products } = useContext(ShopContext)

  useEffect (() => {
    fetchAllProducts()
  }, [fetchAllProducts])

  // console.log(products)

  if (!products) return <div>Loading...</div>

  return (
    <Box>
      <Hero/>
      <RichText
        heading="Heading text"
        text="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
      />
      <Grid templateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(3,1fr)']}>
        {
          products.map(product => (
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Box _hover={{ opacity: '80%' }} textAlign="center" position="relative">
                <Image src={product.images[0].src} h="20rem" w="100%" objectFit="cover"/>
                <Box position="absolute" bottom="5%" textAlign="center" w="100%" fontWeight="bold">
                  <Text>{product.title}</Text>
                  <Text color="gray.500">£{product.variants[0].price}</Text>
                </Box>
              </Box>
            </Link>
          ))
        }
      </Grid>
      <RichText
        heading="Heading text"
      />
      <ImageWithText
        image='https://cdn.shopify.com/s/files/1/0580/1292/6125/products/lime-cut-in-half-on-green-surface_540x_b2161297-2ee8-4b8d-990f-93d71db76292.jpg?v=1631808128'
        heading="Heading text"
        text="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
        url='/'
      />
      <ImageWithText
        reverse
        image='https://cdn.shopify.com/s/files/1/0580/1292/6125/products/teal-phone-against-red_540x_71df48ba-89ef-4093-911e-8eec73f9ca4c.jpg?v=1631808116'
        heading="Heading text"
        text="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
        url='/'
      />
      <ImageWithText
        image='https://cdn.shopify.com/s/files/1/0580/1292/6125/products/a-single-pink-pill-on-a-baby-blue-surface_540x_115b4ab7-0450-4fed-b436-4dc877d0af39.jpg?v=1631808159'
        heading="Heading text"
        text="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
        url='/'
      />
    </Box>
  )
}

export default Home