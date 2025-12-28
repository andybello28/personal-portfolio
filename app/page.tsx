"use client";

import {
  Box,
  Heading,
  Text,
  Carousel,
  VStack,
  HStack,
  Button,
  Link,
  Icon,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { LuGithub, LuLinkedin, LuFileText, LuMail, LuChevronLeft, LuChevronRight } from "react-icons/lu";

const items = Array.from({ length: 5 })

export default function Home() {
  return (
    <Box bg="gray.50" minH="100vh">
      {/* Navigation */}
      <HStack
        as="nav"
        justify="space-between"
        align="center"
        px="12"
        py="6"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Text fontWeight="semibold" fontSize="lg" color="gray.800">
          Andy Bello
        </Text>
        <HStack gap="8">
          <Link href="#about" color="gray.600" _hover={{ color: "gray.900" }}>
            About
          </Link>
          <Link href="#skills" color="gray.600" _hover={{ color: "gray.900" }}>
            Skills
          </Link>
          <Link href="#projects" color="gray.600" _hover={{ color: "gray.900" }}>
            Projects
          </Link>
          <Link href="#contact" color="gray.600" _hover={{ color: "gray.900" }}>
            Contact
          </Link>
        </HStack>
        <HStack gap="2">
          <Link
            href="#"
            aria-label="GitHub"
            p="2"
            borderRadius="md"
            color="gray.600"
            _hover={{ color: "gray.900", bg: "gray.100" }}
          >
            <Icon size="md">
              <LuGithub />
            </Icon>
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            p="2"
            borderRadius="md"
            color="gray.600"
            _hover={{ color: "gray.900", bg: "gray.100" }}
          >
            <Icon size="md">
              <LuLinkedin />
            </Icon>
          </Link>
          <Link
            href="#"
            aria-label="Resume"
            p="2"
            borderRadius="md"
            border="1px solid"
            borderColor="gray.300"
            color="gray.600"
            _hover={{ color: "gray.900", bg: "gray.100" }}
          >
            <Icon size="md">
              <LuFileText />
            </Icon>
          </Link>
        </HStack>
      </HStack>

      {/* Hero Section */}
      <HStack
        minH="calc(100vh - 80px)"
        px="12"
        gap="16"
        justify="center"
        align="center"
      >
        {/* Left side - Text content */}
        <VStack gap="8" align="flex-start" maxW="500px">
          {/* Colorful accent dot */}
          <HStack gap="3">
            <Box w="3" h="3" borderRadius="full" bg="red.400" />
            <Box w="3" h="3" borderRadius="full" bg="yellow.400" />
            <Box w="3" h="3" borderRadius="full" bg="green.400" />
          </HStack>

          <VStack gap="4" align="flex-start">
            <Text
              fontSize="sm"
              fontWeight="medium"
              color="gray.500"
              textTransform="uppercase"
              letterSpacing="widest"
            >
              Welcome
            </Text>
            <Heading
              as="h1"
              fontSize="5xl"
              fontWeight="bold"
              color="gray.900"
              letterSpacing="tight"
              lineHeight="1.1"
            >
              Hi, I'm Andy
            </Heading>
            <Text fontSize="lg" color="gray.600" lineHeight="tall">
              A developer passionate about creating clean, functional, and
              beautiful digital experiences.
            </Text>
          </VStack>

          {/* CTA Buttons */}
          <HStack gap="4" pt="2">
            <Button
              size="lg"
              bg="gray.900"
              color="white"
              _hover={{ bg: "gray.800" }}
              px="8"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="gray.300"
              color="gray.700"
              _hover={{ bg: "gray.100" }}
              px="8"
            >
              Get in Touch
            </Button>
          </HStack>

          {/* Subtle colorful underline */}
          <Box pt="4">
            <HStack gap="1">
              <Box w="16" h="1" bg="blue.400" borderRadius="full" />
              <Box w="8" h="1" bg="purple.400" borderRadius="full" />
              <Box w="4" h="1" bg="pink.400" borderRadius="full" />
            </HStack>
          </Box>
        </VStack>

        {/* Right side - Image Carousel Placeholder */}
        <Box
          w="400px"
          h="500px"
          bg="white"
          borderRadius="2xl"
          border="1px solid"
          borderColor="gray.200"
          shadow="lg"
          display="flex"
          flexDirection="column"
          overflow="hidden"
        >
          {/* Mac-style window header */}
          <HStack px="4" py="3" bg="gray.100" borderBottom="1px solid" borderColor="gray.200">
            <HStack gap="2">
              <Box w="3" h="3" borderRadius="full" bg="red.400" />
              <Box w="3" h="3" borderRadius="full" bg="yellow.400" />
              <Box w="3" h="3" borderRadius="full" bg="green.400" />
            </HStack>
          </HStack>

          {/* Carousel content area */}
          <Box flex="1" p="4">
            <Carousel.Root slideCount={items.length} w="full" h="full">
              <Carousel.Control justifyContent="center" gap="4" w="full" h="full" position="relative">
                <Carousel.PrevTrigger asChild>
                  <IconButton
                    size="sm"
                    variant="ghost"
                    position="absolute"
                    left="0"
                    zIndex="1"
                    aria-label="Previous"
                  >
                    <LuChevronLeft />
                  </IconButton>
                </Carousel.PrevTrigger>

                <Carousel.ItemGroup w="full" h="full">
                  {items.map((_, index) => (
                    <Carousel.Item key={index} index={index}>
                      <Box
                        w="full"
                        h="380px"
                        bg="gray.200"
                        borderRadius="lg"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Image
                          src={`https://picsum.photos/seed/${index + 1}/400/380`}
                          alt={`Slide ${index + 1}`}
                          w="full"
                          h="full"
                          objectFit="cover"
                          borderRadius="lg"
                        />
                      </Box>
                    </Carousel.Item>
                  ))}
                </Carousel.ItemGroup>

                <Carousel.NextTrigger asChild>
                  <IconButton
                    size="sm"
                    variant="ghost"
                    position="absolute"
                    right="0"
                    zIndex="1"
                    aria-label="Next"
                  >
                    <LuChevronRight />
                  </IconButton>
                </Carousel.NextTrigger>
              </Carousel.Control>

              <Carousel.Control justifyContent="center" mt="2">
                <Carousel.Indicators />
              </Carousel.Control>
            </Carousel.Root>
          </Box>
        </Box>
      </HStack>

      {/* About Section */}
      <Box id="about" py="24" px="12" bg="white" borderTop="1px solid" borderColor="gray.200">
        <VStack gap="8" maxW="800px" mx="auto">
          <Heading as="h2" fontSize="4xl" fontWeight="bold" color="gray.900">
            About Me
          </Heading>
          <Text fontSize="lg" color="gray.600" textAlign="center" lineHeight="tall">
            Your about content goes here. Describe your background, skills, and
            what makes you unique.
          </Text>
        </VStack>
      </Box>

      {/* Skills Section */}
      <Box id="skills" py="24" px="12" bg="gray.50" borderTop="1px solid" borderColor="gray.200">
        <VStack gap="12" maxW="1000px" mx="auto">
          <Heading as="h2" fontSize="4xl" fontWeight="bold" color="gray.900">
            Skills
          </Heading>
          <HStack gap="8" align="flex-start" wrap="wrap" justify="center">
            {[
              { title: "Languages", skills: ["JavaScript", "TypeScript", "Python", "Java"], color: "blue.400" },
              { title: "Frameworks", skills: ["React", "Next.js", "Node.js", "Express"], color: "purple.400" },
              { title: "Tools", skills: ["Git", "Docker", "AWS", "VS Code"], color: "green.400" },
              { title: "Databases", skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"], color: "orange.400" },
            ].map((category) => (
              <VStack
                key={category.title}
                p="6"
                bg="white"
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.200"
                minW="200px"
                align="flex-start"
                gap="4"
              >
                <HStack>
                  <Box w="2" h="2" borderRadius="full" bg={category.color} />
                  <Text fontWeight="semibold" color="gray.800">
                    {category.title}
                  </Text>
                </HStack>
                <VStack align="flex-start" gap="2">
                  {category.skills.map((skill) => (
                    <Text key={skill} fontSize="sm" color="gray.600">
                      {skill}
                    </Text>
                  ))}
                </VStack>
              </VStack>
            ))}
          </HStack>
        </VStack>
      </Box>

      {/* Projects Section */}
      <Box id="projects" py="24" px="12" bg="white" borderTop="1px solid" borderColor="gray.200">
        <VStack gap="12" maxW="1000px" mx="auto">
          <Heading as="h2" fontSize="4xl" fontWeight="bold" color="gray.900">
            Projects
          </Heading>
          <HStack gap="6" wrap="wrap" justify="center">
            {[1, 2, 3, 4].map((i) => (
              <VStack
                key={i}
                p="6"
                bg="gray.50"
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.200"
                w="280px"
                align="flex-start"
                gap="3"
                _hover={{ borderColor: "gray.300", shadow: "sm" }}
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

      {/* Contact Section */}
      <Box id="contact" py="24" px="12" bg="gray.50" borderTop="1px solid" borderColor="gray.200">
        <VStack gap="8" maxW="600px" mx="auto" textAlign="center">
          <Heading as="h2" fontSize="4xl" fontWeight="bold" color="gray.900">
            Get in Touch
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Interested in working together? Let's connect.
          </Text>
          <Button
            size="lg"
            bg="gray.900"
            color="white"
            _hover={{ bg: "gray.800" }}
            px="8"
          >
            Say Hello
          </Button>
        </VStack>
      </Box>

      {/* Footer */}
      <Box py="8" px="12" bg="white" borderTop="1px solid" borderColor="gray.200">
        <HStack justify="space-between" maxW="1000px" mx="auto">
          <Text fontSize="sm" color="gray.500">
            © 2024 Andy Bello
          </Text>
          <HStack gap="4">
            <Link
              href="#"
              aria-label="GitHub"
              color="gray.500"
              _hover={{ color: "gray.700" }}
            >
              <Icon size="sm">
                <LuGithub />
              </Icon>
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              color="gray.500"
              _hover={{ color: "gray.700" }}
            >
              <Icon size="sm">
                <LuLinkedin />
              </Icon>
            </Link>
            <Link
              href="#"
              aria-label="Email"
              color="gray.500"
              _hover={{ color: "gray.700" }}
            >
              <Icon size="sm">
                <LuMail />
              </Icon>
            </Link>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
}
