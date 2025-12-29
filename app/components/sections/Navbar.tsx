"use client";

import { VStack, Link, Icon, Box, HStack, Image } from "@chakra-ui/react";
import { LuGithub, LuLinkedin, LuFileText, LuHouse, LuUser, LuCode, LuFolder, LuMail } from "react-icons/lu";

const navLinks = [
  { href: "#home", label: "Home", icon: LuHouse, color: "white" },
  { href: "#about", label: "About", icon: LuUser, color: "red.400" },
  { href: "#skills", label: "Skills", icon: LuCode, color: "blue.400" },
  { href: "#projects", label: "Projects", icon: LuFolder, color: "yellow.400" },
  { href: "#contact", label: "Contact", icon: LuMail, color: "green.400" },
];

const socialLinks = [
  { href: "https://github.com/andybello28", label: "GitHub", icon: LuGithub },
  { href: "https://www.linkedin.com/in/andy-bello/", label: "LinkedIn", icon: LuLinkedin },
];

export const Navbar = () => (
  <Box
    as="nav"
    position="fixed"
    left="0"
    top="0"
    h="100vh"
    w="80px"
    bg="black.100"
    zIndex="100"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="space-between"
    py="8"
    opacity={0}
    className="animate-nav-left"
    style={{ animationDelay: "2.5s" }}
  >
    {/* Logo / Name */}
    <VStack gap="1">
      <Image
        src="/Andy_Bello.png"
        alt="Andy Bello"
        w="50px"
        h="50px"
        borderRadius="xl"
        objectFit="cover"
        transition="transform 0.3s ease"
        _hover={{ transform: "scale(1.1)" }}
      />
      <HStack gap="1" mt="2">
        <Box w="2" h="2" borderRadius="full" bg="red.400" />
        <Box w="2" h="2" borderRadius="full" bg="yellow.400" />
        <Box w="2" h="2" borderRadius="full" bg="green.400" />
      </HStack>
    </VStack>

    {/* Navigation Links */}
    <VStack gap="4">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-label={link.label}
          p="3"
          borderRadius="xl"
          color="whiteAlpha.600"
          transition="all 0.3s ease"
          _hover={{
            color: link.color,
            bg: "whiteAlpha.100",
            transform: "translateX(4px)"
          }}
          title={link.label}
        >
          <Icon boxSize="5">
            <link.icon />
          </Icon>
        </Link>
      ))}
    </VStack>

    {/* Social Links & Resume */}
    <VStack gap="3">
      {socialLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          aria-label={link.label}
          p="2"
          borderRadius="lg"
          color="whiteAlpha.600"
          transition="all 0.3s ease"
          _hover={{
            color: "cyan.300",
            bg: "whiteAlpha.100",
            transform: "scale(1.1)"
          }}
        >
          <Icon boxSize="4">
            <link.icon />
          </Icon>
        </Link>
      ))}
      <Link
        href="/Andy_Bello_Resume.pdf"
        download
        aria-label="Resume"
        p="2"
        borderRadius="lg"
        border="1px solid"
        borderColor="cyan.500"
        color="cyan.300"
        transition="all 0.3s ease"
        _hover={{
          color: "white",
          bg: "cyan.500",
          transform: "scale(1.1)"
        }}
      >
        <Icon boxSize="4">
          <LuFileText />
        </Icon>
      </Link>
    </VStack>
  </Box>
);
