import React, {useContext} from 'react'
import { ShopContext } from '../context/shopContext'
import {
  Drawer, 
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Grid,
  Flex,
  Image,
  Text,
  Link
} from "@chakra-ui/react"
import { CloseIcon } from '@chakra-ui/icons'

const Cart = () => {

  const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(ShopContext)

  console.log(checkout)

  return (
    <>
      <Drawer
        isOpen={isCartOpen}
        placement="right"
        onClose={closeCart}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your shopping cart</DrawerHeader>

          <DrawerBody>
            {
              checkout.lineItems && checkout.lineItems.map(item => (
                <Grid templateColumns="repeat(4, 1fr)" gap={1} key={item.id}>
                  <Flex alignItems="center" justifyContent="center">
                    <CloseIcon cursor="pointer" onClick={() => removeLineItem(item.id)} />
                  </Flex>
                  <Flex>
                    <Image src={item.variant.image.src}/>
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Text>
                      {item.variant.title}
                    </Text>
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Text>
                      {item.variant.price}
                    </Text>
                  </Flex>
                </Grid>
              ))
            }
          </DrawerBody>

          <DrawerFooter>
            <Button w="100%">
              <Link href={checkout.webUrl} w="100%" textDecoration="none">
              Checkout
              </Link>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart