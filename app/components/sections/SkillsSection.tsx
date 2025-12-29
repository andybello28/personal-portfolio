"use client";

import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java"],
    color: "blue.400",
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express"],
    color: "purple.400",
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "AWS", "VS Code"],
    color: "green.400",
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    color: "orange.400",
  },
];

export const SkillsSection = () => (
  <Box id="skills" py={{ base: "16", lg: "24" }} px={{ base: "4", md: "8", lg: "12" }}>
    <VStack gap={{ base: "8", lg: "12" }} maxW="1000px" mx="auto">
      <Heading as="h2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" color="gray.800">
        Skills
      </Heading>
      <HStack gap={{ base: "4", lg: "8" }} align="flex-start" wrap="wrap" justify="center">
        {skillCategories.map((category) => (
          <VStack
            key={category.title}
            p={{ base: "4", lg: "6" }}
            bg="whiteAlpha.800"
            borderRadius="xl"
            backdropFilter="blur(8px)"
            minW={{ base: "140px", sm: "180px", lg: "200px" }}
            align="flex-start"
            gap="4"
          >
            <HStack>
              <Box w="2" h="2" borderRadius="full" bg={category.color} />
              <Text fontWeight="semibold" color="gray.800" fontSize={{ base: "sm", lg: "md" }}>
                {category.title}
              </Text>
            </HStack>
            <VStack align="flex-start" gap="2">
              {category.skills.map((skill) => (
                <Text key={skill} fontSize={{ base: "xs", lg: "sm" }} color="gray.600">
                  {skill}
                </Text>
              ))}
            </VStack>
          </VStack>
        ))}
      </HStack>
    </VStack>
  </Box>
);
