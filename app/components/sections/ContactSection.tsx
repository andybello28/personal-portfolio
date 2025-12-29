"use client";

import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";

export const ContactSection = () => (
  <Box id="contact" py="24" px="12">
    <VStack
      gap="8"
      maxW="600px"
      mx="auto"
      textAlign="center"
      bg="whiteAlpha.800"
      p="10"
      borderRadius="2xl"
      backdropFilter="blur(8px)"
    >
      <Heading as="h2" fontSize="4xl" fontWeight="bold" color="gray.800">
        Get in Touch
      </Heading>
      <Text fontSize="lg" color="gray.600">
        Interested in working together? Let's connect.
      </Text>
      <Button
        size="lg"
        bg="green.600"
        color="white"
        _hover={{ bg: "green.500" }}
        px="8"
      >
        Say Hello
      </Button>
    </VStack>
  </Box>
);
