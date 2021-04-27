import {
    Box,
    Heading,
    Text,
    useColorModeValue,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Grid,
    GridItem,
    VStack
} from '@chakra-ui/react';

import { Rocket } from '../generated/graphql';

interface Props {
    rocket: Rocket
}

const RocketItem: React.FC<Props> = props => {
    const { name, description, country, mass, company, cost_per_launch, first_flight, success_rate_pct, wikipedia } = props.rocket;

    return (
        <>
            <AccordionItem p={5} my={5} border="1px" borderColor={'gray.500'} bg={'gray.100'} rounded={'lg'} boxShadow={'2xl'}>
                <AccordionButton outline="0">
                    <Box flex="1" textAlign="center">
                        <Heading size="lg" fontFamily={'body'} color={useColorModeValue('gray.700', 'white')}>
                            {name}
                        </Heading>
                    </Box>
                    <AccordionIcon w={10} h={10} />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <Grid
                        templateColumns="repeat(7, 1fr)"
                        gap={4}
                    >
                        <GridItem colSpan={3}>
                            <Text color={'gray.500'}>
                                {description}
                            </Text>
                        </GridItem>
                        <GridItem pl={2} colSpan={2}>
                            <VStack
                                spacing={4}
                                align="stretch"
                            >
                                <Text color={'gray.500'}>
                                    Country: {country}
                                </Text>
                                <Text color={'gray.500'}>
                                    Mass: {mass?.kg}kg
                                </Text>
                                <Text color={'gray.500'}>
                                    Company: {company}
                                </Text>
                            </VStack>
                        </GridItem>
                        <GridItem pl={2} colSpan={2}>
                            <VStack
                                spacing={4}
                                align="stretch"
                            >
                                <Text color={'gray.500'}>
                                    Cost per lunch: {cost_per_launch}
                                </Text>
                                <Text color={'gray.500'}>
                                    First flight: {first_flight}
                                </Text>
                                <Text color={'gray.500'}>
                                    Success rate: {success_rate_pct}
                                </Text>
                            </VStack>
                        </GridItem>
                    </Grid>
                </AccordionPanel>
            </AccordionItem>

        </>
    );
}

export default RocketItem;