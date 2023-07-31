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
    useColorModeValue,
    createIcon,
    VStack
} from "@chakra-ui/react";

import { IconButton } from '@chakra-ui/react';
import { IoLogoLinkedin, IoLogoGithub, IoLogo } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
  
    export default function Header({ color }) {
        const scrollToContact = () => {
          const contactSection = document.querySelector("#contact");
          contactSection.scrollIntoView({ behavior: "smooth" });
        };

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

    return (
        <>
            <Heading>
            <link
                href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
                rel="stylesheet"
            />
            </Heading>
    
            <Container maxW={"3xl"}>
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{ base: 8, md: 14 }}
                    pb={{ base: 20, md: 36 }}
                    pt={{ base: 36, md: 52 }}
                >
                    <HStack>
                    {/*<Image src="/assets/photo.jpg" alt="Profile image" borderRadius="full" boxSize="150px" objectFit="cover"/>*/}
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                            lineHeight={"110%"}
                            fontFamily="League Spartan"
                            color="white"
                        >
                            <Text>Hello! My name is Eden</Text>
                            <Text as={"span"} color={`${color}.400`} fontSize={"4xl"}>
                                Computer Vision, AI, ML
                            </Text>
                        </Heading>
                    </HStack>
                    <Text
                        color={"gray.500"}
                        fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                    >
                        Contributed to the backend development of the application, the search engine, acquiring proficiency in multiple APIs, including OpenAI, SERP, and Proxycurl, utilizing their capabilities to enhance app functionality.**Developed and implemented 15 search features, including GitHub and personal website search features, doubling the available options, improving user engagement.**Expanded skill set by learning and utilizing AWS with REST APIs, including AWS Amplify and AWS Lambda, lever- aging cloud services to optimize app scalability, performance, and overall user satisfaction
                    </Text>
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
                                transition="transform 0.2s ease-in-out" // Add transition for a smooth effect
                                _hover={{
                                    bg: `${color}.500`,
                                    cursor: "pointer",
                                    transform: "scale(1.1)", // Scale the Icon on hover
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
                                transition="transform 0.2s ease-in-out" // Add transition for a smooth effect
                                _hover={{
                                    bg: `${color}.500`,
                                    cursor: "pointer",
                                    transform: "scale(1.1)", // Scale the Icon on hover
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
                                transition="transform 0.2s ease-in-out" // Add transition for a smooth effect
                                _hover={{
                                    bg: `${color}.500`,
                                    cursor: "pointer",
                                    transform: "scale(1.1)", // Scale the Icon on hover
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

                        {/*
                        <Button
                            bg={"#a368d4"}
                            color="white"
                            rounded={"full"}
                            px={6}
                            _hover={{
                            bg: `${color}.500`,
                            }}
                            onClick={linkedin}
                        >
                            Let's connect!
                        </Button>
                        */}
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}
  