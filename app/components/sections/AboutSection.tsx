"use client";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export const AboutSection = () => (
  <Box id="about" py={{ base: "16", lg: "24" }} px={{ base: "4", md: "8", lg: "12" }}>
    <VStack
      gap={{ base: "6", lg: "8" }}
      maxW="800px"
      mx="auto"
      bg="whiteAlpha.800"
      p={{ base: "6", md: "8", lg: "10" }}
      borderRadius="2xl"
      backdropFilter="blur(8px)"
    >
      <Heading as="h2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" color="gray.800">
        About Me
      </Heading>
      <Text fontSize={{ base: "md", lg: "lg" }} color="gray.600" textAlign="center" lineHeight="tall">
        I'm from Boston, MA and am currently a Junior at Boston College studying Computer Science and Business. I'm passionate about using technology to make people's lives easier and I'm always looking to grow as a developer.
      </Text>
      <Text fontSize={{ base: "md", lg: "lg" }} color="gray.600" textAlign="center" lineHeight="tall">
        When I'm not programming, you can find me cheering on Boston Sports, jamming on my saxophone, spending time with my family, or hiking in New Hampshire. 
      </Text>
    </VStack>
  </Box>
);
