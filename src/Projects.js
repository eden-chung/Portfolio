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

export default function Projects() {
      
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
                                    PROJECTS
                                </Text>
                            </HStack>
                        <Divider orientation="horizontal" />
                    </Stack>
                    <Stack px={4} spacing={5}>
                        <VStack>
                        <Box mb={20}>
                                <CustomLink href="https://github.com/eden-chung/AnoteML" isExternal>
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
                                            <Image objectFit="cover" src={anoteImage} height={imageHeight}/>
                                            <Stack>
                                                <CardBody align="left">
                                                    <Heading size="md">Anote AI, Break Through Tech Project</Heading>
                                                    <Text py={2}>A collaboration with the NYC-based, AI startup named Anote, this project consists of a fine-tuned generative AI, LLM model built specifically to answer questions on financial documents. Natural language processing techniques were used, along with prompt engineering, fine-tuning, and retrieval augmented generation (RAG) to create a industry-specific LLM.</Text>
                                                    <HStack py={2}>
                                                        <Icon
                                                            as={BiLogoPython}
                                                            color="gray.700"
                                                            boxSize={10}
                                                        />
                                                    </HStack>
                                                </CardBody>
                                            </Stack>
                                        </CardWithHoverEffect>
                                    </div>
                                </CustomLink>
                            </Box>
                            <Box mb={20}>
                                <CustomLink href="https://github.com/eden-chung/BreakThroughTechAI" isExternal>
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
                                            <Image objectFit="cover" src={bttImage} height={imageHeight}/>
                                            <Stack>
                                                <CardBody align="left">
                                                    <Heading size="md">Break Through Tech, Machine Learning Models</Heading>
                                                    <Text py={2}>Throughout an intensive 8-week course, I developed various ML models, beginning with simple models such as K Nearest Neighbors, Decision Trees, Logistic Regression, then moving on to Natural Language Processing and Neural Networks. Used Python libraries such as Scikit-learn and Tensorflow. I have compiled my work from this course in this GitHub repo.</Text>
                                                    <HStack py={2}>
                                                        {/*
                                                        <a href={"www.linkedin.com"}>
                                                            <Button color="{gray.800}">
                                                                GitHub Link
                                                            </Button>
                                                            </a>
                                                        */}
                                                        <Icon
                                                            as={BiLogoPython}
                                                            color="gray.700"
                                                            boxSize={10}
                                                        />
                                                        <Icon
                                                            as={SiTensorflow}
                                                            color="gray.700"
                                                            boxSize={8}
                                                        />
                                                    </HStack>
                                                </CardBody>
                                            </Stack>
                                        </CardWithHoverEffect>
                                    </div>
                                </CustomLink>
                            </Box>
                            <Box mb={20}>
                                <CustomLink href="https://github.com/eden-chung/ResumeBuilder" isExternal>
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
                                        <Image objectFit="cover" src={resumeImage} height={imageHeight}/>
                                        <Stack>
                                            <CardBody align="left">
                                                <Heading size="md">Resume Builder</Heading>
                                                <Text py={2}>A desktop application to automate resume making: the user inputs their information into set text fields, and the application will automatically generate a nicely formatted PDF. Application created in Java and Swing.</Text>
                                                <HStack py={2}>
                                                    {/*
                                                    <a href={"www.linkedin.com"}>
                                                        <Button color="{gray.800}">
                                                            GitHub Link
                                                        </Button>
                                                        </a>
                                                    */}
                                                    <Icon
                                                        as={BiLogoJava}
                                                        color="gray.700"
                                                        boxSize={10}
                                                    />
                                                </HStack>
                                            </CardBody>
                                        </Stack>
                                    </CardWithHoverEffect>
                                </div>
                                </CustomLink>
                            </Box>
                            <Box mb={20}>
                                <CustomLink href="https://github.com/eden-chung/CardiologistAssistantML" isExternal>
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
                                            <Image objectFit="cover" src={cardiologistImage} height={imageHeight}/>
                                            <Stack>
                                            <CardBody align="left">
                                                <Heading size="md" style={{color: cardTextColor}}>Virtual Cardiology Assistant</Heading>
                                                <Text py={2}>Intelligent virtual assistant for cardiologists, with data collection and processing through a K Nearest Neighbors ML model. Website made with Python (Flask), HTML, and CSS. Data stored in a NoSQL database, MongoDB.</Text>
                                                <HStack py={2}>
                                                    <Icon
                                                        as={BiLogoPython}
                                                        color="gray.700"
                                                        boxSize={10}
                                                    />
                                                    <Icon
                                                        as={BiLogoHtml5}
                                                        color="gray.700"
                                                        boxSize={10}
                                                    />
                                                    <Icon
                                                        as={BiSolidFileCss}
                                                        color="gray.700"
                                                        boxSize={10}
                                                    />
                                                    <Icon
                                                        as={BiLogoMongodb}
                                                        color="gray.700"
                                                        boxSize={10}
                                                    />
                                                </HStack>
                                            </CardBody>
                                            </Stack>
                                        </CardWithHoverEffect>
                                    </div>
                                </CustomLink>
                            </Box>
                            <Box mb={-12}>
                                <CustomLink href="https://github.com/eden-chung/SpotifyReact" isExternal>
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
                                            <Image objectFit="cover" src={spotifyImage} height={imageHeight}/>
                                            <Stack>
                                                <CardBody align="left">
                                                    <Heading size="md">Spotify Discover Mobile App</Heading>
                                                    <Text py={2}>Mobile application that uses the Spotify API to retrieve information about songs and artists, analyze users' playlists, and includes a guess the song game. Developed using React Native.</Text>
                                                    <HStack py={2}>
                                                        {/*
                                                        <a href={"www.linkedin.com"}>
                                                            <Button color="{gray.800}">
                                                                GitHub Link
                                                            </Button>
                                                            </a>
                                                        */}
                                                        <Icon
                                                            as={BiLogoJavascript}
                                                            color="gray.700"
                                                            boxSize={10}
                                                        />
                                                        <Icon
                                                            as={BiLogoReact}
                                                            color="gray.700"
                                                            boxSize={10}
                                                        />
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
  