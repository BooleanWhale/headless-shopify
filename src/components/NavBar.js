import React, { useContext } from 'react'
import { Flex, Icon, Image, Text } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext'
import { MdMenu, MdShoppingBasket } from 'react-icons/md'

const Navbar = () => {

  const { openCart, openMenu, checkout } = useContext(ShopContext)

  return (
    <Flex background="#FFA8E2" flexDir="row" justifyContent="space-between" p="2rem">
      <Icon fill="white" as={MdMenu} h={30} w={30}/>
      <Image src="https://iconape.com/wp-content/files/zk/93042/svg/react.svg" h={50}/>
      <Icon fill="white" as={MdShoppingBasket} h={30} w={30}
        onClick={() => openCart()}
      />
    </Flex>
  )
}

export default Navbar
