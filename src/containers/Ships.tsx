import React, { useEffect, useState } from 'react';
import { SimpleGrid } from '@chakra-ui/layout';

import Card from '../components/ImgCard';
import useGetShips from '../hooks/useGetShips';

interface Props {
    sort: string;
}

const Ships: React.FC<Props> = props => {
    const [sort, setSort] = useState<string>(props.sort);
    let ships = useGetShips(sort) || [];

    useEffect(() => {
        setSort(props.sort);
    }, [props.sort])

    return (
        <>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
                {ships.map(ship =>
                    <Card ship={ship} />
                )}
            </SimpleGrid >
        </>
    );
}

export default Ships;