"use client";

import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";

export const ContactSection = () => (
  <Box id="contact" py={{ base: "16", lg: "24" }} px={{ base: "4", md: "8", lg: "12" }} position="relative" zIndex={1}>
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
        I'd love to hear about what you're building! Let's connect!
      </Text>
      <Link
        href="mailto:andycbello@gmail.com"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        px={{ base: "6", lg: "8" }}
        py={{ base: "2.5", lg: "3" }}
        fontSize={{ base: "md", lg: "lg" }}
        fontWeight="semibold"
        bg="green.600"
        color="white"
        borderRadius="md"
        _hover={{ bg: "green.500", textDecoration: "none" }}
      >
        Say Hello
      </Link>
    </VStack>
  </Box>
);
