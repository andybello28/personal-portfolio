"use client";

import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";

export const ContactSection = () => (
  <Box id="contact" py={{ base: "16", lg: "24" }} px={{ base: "4", md: "8", lg: "12" }}>
    <VStack
      gap={{ base: "6", lg: "8" }}
      maxW="600px"
      mx="auto"
      textAlign="center"
      bg="whiteAlpha.800"
      p={{ base: "6", md: "8", lg: "10" }}
      borderRadius="2xl"
      backdropFilter="blur(8px)"
    >
      <Heading as="h2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" color="gray.800">
        Get in Touch
      </Heading>
      <Text fontSize={{ base: "md", lg: "lg" }} color="gray.600">
        Interested in working together? Let's connect.
      </Text>
      <Button
        size={{ base: "md", lg: "lg" }}
        bg="green.600"
        color="white"
        _hover={{ bg: "green.500" }}
        px={{ base: "6", lg: "8" }}
      >
        Say Hello
      </Button>
    </VStack>
  </Box>
);
