import React from 'react';

import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    HStack,
    Image,
    Icon,
    useMediaQuery,
    VStack, 
    Center
} from "@chakra-ui/react";

import { IconButton } from '@chakra-ui/react';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

import myImage from './images/myimage2.jpg';
  

const linkedin = () => {
    window.open('https://www.linkedin.com/in/eden-chung', "_blank", "noreferrer,noopener");
};
const github = () => {
    window.open('https://www.github.com/eden-chung', "_blank", "noreferrer,noopener");
};
const email = () => {
    const emailAddress = "edenchung23@gmail.com";
    const mailtoLink = `mailto:${emailAddress}`;
    window.open(mailtoLink, "_blank");
};


export default function Home() {
    const [largerThanMobile] = useMediaQuery("(min-width: 48em)");
    const isMobile = !largerThanMobile;

    return (
        <>
            <Container maxW={"3xl"}>
                {console.log("test")}
                <Stack
                    as={Box}
                    textAlign={"left"}
                    spacing={{ base: 8, md: 14 }}
                    pb={{ base: 20, md: 36 }}
                    pt={{ base: 36, md: 52 }}
                >
                    <HStack align="flex-start" spacing={10}>
                    <Image src={myImage} alt="Profile image" borderRadius="full" boxSize="160px" objectFit="cover"/>
                        <Heading
                            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                            lineHeight={"110%"}
                            color="white"
                            style={{ margin: 0 }}
                        >
                        {isMobile ? (
                            <VStack spacing={3} align="flex-start">
                                <Text fontWeight={700} color="white">Eden Chung</Text>
                                <Text as={"span"} color="white" fontSize={"2xl"} fontWeight={600} mt={1}>
                                    Student at Columbia University, Barnard College
                                </Text>
                                <Text as={"span"} color="white" fontSize={"2xl"} fontWeight={300} mt={1}>
                                    B.A Computer Science, Minor in Mathematics
                                </Text>
                            </VStack>
                        ) : (
                            <VStack spacing={0} align="flex-start">
                                <Text fontWeight={600} color="white">Eden Chung</Text>
                                <Text as={"span"} color="white" fontSize={"2xl"}>
                                    Student at Columbia University, Barnard College
                                </Text>
                                <Text as={"span"} color="white" fontSize={"2xl"} fontWeight={300} mt={-3}>
                                    B.A Computer Science, Minor in Mathematics
                                </Text>
                            </VStack>
                        )}
                        </Heading>
                    </HStack>
                    {/*
                    <Text
                        color={"gray.500"}
                        fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                    >
                        Description TODO
                    </Text>
                    */}
                    <Stack
                        direction={"column"}
                        spacing={10}
                        align={"center"}
                        alignSelf={"center"}
                        position={"relative"}
                    >
                        <HStack spacing={10}>
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
                                    boxSize={20}
                                    color="white"
                                />
                            </Box>
                            <Box
                                as="button"
                                onClick={github}
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
                                as={IoLogoGithub}
                                onClick={github}
                                boxSize={20}
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
                                    boxSize={20}
                                    color="white"
                                />
                            </Box>
                        </HStack>
                    </Stack>
                </Stack>
            </Container>
        </>
    )
};


  