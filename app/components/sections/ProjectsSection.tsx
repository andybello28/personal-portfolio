"use client";

import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react";

const projects = [1, 2, 3, 4];

export const ProjectsSection = () => (
  <Box id="projects" py={{ base: "16", lg: "24" }} px={{ base: "4", md: "8", lg: "12" }}>
    <VStack gap={{ base: "8", lg: "12" }} maxW="1000px" mx="auto">
      <Heading as="h2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" color="gray.800">
        Projects
      </Heading>
      <HStack gap={{ base: "4", lg: "6" }} wrap="wrap" justify="center">
        {projects.map((i) => (
          <VStack
            key={i}
            p={{ base: "4", lg: "6" }}
            bg="whiteAlpha.800"
            borderRadius="xl"
            backdropFilter="blur(8px)"
            w={{ base: "100%", sm: "280px" }}
            maxW="280px"
            align="flex-start"
            gap="3"
            _hover={{ bg: "whiteAlpha.900", shadow: "md" }}
            transition="all 0.2s"
          >
            <Box
              w="full"
              h={{ base: "120px", lg: "140px" }}
              bg="gray.200"
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="gray.500" fontSize="sm">
                Image
              </Text>
            </Box>
            <Text fontWeight="semibold" color="gray.800" fontSize={{ base: "sm", lg: "md" }}>
              Project {i}
            </Text>
            <Text fontSize={{ base: "xs", lg: "sm" }} color="gray.600">
              Project description goes here
            </Text>
          </VStack>
        ))}
      </HStack>
    </VStack>
  </Box>
);
