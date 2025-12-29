"use client";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export const AboutSection = () => (
  <Box id="about" py="24" px="12">
    <VStack
      gap="8"
      maxW="800px"
      mx="auto"
      bg="whiteAlpha.800"
      p="10"
      borderRadius="2xl"
      backdropFilter="blur(8px)"
    >
      <Heading as="h2" fontSize="4xl" fontWeight="bold" color="gray.800">
        About Me
      </Heading>
      <Text fontSize="lg" color="gray.600" textAlign="center" lineHeight="tall">
        Your about content goes here. Describe your background, skills, and
        what makes you unique.
      </Text>
    </VStack>
  </Box>
);
