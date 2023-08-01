import {
    Flex,
    Button,
    Stack,
    useMediaQuery,
    useDisclosure,
    Link,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    IconButton
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
  
export default function Nav() {
    const buttonTextColor = "white";
    const buttonHoverColor = "gray.700";

    const [largerThanMobile] = useMediaQuery("(min-width: 768px)");
    const isMobile = !largerThanMobile;
    
    const [scroll, setScroll] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const scrollToStart = () => {
      const startSection = document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });;
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
                </Link>
                    
                <Flex alignItems={"center"}>
                    <Stack direction={"row"} spacing={7}>
                        {isMobile ? (
                        <>
                            <Button
                              as={IconButton}
                              icon={<HamburgerIcon />}
                              onClick={onOpen}
                              bg = "gray.700"
                            />
                            <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                              <DrawerOverlay />
                              <DrawerContent bg="gray.900">
                                <DrawerBody>
                                  <Button variant="ghost" onClick={scrollToStart} style={{color:buttonTextColor}} _hover={{backgroundColor:buttonHoverColor}}>
                                    About
                                  </Button>
                                  <Button variant="ghost" onClick={scrollToProjects} style={{color:buttonTextColor}} _hover={{backgroundColor:buttonHoverColor}}>
                                  Projects
                                  </Button>
                                  <Button variant="ghost" onClick={openResume} style={{color:buttonTextColor}} _hover={{backgroundColor:buttonHoverColor}}>
                                  Resume
                                  </Button>
                                  <Button variant="ghost" onClick={scrollToContact} style={{color:buttonTextColor}} _hover={{backgroundColor:buttonHoverColor}}>
                                    Contact
                                  </Button>
                                </DrawerBody>
                              </DrawerContent>
                            </Drawer>
                      </>
                        ) : (
                            <>
                                <Button variant="ghost" onClick={scrollToStart} style={{color:buttonTextColor}} _hover={{backgroundColor:buttonHoverColor}}>
                                    About
                                </Button>
                                <Button variant="ghost" onClick={scrollToProjects} style={{color:buttonTextColor}} _hover={{backgroundColor:buttonHoverColor}}>
                                    Projects
                                </Button>
                                <Button variant="ghost" onClick={openResume} style={{color:buttonTextColor}} _hover={{backgroundColor:buttonHoverColor}}>
                                    Resume
                                </Button>
                                <Button variant="ghost" onClick={scrollToContact} style={{color:buttonTextColor}} _hover={{backgroundColor:buttonHoverColor}}>
                                    Contact
                                </Button>
                            </>
                        )}        
                    </Stack>
                </Flex>
            </Flex>
        </>
    );
}
  