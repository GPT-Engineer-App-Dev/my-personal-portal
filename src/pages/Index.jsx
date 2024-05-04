import { Box, Flex, Text, VStack, Link, Container } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope, FaProjectDiagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        <Box as="header" bg="brand.800" color="white" py={4}>
          <Flex justify="space-between" align="center" px={8}>
            <Text fontSize="xl" fontWeight="bold">John Doe</Text>
            <Box>
              <Link href="#about" p={3} _hover={{ textDecoration: "underline" }}><FaUser /> About</Link>
              <Link href="#projects" p={3} _hover={{ textDecoration: "underline" }}><FaProjectDiagram /> Projects</Link>
              <Link href="#contact" p={3} _hover={{ textDecoration: "underline" }}><FaEnvelope /> Contact</Link>
            </Box>
          </Flex>
        </Box>
        <Flex direction="column" flex="1" p={8} align="center" justify="center">
          <VStack spacing={8} as="section" id="about">
            <Text fontSize="2xl" fontWeight="bold">About Me</Text>
            <Text textAlign="center">I'm a software developer with a passion for building beautiful and functional web applications. I have a background in computer science and over 5 years of professional experience.</Text>
          </VStack>
          <VStack spacing={8} as="section" id="projects" mt={10}>
            <Text fontSize="2xl" fontWeight="bold">Projects</Text>
            <Text textAlign="center">Here are some of the projects I've worked on. They range from small personal projects to large-scale commercial applications.</Text>
          </VStack>
          <VStack spacing={8} as="section" id="contact" mt={10}>
            <Text fontSize="2xl" fontWeight="bold">Contact Info</Text>
            <Text textAlign="center">Feel free to reach out to me via email at johndoe@example.com or follow me on LinkedIn.</Text>
          </VStack>
        </Flex>
        <Box as="footer" bg="brand.700" color="white" py={4} mt="auto">
          <Flex justify="center">
            <Text>&copy; 2023 John Doe. All rights reserved.</Text>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;