"use client";

import {
  Box,
  Heading,
  Text,
  Carousel,
  VStack,
  HStack,
  Link,
  Icon,
  Stack,
  Image,
} from "@chakra-ui/react";
import { LuGithub, LuLinkedin, LuFileText } from "react-icons/lu";

const items = [
  { src: "/Professional.png", alt: "Professional photo" },
  { src: "/Mom.png", alt: "With Mom" },
  { src: "/Dad.png", alt: "With Dad" },
  { src: "/Ski.png", alt: "Skiing" },
]

export const HeroSection = () => (
  <Stack
    direction={{ base: "column", lg: "row" }}
    position="relative"
    minH={{ base: "auto", lg: "calc(100vh - 88px)" }}
    px={{ base: "6", md: "8", lg: "12" }}
    py={{ base: "12", lg: "0" }}
    gap={{ base: "10", lg: "16" }}
    justify="center"
    align="center"
  >
    {/* Left side - Text content */}
    <VStack gap={{ base: "6", lg: "8" }} align={{ base: "center", lg: "flex-start" }} maxW="500px">
      {/* Colorful accent dot */}
      <HStack gap="3" className="animate-text" style={{ animationDelay: "1.5s" }}>
        <Box w="3" h="3" borderRadius="full" bg="red.400" />
        <Box w="3" h="3" borderRadius="full" bg="yellow.400" />
        <Box w="3" h="3" borderRadius="full" bg="green.400" />
      </HStack>

      <VStack gap="4" align={{ base: "center", lg: "flex-start" }}>
        <Text
          fontSize="sm"
          fontWeight="medium"
          color="cyan.300"
          textTransform="uppercase"
          letterSpacing="widest"
          className="animate-text"
          style={{ animationDelay: "1.6s" }}
        >
          Welcome
        </Text>
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="white"
          letterSpacing="tight"
          lineHeight="1.1"
          textAlign={{ base: "center", lg: "left" }}
          className="animate-text"
          style={{ animationDelay: "1.7s" }}
        >
          Hi, I'm Andy
        </Heading>
        <Text
          fontSize={{ base: "md", lg: "lg" }}
          color="cyan.100"
          lineHeight="tall"
          textAlign={{ base: "center", lg: "left" }}
          className="animate-text"
          style={{ animationDelay: "1.8s" }}
          display={{ base: "none", md: "block" }}
        >
          Albanian-American software engineer from Boston, MA building scalable full-stack applications.
        </Text>
      </VStack>

      {/* CTA Buttons - hidden on mobile/tablet */}
      <HStack gap="3" pt="2" flexWrap="wrap" justify={{ base: "center", lg: "flex-start" }} className="animate-text" style={{ animationDelay: "1.9s" }} display={{ base: "none", lg: "flex" }}>
        <Link
          href="#about"
          px="4"
          py="2"
          borderRadius="full"
          border="1px solid"
          borderColor="red.400"
          color="red.400"
          fontSize="sm"
          fontWeight="medium"
          transition="all 0.3s ease"
          _hover={{ bg: "red.400", color: "white", transform: "translateY(-2px)" }}
        >
          About
        </Link>
        <Link
          href="#skills"
          px="4"
          py="2"
          borderRadius="full"
          border="1px solid"
          borderColor="blue.400"
          color="blue.400"
          fontSize="sm"
          fontWeight="medium"
          transition="all 0.3s ease"
          _hover={{ bg: "blue.400", color: "white", transform: "translateY(-2px)" }}
        >
          Skills
        </Link>
        <Link
          href="#projects"
          px="4"
          py="2"
          borderRadius="full"
          border="1px solid"
          borderColor="yellow.400"
          color="yellow.400"
          fontSize="sm"
          fontWeight="medium"
          transition="all 0.3s ease"
          _hover={{ bg: "yellow.400", color: "black", transform: "translateY(-2px)" }}
        >
          Projects
        </Link>
        <Link
          href="#contact"
          px="4"
          py="2"
          borderRadius="full"
          border="1px solid"
          borderColor="green.400"
          color="green.400"
          fontSize="sm"
          fontWeight="medium"
          transition="all 0.3s ease"
          _hover={{ bg: "green.400", color: "white", transform: "translateY(-2px)" }}
        >
          Contact
        </Link>
      </HStack>

      {/* Social Links - hidden on mobile/tablet */}
      <HStack gap="4" className="animate-text" style={{ animationDelay: "2s" }} display={{ base: "none", lg: "flex" }}>
        <Link
          href="https://github.com/andybello28"
          target="_blank"
          aria-label="GitHub"
          color="whiteAlpha.700"
          transition="all 0.3s ease"
          _hover={{ color: "cyan.300", transform: "scale(1.1)" }}
        >
          <Icon boxSize="5">
            <LuGithub />
          </Icon>
        </Link>
        <Link
          href="https://www.linkedin.com/in/andy-bello/"
          target="_blank"
          aria-label="LinkedIn"
          color="whiteAlpha.700"
          transition="all 0.3s ease"
          _hover={{ color: "cyan.300", transform: "scale(1.1)" }}
        >
          <Icon boxSize="5">
            <LuLinkedin />
          </Icon>
        </Link>
        <Link
          href="/Andy_Bello_Resume.pdf"
          download
          aria-label="Resume"
          px="3"
          py="1"
          borderRadius="md"
          border="1px solid"
          borderColor="cyan.500"
          color="cyan.300"
          fontSize="sm"
          transition="all 0.3s ease"
          _hover={{ color: "white", bg: "cyan.500" }}
        >
          <HStack gap="2">
            <Icon boxSize="4">
              <LuFileText />
            </Icon>
            <Text>Resume</Text>
          </HStack>
        </Link>
      </HStack>

      {/* Subtle colorful underline */}
      <Box pt="4" className="animate-text" style={{ animationDelay: "2.1s" }}>
        <HStack gap="1">
          <Box w="16" h="1" bg="blue.400" borderRadius="full" />
          <Box w="8" h="1" bg="purple.400" borderRadius="full" />
          <Box w="4" h="1" bg="pink.400" borderRadius="full" />
        </HStack>
      </Box>
    </VStack>

    {/* Right side - Image Carousel Placeholder */}
    <Box
      w={{ base: "100%", sm: "350px", lg: "400px" }}
      h={{ base: "350px", sm: "400px", lg: "500px" }}
      maxW="400px"
      bg="white"
      borderRadius="2xl"
      border="1px solid"
      borderColor="gray.200"
      shadow="lg"
      display="flex"
      flexDirection="column"
      overflow="hidden"
      className="animate-text"
      style={{ animationDelay: "2.1s" }}
      overflowY="scroll"
    >
      {/* Mac-style window header */}
      <HStack px="4" py="3" bg="gray.100" borderBottom="1px solid" borderColor="gray.200" justify="center">
        <HStack gap="2">
          <Box w="3" h="3" borderRadius="full" bg="red.400" />
          <Box w="3" h="3" borderRadius="full" bg="yellow.400" />
          <Box w="3" h="3" borderRadius="full" bg="green.400" />
          <Box w="3" h="3" borderRadius="full" bg="blue.400" />
        </HStack>
      </HStack>

      {/* Carousel content area */}
      <Box flex="1" display="flex" flexDirection="column" px="4" pb="2">
        <Carousel.Root
          slideCount={items.length}
          h="100%"
          display="flex"
          flexDirection="column"
          autoplay={{ delay: 3500 }}
        >
          <Carousel.ItemGroup flex="1">
            {items.map((item, index) => (
              <Carousel.Item key={index} index={index}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>

          <Carousel.Control justifyContent="center" pb="6" gap="4">
            <Carousel.Indicators _current={{ bg: "blue.500" }} />
          </Carousel.Control>
        </Carousel.Root>
      </Box>
    </Box>
  </Stack>
);
