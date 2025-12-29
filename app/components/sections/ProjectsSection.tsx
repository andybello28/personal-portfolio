"use client";

import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react";

const projects = [1, 2, 3, 4];

export const ProjectsSection = () => (
  <Box id="projects" py="24" px="12">
    <VStack gap="12" maxW="1000px" mx="auto">
      <Heading as="h2" fontSize="4xl" fontWeight="bold" color="gray.800">
        Projects
      </Heading>
      <HStack gap="6" wrap="wrap" justify="center">
        {projects.map((i) => (
          <VStack
            key={i}
            p="6"
            bg="whiteAlpha.800"
            borderRadius="xl"
            backdropFilter="blur(8px)"
            w="280px"
            align="flex-start"
            gap="3"
            _hover={{ bg: "whiteAlpha.900", shadow: "md" }}
            transition="all 0.2s"
          >
            <Box
              w="full"
              h="140px"
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
            <Text fontWeight="semibold" color="gray.800">
              Project {i}
            </Text>
            <Text fontSize="sm" color="gray.600">
              Project description goes here
            </Text>
          </VStack>
        ))}
      </HStack>
    </VStack>
  </Box>
);
