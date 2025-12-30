"use client";

import { Box, Text, HStack, Link, Icon } from "@chakra-ui/react";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

export const Footer = () => (
  <Box position="relative">
    {/* Grass layer */}
    <Box
      h="20px"
      bg="green.400"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: "-15px",
        left: "0",
        right: "0",
        height: "20px",
        background:
          "repeating-linear-gradient(90deg, transparent 0px, transparent 8px, green.500 8px, green.500 10px), linear-gradient(to bottom, transparent 0%, green.400 100%)",
      }}
    >
      {/* Grass blades */}
      <HStack
        position="absolute"
        top="-12px"
        left="0"
        right="0"
        justify="space-around"
        px="4"
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <Box
            key={i}
            w="8px"
            h={`${12 + (i % 3) * 6}px`}
            bg="green.500"
            borderRadius="full"
            transform={`rotate(${(i % 5) * 5 - 10}deg)`}
            mt={`${(i % 3) * -4}px`}
          />
        ))}
      </HStack>
      {/* Apple tree */}
      <Box position="absolute" left="12%" bottom="0" zIndex={-1}>
        {/* Tree trunk */}
        <Box
          position="absolute"
          bottom="0"
          left="50%"
          transform="translateX(-50%)"
          w="20px"
          h="80px"
          bg="orange.900"
          borderRadius="sm"
        />
        {/* Tree canopy */}
        <Box
          position="absolute"
          bottom="65px"
          left="50%"
          transform="translateX(-50%)"
          w="90px"
          h="75px"
          bg="green.600"
          borderRadius="full"
        />
        <Box
          position="absolute"
          bottom="85px"
          left="50%"
          transform="translateX(-50%) translateX(-25px)"
          w="70px"
          h="60px"
          bg="green.500"
          borderRadius="full"
        />
        <Box
          position="absolute"
          bottom="85px"
          left="50%"
          transform="translateX(-50%) translateX(25px)"
          w="70px"
          h="60px"
          bg="green.500"
          borderRadius="full"
        />
        <Box
          position="absolute"
          bottom="110px"
          left="50%"
          transform="translateX(-50%)"
          w="60px"
          h="50px"
          bg="green.400"
          borderRadius="full"
        />
        {/* Apples on tree */}
        <Box
          position="absolute"
          bottom="75px"
          left="50%"
          transform="translateX(-50%) translateX(-30px)"
          w="14px"
          h="14px"
          bg="red.500"
          borderRadius="full"
        />
        <Box
          position="absolute"
          bottom="100px"
          left="50%"
          transform="translateX(-50%) translateX(20px)"
          w="12px"
          h="12px"
          bg="red.400"
          borderRadius="full"
        />
        <Box
          position="absolute"
          bottom="90px"
          left="50%"
          transform="translateX(-50%) translateX(-5px)"
          w="12px"
          h="12px"
          bg="red.500"
          borderRadius="full"
        />
        {/* Fallen apple on ground */}
        <Box
          position="absolute"
          bottom="-2px"
          left="50%"
          transform="translateX(-50%) translateX(40px)"
          w="14px"
          h="14px"
          bg="red.500"
          borderRadius="full"
          boxShadow="inset -2px -2px 3px rgba(0,0,0,0.2)"
        />
      </Box>
    </Box>

    {/* Dirt layer */}
    <Box
      py="8"
      px={{ base: "4", md: "8", lg: "12" }}
      bg="orange.800"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        background:
          "radial-gradient(circle at 20% 30%, orange.700 2px, transparent 2px), radial-gradient(circle at 60% 70%, orange.900 3px, transparent 3px), radial-gradient(circle at 80% 20%, orange.700 2px, transparent 2px), radial-gradient(circle at 40% 80%, orange.900 2px, transparent 2px)",
        opacity: 0.5,
      }}
    >
      {/* Dirt texture dots */}
      <HStack
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        flexWrap="wrap"
        gap="8"
        p="4"
        opacity={0.3}
        pointerEvents="none"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <Box
            key={i}
            w={`${4 + (i % 3) * 2}px`}
            h={`${4 + (i % 3) * 2}px`}
            borderRadius="full"
            bg="orange.900"
          />
        ))}
      </HStack>

      <HStack
        justify="space-between"
        flexWrap="wrap"
        gap="4"
        maxW="1000px"
        mx="auto"
        position="relative"
        zIndex="1"
      >
        <Text fontSize={{ base: "xs", lg: "sm" }} color="orange.100">
          © 2025 Andy Bello
        </Text>
        <HStack gap="4">
          <Link
            href="#"
            aria-label="GitHub"
            color="orange.200"
            _hover={{ color: "white" }}
          >
            <Icon size="sm">
              <LuGithub />
            </Icon>
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            color="orange.200"
            _hover={{ color: "white" }}
          >
            <Icon size="sm">
              <LuLinkedin />
            </Icon>
          </Link>
          <Link
            href="#"
            aria-label="Email"
            color="orange.200"
            _hover={{ color: "white" }}
          >
            <Icon size="sm">
              <LuMail />
            </Icon>
          </Link>
        </HStack>
      </HStack>
    </Box>

    {/* Deep earth layer */}
    <Box h="16px" bg="orange.900" />
  </Box>
);
