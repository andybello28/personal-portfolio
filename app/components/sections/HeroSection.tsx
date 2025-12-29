"use client";

import {
  Box,
  Heading,
  Text,
  Carousel,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";

const items = Array.from({ length: 5 });

export const HeroSection = () => (
  <HStack
    position="relative"
    minH="calc(100vh - 88px)"
    px="12"
    gap="16"
    justify="center"
    align="center"
  >
    {/* Left side - Text content */}
    <VStack gap="8" align="flex-start" maxW="500px">
      {/* Colorful accent dot */}
      <HStack gap="3" className="animate-text" style={{ animationDelay: "1.5s" }}>
        <Box w="3" h="3" borderRadius="full" bg="red.400" />
        <Box w="3" h="3" borderRadius="full" bg="yellow.400" />
        <Box w="3" h="3" borderRadius="full" bg="green.400" />
      </HStack>

      <VStack gap="4" align="flex-start">
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
          fontSize="5xl"
          fontWeight="bold"
          color="white"
          letterSpacing="tight"
          lineHeight="1.1"
          className="animate-text"
          style={{ animationDelay: "1.7s" }}
        >
          Hi, I'm Andy
        </Heading>
        <Text
          fontSize="lg"
          color="cyan.100"
          lineHeight="tall"
          className="animate-text"
          style={{ animationDelay: "1.8s" }}
        >
          A developer passionate about creating clean, functional, and
          beautiful digital experiences.
        </Text>
      </VStack>

      {/* CTA Buttons */}
      <HStack gap="4" pt="2" className="animate-text" style={{ animationDelay: "1.9s" }}>
        <Button
          size="lg"
          bg="cyan.600"
          color="white"
          _hover={{ bg: "cyan.500" }}
          px="8"
        >
          View Projects
        </Button>
        <Button
          size="lg"
          variant="outline"
          borderColor="cyan.400"
          color="white"
          _hover={{ bg: "whiteAlpha.200" }}
          px="8"
        >
          Get in Touch
        </Button>
      </HStack>

      {/* Subtle colorful underline */}
      <Box pt="4" className="animate-text" style={{ animationDelay: "2s" }}>
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
      className="animate-text"
      style={{ animationDelay: "2.1s" }}
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
      <Box flex="1" display="flex" flexDirection="column">
        <Carousel.Root
          slideCount={items.length}
          h="100%"
          display="flex"
          flexDirection="column"
          autoplay={{ delay: 3500 }}
        >
          <Carousel.ItemGroup flex="1">
            {items.map((_, index) => (
              <Carousel.Item key={index} index={index}>
                <Box
                  w="100%"
                  h="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="2.5rem"
                >
                  {index + 1}
                </Box>
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>

          <Carousel.Control justifyContent="center" py="4">
            <Carousel.Indicators
              bg="black"
              _current={{ bg: "blue.500" }}
            />
          </Carousel.Control>
        </Carousel.Root>
      </Box>
    </Box>
  </HStack>
);
