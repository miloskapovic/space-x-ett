import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Image,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    border,
    Grid,
    GridItem,
    Wrap,
    WrapItem,
    VStack,
    StackDivider,
    SimpleGrid,
    Flex,
    HStack
  } from '@chakra-ui/react';
import { Launchpad, Rocket } from '../generated/graphql';
import Map from './Map';
  interface Props {
    launchpad: Launchpad
  }

  const LaunchPad: React.FC<Props> = props => {
    const { name, location, status, details } = props.launchpad;

    const calcCrow = (lat1: number, lon1: number, lat2: number, lon2: number) =>
    {
      var R = 6371;
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      var lat1 = toRad(lat1);
      var lat2 = toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    }

    const toRad = (Value: number) => {
        return Value * Math.PI / 180;
    }

    return (
        <Flex flexDirection={{ base: 'column', lg: 'row' }} p={6} border="1px" borderColor={'gray.500'} columns={[null, null, null, null, 1, 2]} spacing={6}>
            <Box>
                <Heading mb={6}>{name}</Heading>
                <Text mb={6} color={'gray.500'}>
                    {details}
                </Text>
                <Stack direction={{ base: "row", lg: "column"}} spacing={6} mb={6}>
                    {location?.name &&
                        <Text color={'gray.500'}>
                            Location: {location.name}
                        </Text>
                    }
                    {location?.region &&
                        <Text color={'gray.500'}>
                            Region: {location.region}
                        </Text>
                    }
                    {location?.latitude && location?.longitude &&
                        <Text color={'gray.500'}>
                            Fly distance from Skelleftea: {calcCrow(64.7507, 20.9528, location.latitude, location.longitude).toFixed(1)}km
                        </Text>
                    }
                    {status &&
                        <Text color={'gray.500'}>
                            Status: {status}
                        </Text>
                    }
                </Stack>
            </Box>
            <Box flexShrink={0} width={350} height={350} bg="gray" ml={6} rounded="xl" alignItems="center" alignContent="center">
                {(location?.latitude && location.longitude) &&
                    <Map lat={location?.latitude} lng={location?.longitude} />
                }
                {(!location?.latitude || !location.longitude) &&
                    <Center h={350} fontSize="xl">
                        Unknown location
                    </Center>
                }
            </Box>
        </Flex>
    );
  }
  
  export default LaunchPad;