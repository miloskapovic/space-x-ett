import React from 'react';
import {
    Button,
    Heading,
    Text
} from '@chakra-ui/react'; import { useDisclosure } from '@chakra-ui/hooks';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal';

import useGetNextLaunch from '../hooks/useGetNextLaunch';

const NextLaunch: React.FC = () => {
    const nextLaunch = useGetNextLaunch() || {};
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { mission_name, launch_date_local, launch_date_utc, launch_site, details } = nextLaunch;

    return (
        <>
            <Button size="lg" variant='solid' colorScheme="teal" onClick={onOpen}>Next Launch</Button>

            <Modal isOpen={isOpen} onClose={onClose} size="lg">
                <ModalOverlay />
                <ModalContent textAlign="center">
                    <ModalHeader fontSize="xx-large">{mission_name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody p={6}>
                        {details &&
                            <>
                                <Heading my={3} size="md">Details</Heading>
                                <Text color={'gray.500'}>
                                    {details}
                                </Text>
                            </>
                        }
                        {launch_site?.site_name_long &&
                            <>
                                <Heading my={3} size="md">Site Name</Heading>
                                <Text color={'gray.500'}>
                                    {launch_site.site_name_long}
                                </Text>
                            </>
                        }
                        {launch_date_local &&
                            <>
                                <Heading my={3} size="md">Local launch date</Heading>
                                <Text color={'gray.500'}>
                                    {launch_date_local}
                                </Text>
                            </>
                        }
                        {launch_date_utc &&
                            <>
                                <Heading my={3} size="md">Utc launch date</Heading>
                                <Text color={'gray.500'}>
                                    {launch_date_utc}
                                </Text>
                            </>
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default NextLaunch;
