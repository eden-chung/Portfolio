import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  VStack,
  Tooltip,
  Center,
  Icon,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  useMediaQuery
} from "@chakra-ui/react";

import { useState } from 'react';

import { MdEmail } from 'react-icons/md';
import { BiLogoJava, BiLogoJavascript, BiLogoMongodb, BiLogoReact, BiLogoHtml5, BiLogoPython, BiSolidFileCss } from 'react-icons/bi';
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { SiTensorflow, SiScikitlearn } from 'react-icons/si';

import C_logo from './images/c_icon.svg';

export default function Skills() {
  const [TensorFlowHovered, setTensorFlowHovered] = useState(false);
  const [SklearnHovered, setSklearnHovered] = useState(false);

  const [largerThanMobile] = useMediaQuery("(min-width: 768px)");
  const isMobile = !largerThanMobile;


  return (
    <>
      <Container maxW={"3xl"} id="skills" mb={-20}>
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
                SKILLS
              </Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Center>
            {isMobile ? (
              <VStack spacing={5} mt={12} mb={20}>
                <Text fontSize={"xl"} color="white">Programming Languages and frameworks:</Text>
                <HStack spacing={5}>
                  <Tooltip label="Java">
                    <Box
                      as="button"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      transition="transform 0.2s ease-in-out"
                      _hover={{
                        cursor: "pointer",
                        transform: isMobile ? "none" : "scale(1.1)"
                      }}

                    >
                      <Icon
                        as={BiLogoJava}
                        boxSize={10}
                        color="white"
                      />
                    </Box>
                  </Tooltip>
                  <Popover
                    trigger="hover"
                    hoverOpenDelay={300}
                    hoverCloseDelay={150}
                  >
                    <PopoverTrigger>
                      <Box
                        as="button"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        transition="transform 0.2s ease-in-out"
                        _hover={{
                          cursor: "pointer",
                          transform: "scale(1.1)",
                        }}
                      >
                        <Icon as={BiLogoPython} boxSize={10} color="white" />
                      </Box>
                    </PopoverTrigger>
                    <PopoverContent bg="gray.700" borderColor="none" maxW="25vw">
                      <PopoverArrow />
                      <PopoverBody>
                        <HStack align="center" justify="center">
                          <Box
                            position="relative"
                            onMouseEnter={() => setTensorFlowHovered(true)}
                            onMouseLeave={() => setTensorFlowHovered(false)}
                          >
                            <Icon as={SiTensorflow} boxSize={8} color="white" />
                            {TensorFlowHovered && (
                              <Box
                                position="absolute"
                                bottom="-40px"
                                left="50%"
                                transform="translateX(-50%)"
                                bg="gray.700"
                                color="white"
                                px="2"
                                py="1"
                                borderRadius="md"
                              >
                                Tensorflow
                              </Box>)}
                          </Box>
                          <Box
                            position="relative"
                            onMouseEnter={() => setSklearnHovered(true)}
                            onMouseLeave={() => setSklearnHovered(false)}
                          >
                            <Icon as={SiScikitlearn} boxSize={8} color="white" />
                            {SklearnHovered && (
                              <Box
                                position="absolute"
                                bottom="-60px"
                                left="50%"
                                transform="translateX(-50%)"
                                bg="gray.700"
                                color="white"
                                px="2"
                                py="1"
                                borderRadius="md"
                              >
                                SciKit Learn
                              </Box>)}
                          </Box>
                        </HStack>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Tooltip label="Javascript">
                    <Box
                      as="button"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      transition="transform 0.2s ease-in-out"
                      _hover={{
                        cursor: "pointer",
                        transform: isMobile ? "none" : "scale(1.1)"
                      }}
                    >
                      <Icon
                        as={BiLogoJavascript}
                        boxSize={10}
                        color="white"
                      />
                    </Box>
                  </Tooltip>
                  <Tooltip label="React.js">
                    <Box
                      as="button"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      transition="transform 0.2s ease-in-out"
                      _hover={{
                        cursor: "pointer",
                        transform: isMobile ? "none" : "scale(1.1)"
                      }}
                    >
                      <Icon
                        as={BiLogoReact}
                        boxSize={10}
                        color="white"
                      />
                    </Box>
                  </Tooltip>
                  <Tooltip label="C">
                    <Box
                      as="button"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      transition="transform 0.2s ease-in-out"
                      _hover={{
                        cursor: "pointer",
                        transform: isMobile ? "none" : "scale(1.1)"
                      }}
                    >
                      <Image src={C_logo} height={8} style={{ filter: 'brightness(0) invert(1)' }} />
                    </Box>
                  </Tooltip>
                  <Tooltip label="SQL">
                    <Box
                      as="button"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      transition="transform 0.2s ease-in-out"
                      _hover={{
                        cursor: "pointer",
                        transform: isMobile ? "none" : "scale(1.1)"
                      }}
                    >
                      <Icon
                        as={AiOutlineConsoleSql}
                        boxSize={10}
                        color="white"
                      />
                    </Box>
                  </Tooltip>
                </HStack>
              </VStack>
            ) : (
              <VStack spacing={5} mt={12} mb={2}>
                <Text fontSize={"xl"} color="white">Programming Languages and frameworks:</Text>
                <HStack spacing={5}>
                  <Tooltip label="Java">
                    <Box
                      as="button"
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
                        as={BiLogoJava}
                        boxSize={10}
                        color="white"
                      />
                    </Box>
                  </Tooltip>
                  <Popover
                    trigger="hover"
                    hoverOpenDelay={300}
                    hoverCloseDelay={150}
                  >
                    <PopoverTrigger>
                      <Box
                        as="button"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        transition="transform 0.2s ease-in-out"
                        _hover={{
                          cursor: "pointer",
                          transform: "scale(1.1)",
                        }}
                      >
                        <Icon as={BiLogoPython} boxSize={10} color="white" />
                      </Box>
                    </PopoverTrigger>
                    <PopoverContent bg="gray.700" borderColor="none" maxW="8vw">
                      <PopoverArrow />
                      <PopoverBody>
                        <HStack align="center" justify="center">
                          <Box
                            position="relative"
                            onMouseEnter={() => setTensorFlowHovered(true)}
                            onMouseLeave={() => setTensorFlowHovered(false)}
                          >
                            <Icon as={SiTensorflow} boxSize={8} color="white" />
                            {TensorFlowHovered && (
                              <Box
                                position="absolute"
                                bottom="-40px"
                                left="50%"
                                transform="translateX(-50%)"
                                bg="gray.700"
                                color="white"
                                px="2"
                                py="1"
                                borderRadius="md"
                              >
                                Tensorflow
                              </Box>)}
                          </Box>
                          <Box
                            position="relative"
                            onMouseEnter={() => setSklearnHovered(true)}
                            onMouseLeave={() => setSklearnHovered(false)}
                          >
                            <Icon as={SiScikitlearn} boxSize={8} color="white" />
                            {SklearnHovered && (
                              <Box
                                position="absolute"
                                bottom="-60px"
                                left="50%"
                                transform="translateX(-50%)"
                                bg="gray.700"
                                color="white"
                                px="2"
                                py="1"
                                borderRadius="md"
                              >
                                SciKit Learn
                              </Box>)}
                          </Box>
                        </HStack>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Tooltip label="Javascript">
                    <Box
                      as="button"
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
                        as={BiLogoJavascript}
                        boxSize={10}
                        color="white"
                      />
                    </Box>
                  </Tooltip>
                  <Tooltip label="React.js">
                    <Box
                      as="button"
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
                        as={BiLogoReact}
                        boxSize={10}
                        color="white"
                      />
                    </Box>
                  </Tooltip>
                  <Tooltip label="C">
                    <Box
                      as="button"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      transition="transform 0.2s ease-in-out"
                      _hover={{
                        cursor: "pointer",
                        transform: isMobile ? "none" : "scale(1.1)"
                      }}
                    >
                      <Image src={C_logo} height={8} style={{ filter: 'brightness(0) invert(1)' }} />
                    </Box>
                  </Tooltip>
                  <Tooltip label="SQL">
                    <Box
                      as="button"
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
                        as={AiOutlineConsoleSql}
                        boxSize={10}
                        color="white"
                      />
                    </Box>
                  </Tooltip>
                </HStack>
              </VStack>
            )}
          </Center>
        </Stack>
      </Container>
    </>
  );
}