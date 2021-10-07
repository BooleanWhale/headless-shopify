import React, { useContext } from 'react'
import { Flex, Icon, Image, Box, Badge, Text } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'
import { MdMenu, MdShoppingBasket } from 'react-icons/md'

const Navbar = () => {

  const { openCart, openMenu, checkout } = useContext(ShopContext)

  return (
    <Flex background="#FFA8E2" flexDir="row" alignItems="center" justifyContent="space-between" p="2rem">
      <Icon fill="white" as={MdMenu} h={30} w={30} cursor="pointer"
        onClick={() => openMenu()}
      />
      <Link to="/">
        <Image src="https://iconape.com/wp-content/files/zk/93042/svg/react.svg" h={50}/>
      </Link>
      <Box>
        <Icon fill="white" as={MdShoppingBasket} h={30} w={30} cursor="pointer"
          onClick={() => openCart()}
        />
        <Badge backgroundColor="#FF388D" borderRadius="50%">{checkout.lineItems?.length}</Badge>
      </Box>
    </Flex>
  )
}
 
export default Navbar
