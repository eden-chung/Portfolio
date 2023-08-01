import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  
  export default function Footer() {
    return (
        <Box
            bg="gray.900"
            color="gray.100"
            height = "80px"
            display="flex"
            alignItems="center"
        >
            <Container
                as={Stack}
                maxW={"6xl"}
                align="center"
                justifyContent="center"
            >
                <Text color="gray.500">Built by Eden Chung</Text>
            </Container>
        </Box>
    );
  }
  