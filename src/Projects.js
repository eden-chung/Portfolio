import {
    Divider,
    VStack,
    Stack,
    Text,
    Container,
    Box,
    HStack,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    Image,
    Heading,
    SimpleGrid,
    Badge,
    Link,
    Center,
} from "@chakra-ui/react";
import { useState } from "react";
//import ProjectsArray from "./ProjectsArray";
//import OtherProjectsArray from "./OtherProjectsArray";
//import TagsArray from "./TagsArray";

import cardiologistImage from './images/cardiologist.jpg';
  
export default function Projects() {
      
      const [selected, setSelected] = useState("All");
  
      const handleSelected = (value) => {
        setSelected(value);
      };
      
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
                    Projects
                    </Text>
                </HStack>
                <Divider orientation="horizontal" />
            </Stack>
            <Stack px={4} spacing={4}>
                <VStack>
                  <Card
                    width="100%"
                    height="20%"
                    direction={{
                      base: "column",
                    }}
                    overflow="hidden"
                  >
                    <Image objectFit="cover" src={cardiologistImage}/>
                    <Stack>
                      <CardBody align="left">
                        <Heading size="md">Cardiologist Assistant</Heading>
                        <Text py={2}>Developed, trained, and finetuned an AI model in Python using Scikit-learn to create an intelligent virtual assistant for cardiologists, reducing patient wait times and increasing efficiency for doctors offices, and able to predict the likelihood of a heart attack. Built a user-friendly web application using HTML, CSS, and Flask, allowing convenient access to the virtual assistant on various devices. Implemented MongoDB integration for secure and scalable patient database, enabling storage and retrieval of data for hundreds of patients. Enabled AI model training by providing previously nonexistent data source.</Text>
                        <HStack py={2}>
                            <a href={"www.linkedin.com"}>
                              <Button color="{gray.800}">
                                GitHub Link
                              </Button>
                            </a>
                        </HStack>
                      </CardBody>
                    </Stack>
                  </Card>
                </VStack>
            </Stack>
            {/*
            <Text color={"gray.600"} fontSize={"xl"} px={4}>
              Other Projects
            </Text>
            <Center px={4}>
              <ButtonGroup variant="outline">
                <Button
                  colorScheme={selected === "All" ? `${color}` : "gray"}
                  onClick={() => handleSelected("All")}
                >
                  All
                </Button>
                {options.map((option) => (
                  <Button
                    colorScheme={selected === option.value ? `${color}` : "gray"}
                    onClick={() => handleSelected(option.value)}
                  >
                    {option.value}
                  </Button>
                ))}
              </ButtonGroup>
            </Center>
            <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
              {others
                .filter((other) => {
                  if (selected === "All") {
                    return true;
                  } else {
                    return other.tags.includes(selected);
                  }
                })
                .map((other) => (
                  <Fade bottom>
                    <Card key={other.name}>
                      <Stack>
                        <CardBody align="left" h={[null, "40vh"]}>
                          <Heading size="sm">{other.name}</Heading>
  
                          <Text fontSize="sm" py={2}>
                            {other.description}
                          </Text>
  
                          <HStack spacing={2}>
                            {other.buttons.map((button) => (
                              <Link
                                key={button.text}
                                href={button.href}
                                color={`${color}.400`}
                              >
                                {button.text}
                              </Link>
                            ))}
                          </HStack>
                          <HStack flexWrap="wrap" pt={4} spacing={2}>
                            {other.badges.map((badge) => (
                              <Badge
                                my={2}
                                key={badge.text}
                                colorScheme={badge.colorScheme}
                              >
                                {badge.text}
                              </Badge>
                            ))}
                          </HStack>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Fade>
                ))}
            </SimpleGrid>
            */}
          </Stack>
        </Container>
      </>
    );
  }
  