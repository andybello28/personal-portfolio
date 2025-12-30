"use client";

import { Box, Heading, VStack, HStack, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiScikitlearn,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiFirebase,
  SiRedis,
  SiGit,
  SiPrisma,
  SiChakraui,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { TbLetterC, TbApi } from "react-icons/tb";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    color: "blue.400",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "C", icon: TbLetterC, color: "#A8B9CC" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "SQL", icon: FaDatabase, color: "#336791" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
    ],
  },
  {
    title: "Databases & Tools",
    color: "green.400",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Firestore", icon: SiFirebase, color: "#FFCA28" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "REST APIs", icon: TbApi, color: "#009688" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    color: "purple.400",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
    ],
  },
];

const SkillIcon = ({ skill }: { skill: Skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      cursor="pointer"
      transition="all 0.3s ease"
      _hover={{ transform: "scale(1.1)" }}
    >
      <Box
        w={{ base: "50px", lg: "60px" }}
        h={{ base: "50px", lg: "60px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="lg"
        bg="white"
        shadow="sm"
        transition="all 0.3s ease"
        _hover={{ shadow: "md" }}
      >
        {isHovered ? (
          <Text
            fontSize={{ base: "2xs", lg: "xs" }}
            fontWeight="semibold"
            color="gray.700"
            textAlign="center"
            px="1"
          >
            {skill.name}
          </Text>
        ) : (
          <Icon boxSize={{ base: "6", lg: "7" }} color={skill.color}>
            <skill.icon />
          </Icon>
        )}
      </Box>
    </Box>
  );
};

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
            minW={{ base: "140px", sm: "180px", lg: "280px" }}
            maxW={{ base: "100%", lg: "320px" }}
            align="center"
            gap="4"
          >
            <HStack>
              <Box w="2" h="2" borderRadius="full" bg={category.color} />
              <Text fontWeight="semibold" color="gray.800" fontSize={{ base: "sm", lg: "md" }}>
                {category.title}
              </Text>
            </HStack>
            <HStack wrap="wrap" gap="2" justify="center">
              {category.skills.map((skill) => (
                <SkillIcon key={skill.name} skill={skill} />
              ))}
            </HStack>
          </VStack>
        ))}
      </HStack>
    </VStack>
  </Box>
);
