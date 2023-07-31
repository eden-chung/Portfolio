import {
    Flex,
    Button,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    Stack,
    IconButton,
    useDisclosure,
    HStack,
    Link,
  } from "@chakra-ui/react";
  import { HamburgerIcon } from "@chakra-ui/icons";
  import { useState } from "react";
  
  export default function Nav() {
    const colorwhite = '#FFFFFF';

    const [scroll, setScroll] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const scrollToStart = () => {
      const startSection = document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });;
    };
    const scrollToAbout = () => {
      const aboutSection = document.querySelector("#about");
      aboutSection.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToProjects = () => {
      const projectsSection = document.querySelector("#projects");
      projectsSection.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToContact = () => {
      const contactSection = document.querySelector("#contact");
      contactSection.scrollIntoView({ behavior: "smooth" });
    };
    const openResume = () => {
      const resumePath = '/resume.pdf';
  
      window.open(resumePath, '_blank');
    };
    const changeScroll = () =>
      document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
        ? setScroll(true)
        : setScroll(false);
  
    window.addEventListener("scroll", changeScroll);
  
    const TbLetterComponents = [];
  
  
    return (
      <>
        <Flex
          bg={"gray.900"}
          px={4}
          h={16}
          boxShadow={scroll ? "base" : "none"}
          zIndex="sticky"
          position="fixed"
          as="header"
          alignItems={"center"}
          justifyContent={"space-between"}
          w="100%"
        >
          <Link onClick={scrollToStart}>
            <HStack>
              {TbLetterComponents.map((Component, index) => (
                <Component key={index}/>
              ))}
            </HStack>
          </Link>
  
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {true ? (
                <>
                  <Button variant="ghost" onClick={scrollToStart} style={{color:"white"}}>
                    About
                  </Button>
                  <Button variant="ghost" onClick={scrollToProjects} style={{color:"white"}}>
                    Projects
                  </Button>
                  <Button variant="ghost" onClick={openResume} style={{color:"white"}}>
                    Resume
                  </Button>
                  <Button variant="ghost" onClick={scrollToContact} style={{color:"white"}}>
                    Contact
                  </Button>
                </>
              ) : (
                <></>
              )}
  
              {true ? (
                <></>
              ) : (
                <>
                  <Button
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                  ></Button>
                  <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerBody>
                        <Button variant="ghost" onClick={scrollToAbout} style={{color:colorwhite}}>
                          About
                        </Button>
                        <Button variant="ghost" onClick={scrollToProjects} style={{color:colorwhite}}>
                          Projects
                        </Button>
                        <Button variant="ghost" onClick={openResume} style={{color:colorwhite}}>
                          Resume
                        </Button>
                        <Button variant="ghost" onClick={scrollToContact} style={{color:colorwhite}}>
                          Contact
                        </Button>
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                </>
              )}
            </Stack>
          </Flex>
        </Flex>
      </>
    );
  }
  