import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import { Ship } from '../generated/graphql';
import ship from "../images/ship.png"

interface Props {
  ship: Ship;
}

const ImgCard: React.FC<Props> = props => {
  const { image, name, home_port, roles, weight_kg } = props.ship;
  console.log(props)
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          px={6}
          pos={'relative'}
        >
          <Center>
            <Image
              h={'210px'}
              src={image || ship}
              objectFit="cover"
            />
          </Center>
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {name}
          </Heading>
          {home_port &&
            <Text color={'gray.500'}>
              Port: {home_port}
            </Text>
          }
          {roles &&
            <Text color={'gray.500'}>
              Roles: {roles.join()}
            </Text>
          }
          <Text color={'gray.500'}>
            Weight: {weight_kg ? `${weight_kg}kg` : 'unknown'}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}

export default ImgCard;