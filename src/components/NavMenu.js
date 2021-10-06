import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'
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
  Box,
  VStack
} from "@chakra-ui/react"
import { CloseIcon } from '@chakra-ui/icons'

const NavMenu = () => {

  const { isMenuOpen, closeMenu } = useContext(ShopContext)

  return (
    <Drawer
      isOpen={isMenuOpen}
      placement="left"
      onClose={closeMenu}
      size="sm"
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack p="2rem">
              <Link to="/">About Us</Link>
              <Link to="/">Learn More</Link>
              <Link to="/">Contact</Link>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Text>
              Shop name 
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default NavMenu
