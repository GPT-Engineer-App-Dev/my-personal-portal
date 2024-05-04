import { Box, Flex, Text, VStack, Link, Container } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope, FaProjectDiagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="full" p={0}>
      <Flex direction="column" minH="100vh">
        <Box as="header" bg="brand.800" color="white" py={6}>
          <Flex justify="space-between" align="center" px={8} w="full">
            <Text fontSize="xl" fontWeight="bold">John Doe</Text>
            <Box display={{ base: "block", md: "flex" }} justifyContent="center" alignItems="center">
              <Link href="#about" display="flex" alignItems="center" justifyContent="center" px={6} py={2} _hover={{ textDecoration: "underline" }}><FaUser /> About</Link>
              <Link href="#projects" display="flex" alignItems="center" justifyContent="center" px={6} py={2} _hover={{ textDecoration: "underline" }}><FaProjectDiagram /> Projects</Link>
              <Link href="#contact" display="flex" alignItems="center" justifyContent="center" px={6} py={2} _hover={{ textDecoration: "underline" }}><FaEnvelope /> Contact</Link>
            </Box>
          </Flex>
        </Box>
        <Flex direction="column" flex="1" p={8} align="center" justify="center">
          <VStack spacing={8} as="section" id="about" minH="80vh">
            <Text fontSize="2xl" fontWeight="bold">About Me</Text>
            <Text textAlign="center">I'm a software developer with a passion for building beautiful and functional web applications. I have a background in computer science and over 5 years of professional experience.</Text>
          </VStack>
          <VStack spacing={8} as="section" id="projects" minH="80vh" mt={0}>
            <Text fontSize="2xl" fontWeight="bold">Projects</Text>
            <Text textAlign="center">Here are some of the projects I've worked on. They range from small personal projects to large-scale commercial applications.</Text>
          </VStack>
          <VStack spacing={8} as="section" id="contact" minH="80vh" mt={0}>
            <Text fontSize="2xl" fontWeight="bold">Contact Info</Text>
            <Text textAlign="center">Feel free to reach out to me via email at johndoe@example.com or follow me on LinkedIn.</Text>
          </VStack>
        </Flex>
        <Box as="footer" bg="brand.700" color="white" py={4} mt="auto">
          <Flex justify="center" w="full">
            <Text>&copy; 2023 John Doe. All rights reserved.</Text>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;