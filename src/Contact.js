import {
    Divider,
    Stack,
    Text,
    Container,
    Box,
    HStack,
    Center,
    Icon,
} from "@chakra-ui/react";

import { IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

export default function Contact() {

    const linkedin = () => {
        window.open('https://www.linkedin.com/in/eden-chung', "_blank", "noreferrer,noopener");
    };  
    const email = () => {
        const emailAddress = "edenchung23@gmail.com";
        const mailtoLink = `mailto:${emailAddress}`;
        window.open(mailtoLink, "_blank");
    };

    return (
        <>
            <Container maxW={"3xl"} id="contact">
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{ base: 8, md: 5 }}
                    pb={{ base: 20, md: 36 }}
                >
                    <Stack align="center" direction="row" p={4}>
                        <Divider orientation="horizontal" />
                            <HStack mx={4}>
                                <Text color="white" fontWeight={800}>
                                    CONTACT
                                </Text>
                            </HStack>
                        <Divider orientation="horizontal" />
                    </Stack>
                    <Text color={"white"} fontSize={"xl"} px={4} mt={12}>
                            Excited to connect! Please message me via LinkedIn or email.
                    </Text>
                    <Center>
                        <HStack spacing={5}>
                            <Box
                                as="button"
                                onClick={linkedin}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                transition="transform 0.2s ease-in-out"
                                _hover={{
                                    cursor: "pointer",
                                    transform: "scale(1.1)",
                                }}
                            >
                                <Icon 
                                    as={IoLogoLinkedin}
                                    onClick={linkedin}
                                    boxSize={10}
                                    color="white"
                                />
                            </Box>
                            <Box
                                as="button"
                                onClick={email}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                transition="transform 0.2s ease-in-out"
                                _hover={{
                                    cursor: "pointer",
                                    transform: "scale(1.1)",
                                }}
                            >
                                <Icon 
                                    as={MdEmail}
                                    onClick={email}
                                    boxSize={10}
                                    color="white"
                                />
                            </Box>
                        </HStack>
                    </Center>
                </Stack>
            </Container>
        </>
    );
}
  
  