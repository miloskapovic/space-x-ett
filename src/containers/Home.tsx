import React, { useEffect, useState } from 'react';
import { Accordion } from '@chakra-ui/accordion';
import { Container } from '@chakra-ui/layout';

import RocketItem from '../components/RocketItem';
import { Rocket } from '../generated/graphql';
import useGetRockets from '../hooks/useGetRockets';

interface Props {
    sort: string;
}

const Home: React.FC<Props> = props => {
    let fetchedRockets = useGetRockets() || [];
    const [rockets, setRockets] = useState<Array<Rocket>>([]);
    useEffect(() => {
        setRockets(sortRockets(props.sort, fetchedRockets))
    }, [fetchedRockets])

    useEffect(() => {
        setRockets(sortRockets(props.sort, rockets))
    }, [props.sort])

    const sortRockets = (sort: string, array: Array<any>) => {
        let tempArray = [];
        if (sort == "ASC") {
            tempArray = array.slice().sort((a, b) => {
                var valueA = simplePropertyRetriever(a);
                var valueB = simplePropertyRetriever(b);
                if (valueA < valueB) {
                    return -1;
                } else if (valueA > valueB) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } else {
            tempArray = array.slice().sort((a, b) => {
                var valueA = simplePropertyRetriever(a);
                var valueB = simplePropertyRetriever(b);
                if (valueA > valueB) {
                    return -1;
                } else if (valueA < valueB) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
        return tempArray;
    }

    const simplePropertyRetriever = (obj: any) => {
        return obj.mass?.kg;
    };

    return (
        <>
            <Container maxW="container.xl">
                <Accordion allowMultiple>
                    {rockets.map(rocket =>
                        <RocketItem rocket={rocket} />
                    )}
                </Accordion>
            </Container>
        </>

    );
}

export default Home;