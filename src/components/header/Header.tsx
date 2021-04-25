import { ReactNode } from 'react';
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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    fontSize={'xl'}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('red.200', 'red.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('red.100', 'red.900')} px={20} py={6}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'lg'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon w={20} h={10} />}
          aria-label={'Open Menu'}
          display={{ md: !isOpen ? 'none' : 'inherit' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box fontSize={'xl'}>Logo</Box>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Button
            variant={'solid'}
            colorScheme={'teal'}
            size={'lg'}
            mr={4}
            leftIcon={<AddIcon />}>
            Action
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default Header;