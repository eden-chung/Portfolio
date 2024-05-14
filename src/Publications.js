import {
    chakra,
    Divider,
    VStack,
    Stack,
    Text,
    Container,
    Box,
    HStack,
    Card,
    CardBody,
    Image,
    Heading,
    Link,
    Icon,
} from "@chakra-ui/react";

import { BiLogoJava, BiLogoJavascript, BiLogoMongodb, BiLogoReact, BiLogoHtml5, BiLogoPython, BiSolidFileCss } from 'react-icons/bi';
import { SiTensorflow } from 'react-icons/si';

import cardiologistImage from './images/cardiologist2.png';
import resumeImage from './images/resumeimage.png';
import bttImage from './images/btt.png';
import anoteImage from './images/anote.png';
import spotifyImage from './images/spotify.png';
import columbiaImage from './images/columbia.jpg';
import webserversImage from './images/webservers_copy.jpg';
import C_logo_grey from './images/c_icon_grey.svg';


const imageHeight = "250px";
const cardTextColor = "#1a202c";

const CardWithHoverEffect = chakra(Card, {
    baseStyle: {
        bg: "white",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
            background: "gray.200",
            transform: "scale(1.008)",
        },
    },
});

// Remove underline on hover
const CustomLink = chakra(Link, {
    baseStyle: {
        _hover: {
            textDecoration: "none",
        },
    },
});

export default function Publications() {

    return (
        <>
            <Container maxW={"3xl"} id="projects">
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{ base: 8, md: 14 }}
                    pb={{ base: 20, md: 36 }}
                >
                    <Stack align="center" direction="row" p={4}>
                        <Divider orientation="horizontal" />
                        <HStack mx={4}>
                            <Text color="white" fontWeight={800}>
                                PUBLICATIONS
                            </Text>
                        </HStack>
                        <Divider orientation="horizontal" />
                    </Stack>
                    <Stack px={4} spacing={5}>
                        <VStack>
                            <Box mb={20}>
                                <CustomLink href="https://arxiv.org/abs/2401.09555v1" isExternal>
                                    <div
                                        style={{
                                            transition: "transform 0.3s ease-in-out",
                                            "&:hover": {
                                                transform: "scale(1.1)",
                                            },
                                        }}
                                    >
                                        <CardWithHoverEffect
                                            width="100%"
                                            height="20%"
                                            direction={{
                                                base: "column",
                                            }}
                                            overflow="hidden"
                                        >
                                            <Image objectFit="cover" src={webserversImage} height={imageHeight} />
                                            <Stack>
                                                <CardBody align="left">
                                                    <Heading size="md">Improving Classification Performance With Human Feedback: Label a few, we label the rest</Heading>
                                                    {/* <Text py={2}>Leveraging the sockets API in C, I created an HTTP server and HTTP client from scratch.</Text> */}
                                                    <HStack py={2}>
                                                        <Image src={C_logo_grey} height={8} />
                                                    </HStack>
                                                </CardBody>
                                            </Stack>
                                        </CardWithHoverEffect>
                                    </div>
                                </CustomLink>
                            </Box>
                            <Box mb={20}>
                                <CustomLink href="https://arxiv.org/abs/2404.07221v1" isExternal>
                                    <div
                                        style={{
                                            transition: "transform 0.3s ease-in-out",
                                            "&:hover": {
                                                transform: "scale(1.1)",
                                            },
                                        }}
                                    >
                                        <CardWithHoverEffect
                                            width="100%"
                                            height="20%"
                                            direction={{
                                                base: "column",
                                            }}
                                            overflow="hidden"
                                        >
                                            <Image objectFit="cover" src={webserversImage} height={imageHeight} />
                                            <Stack>
                                                <CardBody align="left">
                                                    <Heading size="md">Improving Retrieval for RAG based Question Answering Models on Financial Documents</Heading>
                                                    {/* <Text py={2}>Leveraging the sockets API in C, I created an HTTP server and HTTP client from scratch.</Text> */}
                                                    <HStack py={2}>
                                                        <Image src={C_logo_grey} height={8} />
                                                    </HStack>
                                                </CardBody>
                                            </Stack>
                                        </CardWithHoverEffect>
                                    </div>
                                </CustomLink>
                            </Box>
                        </VStack>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}
