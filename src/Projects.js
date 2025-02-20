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
import { SiJulia, SiTensorflow } from 'react-icons/si';

import cardiologistImage from './images/project_covers/cardiologist2.png';
import resumeImage from './images/project_covers/resumeimage.png';
import bttImage from './images/project_covers/btt.png';
import anoteImage from './images/project_covers/anote.png';
import spotifyImage from './images/project_covers/spotify.png';
import columbiaImage from './images/project_covers/columbia.jpg';
import webserversImage from './images/project_covers/webservers.jpg';
import C_logo_grey from './images/c_icon_grey.svg';
import gpu from './images/project_covers/gpu.jpg';
import galacticGestures from './images/project_covers/galactic_gestures.png'


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
            <Box mb={20} position="relative">
                <CustomLink href="https://github.com/eden-chung/Galactic-Gestures" isExternal>
                  <div style={{ transition: "transform 0.3s ease-in-out" }}>
                    <CardWithHoverEffect
                      width="100%"
                      height="20%"
                      direction={{ base: "column" }}
                      overflow="hidden"
                    >
                      <Image objectFit="cover" src={galacticGestures} height={imageHeight} />
                      <Stack>
                        <CardBody align="left">
                          <Heading size="md">Galactic Gestures</Heading>
                          <Text py={2}> Deep learning gesture classification applied to Space Invaders. Custom deep learning pipelines were created and applied for real-time video feed classification. </Text>
                          <HStack py={2} justifyContent="space-between">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              <Icon as={BiLogoPython} color="gray.700" boxSize={10} />
                            </div>
                          </HStack>
                        </CardBody>
                      </Stack>
                    </CardWithHoverEffect>
                  </div>
                </CustomLink>
                <button
                  style={{
                    position: 'absolute', // Position the button absolutely within the relative Box
                    right: '20px', // Position to the right
                    bottom: '20px', // Position at the bottom
                    zIndex: 10, // Ensure it is above other elements
                    border: '1px solid black',
                    padding: '8px 16px',
                    cursor: 'pointer',
                    backgroundColor: 'white',
                    transition: 'background-color 200ms, color 200ms',
                    borderRadius: '8px',
                  }}
                  onClick={() => window.open("https://github.com/eden-chung/Galactic-Gestures/blob/main/Galactic_Gestures_Final_report.pdf", "_blank", "noopener,noreferrer")}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'gray';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = 'black';
                  }}
                >
                  See paper
                </button>
              </Box>
              <Box mb={20} position="relative">
                <CustomLink href="https://github.com/eden-chung/RNEA_GPU_Parallelization" isExternal>
                  <div style={{ transition: "transform 0.3s ease-in-out" }}>
                    <CardWithHoverEffect
                      width="100%"
                      height="20%"
                      direction={{ base: "column" }}
                      overflow="hidden"
                    >
                      <Image objectFit="cover" src={gpu} height={imageHeight} />
                      <Stack>
                        <CardBody align="left">
                          <Heading size="md">RNEA GPU Parallelization</Heading>
                          <Text py={2}>Optimized GPU-based parallelization of robotics inverse dynamics algorithms for enhanced performance. Julia and Python.</Text>
                          <HStack py={2} justifyContent="space-between">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              <Icon as={BiLogoPython} color="gray.700" boxSize={10} />
                              <Icon as={SiJulia} color="gray.700" boxSize={8} />
                            </div>
                          </HStack>
                        </CardBody>
                      </Stack>
                    </CardWithHoverEffect>
                  </div>
                </CustomLink>
                <button
                  style={{
                    position: 'absolute', // Position the button absolutely within the relative Box
                    right: '20px', // Position to the right
                    bottom: '20px', // Position at the bottom
                    zIndex: 10, // Ensure it is above other elements
                    border: '1px solid black',
                    padding: '8px 16px',
                    cursor: 'pointer',
                    backgroundColor: 'white',
                    transition: 'background-color 200ms, color 200ms',
                    borderRadius: '8px',
                  }}
                  onClick={() => window.open("https://github.com/eden-chung/RNEA_GPU_Parallelization/blob/main/RNEA_GPU_Paralellization_paper.pdf", "_blank", "noopener,noreferrer")}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'gray';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = 'black';
                  }}
                >
                  See paper
                </button>
              </Box>
              <Box mb={20}>
                <CustomLink href="https://gist.github.com/eden-chung/bbb2af0e035835e4fd1c22aa196adda8" isExternal>
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
                          <Heading size="md">HTTP Client and Server</Heading>
                          <Text py={2}>Leveraging the sockets API in C, I created an HTTP server and HTTP client from scratch.</Text>
                          <HStack py={2}>
                            <Image src={C_logo_grey} height={8} />
                          </HStack>
                        </CardBody>
                      </Stack>
                    </CardWithHoverEffect>
                  </div>
                </CustomLink>
              </Box>
              {/* <Box mb={20}>
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
                      <Image objectFit="cover" src={anoteImage} height={imageHeight} />
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
              </Box> */}
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
                      <Image objectFit="cover" src={bttImage} height={imageHeight} />
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
                      <Image objectFit="cover" src={resumeImage} height={imageHeight} />
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
                <CustomLink href="https://github.com/eden-chung/divhacks2023" isExternal>
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
                      <Image objectFit="cover" src={columbiaImage} height={imageHeight} />
                      <Stack>
                        <CardBody align="left">
                          <Heading size="md">Columbia Book Exchange - Hackathon Project</Heading>
                          <Text py={2}>Web app made for Columbia students to buy/sell or lend textbooks and core class books. Winner of DivHacks 2023!</Text>
                          <HStack py={2}>
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
              <Box mb={20}>
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
                      <Image objectFit="cover" src={spotifyImage} height={imageHeight} />
                      <Stack>
                        <CardBody align="left">
                          <Heading size="md">Spotify Discover Mobile App</Heading>
                          <Text py={2}>Mobile application that uses the Spotify API to retrieve information about songs and artists, analyze users' playlists, and includes a guess the song game. Developed using React Native.</Text>
                          <HStack py={2}>
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
              {/* <Box mb={-12}>
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
                      <Image objectFit="cover" src={cardiologistImage} height={imageHeight} />
                      <Stack>
                        <CardBody align="left">
                          <Heading size="md" style={{ color: cardTextColor }}>Virtual Cardiology Assistant</Heading>
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
              </Box> */}
            </VStack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}