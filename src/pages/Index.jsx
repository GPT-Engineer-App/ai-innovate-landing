import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaBrain, FaCode, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" py={4}>
        <Heading as="h1" size="xl">
          InnovAI
        </Heading>
        <Button rightIcon={<FaArrowRight />} colorScheme="teal">
          Contact Us
        </Button>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} alignItems="center" py={10}>
        <Box flex="1" pr={{ base: 0, md: 10 }}>
          <Heading as="h2" size="lg" mb={4}>
            Empowering the Future with Artificial Intelligence
          </Heading>
          <Text fontSize="lg" mb={4}>
            At InnovAI, we leverage cutting-edge AI technology to create solutions that transform industries, enhance efficiency, and empower communities.
          </Text>
          <Button leftIcon={<FaRocket />} colorScheme="purple" size="lg">
            Discover More
          </Button>
        </Box>
        <Box flex="1">
          <Image src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzE0MjQzOTQzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Technology" />
        </Box>
      </Flex>
      <VStack spacing={8} py={10}>
        <Heading as="h3" size="md">
          Our Services
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} justifyContent="space-around" width="full">
          <ServiceBox icon={FaBrain} title="AI Development" description="Develop state-of-the-art AI models tailored to your business needs." />
          <ServiceBox icon={FaCode} title="Software Solutions" description="Build robust software solutions integrated with AI capabilities." />
          <ServiceBox icon={FaRocket} title="Innovation Consulting" description="Consult with our experts to innovate and implement AI in your projects." />
        </Flex>
      </VStack>
    </Container>
  );
};

const ServiceBox = ({ icon: Icon, title, description }) => (
  <Box textAlign="center" p={5} borderWidth="1px" borderRadius="lg">
    <Icon size="3em" />
    <Heading as="h4" size="sm" my={3}>
      {title}
    </Heading>
    <Text>{description}</Text>
  </Box>
);

export default Index;
