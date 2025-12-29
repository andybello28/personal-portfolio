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
        Your about content goes here. Describe your background, skills, and
        what makes you unique.
      </Text>
    </VStack>
  </Box>
);
