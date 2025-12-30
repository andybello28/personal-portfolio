"use client";

import { Box, Heading, Text, VStack, HStack, Link, Icon, Image } from "@chakra-ui/react";
import { LuGithub, LuExternalLink } from "react-icons/lu";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiCss3,
  SiFirebase,
  SiPython,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiC,
} from "react-icons/si";

const techIcons: Record<string, React.ElementType> = {
  "Next.js": SiNextdotjs,
  "React": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "PostgreSQL": SiPostgresql,
  "Redis": SiRedis,
  "JavaScript": SiJavascript,
  "CSS": SiCss3,
  "Firebase": SiFirebase,
  "Firestore": SiFirebase,
  "Python": SiPython,
  "Scikit-learn": SiScikitlearn,
  "NumPy": SiNumpy,
  "Pandas": SiPandas,
  "C": SiC,
};

const projects = [
  {
    title: "Mahomebase Fantasy",
    description: "Full stack web app providing users AI-powered fantasy football advice.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Redis"],
    image: "/Mahomebase.png",
    github: "https://github.com/andybello28/mahomebase",
    live: "https://mahomebasefantasy.com/",
  },
  {
    title: "Heights Housing",
    description: "Full stack web app connecting BC students to roommates.",
    technologies: ["React", "JavaScript", "CSS", "Firebase", "Firestore"],
    image: "/HeightsHousing.png",
    github: "https://github.com/varun-singh26/Boston-College-Roommate-Search",
    live: "https://heightshousing.com/",
  },
  {
    title: "Wine Quality Regression",
    description: "Wine quality prediction achieving MSE of 0.37 using 5-fold CV.",
    technologies: ["Python", "Scikit-learn", "NumPy", "Pandas"],
    image: "/Wine.png",
    github: "https://github.com/andybello28/wine-quality",
    live: null,
  },
  {
    title: "Dynamic Memory Allocator",
    description: "A simple dynamic memory allocator built in C.",
    technologies: ["C"],
    image: "/malloc.jpg",
    github: "https://github.com/andybello28/dynamic-memory-allocator",
    live: null,
  },
];

export const ProjectsSection = () => (
  <Box id="projects" py={{ base: "16", lg: "24" }} px={{ base: "4", md: "8", lg: "12" }}>
    <VStack gap={{ base: "8", lg: "12" }} maxW="1000px" mx="auto">
      <Heading as="h2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" color="gray.800">
        Projects
      </Heading>
      {/* Mobile Layout - Simple list */}
      <VStack gap="4" w="full" display={{ base: "flex", sm: "none" }}>
        {projects.map((project) => (
          <Box
            key={project.title}
            w="full"
            p="4"
            bg="whiteAlpha.800"
            borderRadius="xl"
            backdropFilter="blur(8px)"
          >
            <HStack justify="space-between" align="flex-start">
              <VStack align="flex-start" gap="1" flex="1">
                <Text fontWeight="semibold" color="gray.800" fontSize="sm">
                  {project.title}
                </Text>
                <Text fontSize="xs" color="gray.600" lineHeight="tight">
                  {project.description}
                </Text>
              </VStack>
              <HStack gap="3" flexShrink={0}>
                <Link
                  href={project.github}
                  target="_blank"
                  color="gray.600"
                  _hover={{ color: "purple.400" }}
                  transition="color 0.2s"
                >
                  <Icon boxSize="5">
                    <LuGithub />
                  </Icon>
                </Link>
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    color="gray.600"
                    _hover={{ color: "blue.500" }}
                    transition="color 0.2s"
                  >
                    <Icon boxSize="5">
                      <LuExternalLink />
                    </Icon>
                  </Link>
                )}
              </HStack>
            </HStack>
          </Box>
        ))}
      </VStack>

      {/* Desktop Layout - Flip cards */}
      <HStack gap="6" wrap="wrap" justify="center" display={{ base: "none", sm: "flex" }}>
        {projects.map((project) => (
          <Box
            key={project.title}
            w="280px"
            maxW="280px"
            h="280px"
            style={{ perspective: "1000px" }}
          >
            <Box
              position="relative"
              w="100%"
              h="100%"
              transition="transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
              style={{ transformStyle: "preserve-3d" }}
              _hover={{ transform: "rotateY(180deg)" }}
            >
              {/* Front of card */}
              <VStack
                position="absolute"
                w="100%"
                h="100%"
                p={{ sm: "4", lg: "6" }}
                bg="whiteAlpha.800"
                borderRadius="xl"
                backdropFilter="blur(8px)"
                align="center"
                justify="flex-start"
                gap="3"
                style={{ backfaceVisibility: "hidden" }}
              >
                <Text fontWeight="semibold" color="gray.800" fontSize={{ sm: "sm", lg: "md" }} w="full" textAlign="center">
                  {project.title}
                </Text>
                {project.live ? (
                  <Link
                    href={project.live}
                    target="_blank"
                    w="full"
                    h={{ sm: "120px", lg: "140px" }}
                    bg="gray.200"
                    borderRadius="md"
                    overflow="hidden"
                    display="block"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />
                  </Link>
                ) : (
                  <Box
                    w="full"
                    h={{ sm: "120px", lg: "140px" }}
                    bg="gray.200"
                    borderRadius="md"
                    overflow="hidden"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />
                  </Box>
                )}
                <Text
                  fontSize={{ sm: "xs", lg: "sm" }}
                  color="gray.600"
                  textAlign="center"
                  w="full"
                  lineHeight="tight"
                  lineClamp={4}
                >
                  {project.description}
                </Text>
              </VStack>

              {/* Back of card */}
              <VStack
                position="absolute"
                w="100%"
                h="100%"
                p={{ sm: "4", lg: "6" }}
                bg="whiteAlpha.900"
                borderRadius="xl"
                backdropFilter="blur(8px)"
                justify="center"
                align="center"
                gap="4"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <Text fontWeight="semibold" color="gray.800" fontSize={{ sm: "sm", lg: "md" }}>
                  Technologies
                </Text>
                <HStack gap={{ sm: "2", lg: "4" }} wrap="wrap" justify="center">
                  {project.technologies.slice(0, 5).map((tech) => {
                    const IconComponent = techIcons[tech];
                    return IconComponent ? (
                      <VStack key={tech} gap="1">
                        <Icon boxSize={{ sm: "6", lg: "8" }} color="gray.700">
                          <IconComponent />
                        </Icon>
                        <Text fontSize={{ sm: "2xs", lg: "xs" }} color="gray.600">
                          {tech}
                        </Text>
                      </VStack>
                    ) : (
                      <Text key={tech} fontSize={{ sm: "2xs", lg: "xs" }} color="gray.600">
                        {tech}
                      </Text>
                    );
                  })}
                </HStack>
                <VStack gap="2" pt={{ sm: "2", lg: "4" }}>
                  <Text fontWeight="semibold" color="gray.800" fontSize="xs">
                    Links
                  </Text>
                  <HStack gap="3">
                    <Link
                      href={project.github}
                      target="_blank"
                      color="gray.600"
                      _hover={{ color: "purple.400" }}
                      transition="color 0.2s"
                    >
                      <Icon boxSize="5">
                        <LuGithub />
                      </Icon>
                    </Link>
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        color="gray.600"
                        _hover={{ color: "blue.500" }}
                        transition="color 0.2s"
                      >
                        <Icon boxSize="5">
                          <LuExternalLink />
                        </Icon>
                      </Link>
                    )}
                  </HStack>
                </VStack>
              </VStack>
            </Box>
          </Box>
        ))}
      </HStack>
    </VStack>
  </Box>
);
