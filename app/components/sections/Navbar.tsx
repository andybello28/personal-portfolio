"use client";

import { HStack, Text, Link, Icon } from "@chakra-ui/react";
import { LuGithub, LuLinkedin, LuFileText } from "react-icons/lu";

export const Navbar = () => (
  <HStack
    as="nav"
    position="relative"
    zIndex="10"
    justify="space-between"
    align="center"
    px="12"
    opacity={0}
    py="6"
    className="animate-nav"
    style={{ animationDelay: "1.8s" }}
  >
    <Text fontWeight="semibold" fontSize="lg" color="white">
      Andy Bello
    </Text>
    <HStack gap="8">
      <Link href="#about" color="red.400" _hover={{ color: "white" }}>
        About
      </Link>
      <Link href="#skills" color="blue.400" _hover={{ color: "white" }}>
        Skills
      </Link>
      <Link href="#projects" color="yellow.400" _hover={{ color: "white" }}>
        Projects
      </Link>
      <Link href="#contact" color="green.400" _hover={{ color: "white" }}>
        Contact
      </Link>
    </HStack>
    <HStack gap="2">
      <Link
        href="#"
        aria-label="GitHub"
        p="2"
        borderRadius="md"
        color="cyan.200"
        _hover={{ color: "white", bg: "whiteAlpha.200" }}
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
        color="cyan.200"
        _hover={{ color: "white", bg: "whiteAlpha.200" }}
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
        borderColor="cyan.500"
        color="cyan.200"
        _hover={{ color: "white", bg: "whiteAlpha.200" }}
      >
        <Icon size="md">
          <LuFileText />
        </Icon>
      </Link>
    </HStack>
  </HStack>
);
