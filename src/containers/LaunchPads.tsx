import { SimpleGrid } from '@chakra-ui/layout';
import React from 'react';

import LaunchPad from '../components/LaunchPad';
import useGetLaunchPads from '../hooks/useGetLaunchPads';

const LaunchPads: React.FC = () => {
    const launchpads = useGetLaunchPads() || [];

    return (
        <>
        <SimpleGrid  columns={{ base: 1, xl: 2}} spacing={6}>
            {launchpads.map(launchpad => 
                <LaunchPad launchpad={launchpad} />
            )}
        </SimpleGrid>
        </>
    );
  }
  
  export default LaunchPads;