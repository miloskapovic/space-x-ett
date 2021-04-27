import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  ButtonGroup,
  Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useLocation } from 'react-router';

import logo from "../images/logo.png"
import NextLaunch from '../containers/NextLaunch';


const links = [{ title: 'Rockets', route: "/" }, { title: 'Launch pads', route: "/launchpads" }, { title: 'Ships', route: "/ships" }];

interface Link {
  title: string,
  route: string
}
const NavLink: React.FC<Link> = ({ title, route }) => (
  <Link
    px={2}
    py={1}
    fontSize={'xl'}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('red.200', 'red.700'),
    }}
    href={route}>
    {title}
  </Link>
);

interface Props {
  handleSort: (sort: string) => void;
  sort: string;
}

const Header: React.FC<Props> = props => {
  const { handleSort, sort } = props;
  const location = useLocation()
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('red.100', 'red.900')} px={20} py={6}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'lg'}
          bg={useColorModeValue('red.100', 'red.900')}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon w={20} h={10} />}
          aria-label={'Open Menu'}
          display={{ md: !isOpen ? 'none' : 'inherit' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Image w="100px" src={logo} />
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {links.map((link) => (
              <NavLink key={link.title} title={link.title} route={link.route} />
            ))}
          </HStack>
        </HStack>
        <Flex display={{ base: 'none', md: 'flex' }} alignItems={'center'}>
          {(location.pathname == "/" || location.pathname == "/ships") &&
            <ButtonGroup size="lg" isAttached variant="outline" bg="white" rounded={"lg"} mr={6}>
              <Button colorScheme={sort == "DESC" ? "teal" : ""} variant={sort == "DESC" ? "solid" : "ghost"} mr="-px" onClick={() => handleSort("DESC")}>Heaviest</Button>
              <Button colorScheme={sort == "ASC" ? "teal" : ""} variant={sort == "ASC" ? "solid" : "ghost"} mr="-px" onClick={() => handleSort("ASC")}>Lightest</Button>
            </ButtonGroup>
          }
          <NextLaunch />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4}>
          <Stack as={'nav'} spacing={4}>
            {links.map((link) => (
              <NavLink key={link.title} title={link.title} route={link.route} />
            ))}
            <ButtonGroup alignItems="center" size="lg" isAttached variant="outline" width='min-content' bg="white" rounded={"lg"} mr={6}>
              <Button colorScheme={sort == "DESC" ? "teal" : ""} variant={sort == "DESC" ? "solid" : "ghost"} mr="-px" onClick={() => handleSort("DESC")}>Heaviest</Button>
              <Button colorScheme={sort == "ASC" ? "teal" : ""} variant={sort == "ASC" ? "solid" : "ghost"} mr="-px" onClick={() => handleSort("ASC")}>Lightest</Button>
            </ButtonGroup>
            <NextLaunch />
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default Header;