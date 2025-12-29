"use client";

import { HStack, Link, Icon, Box, Text } from "@chakra-ui/react";
import { LuGithub, LuLinkedin, LuFileText } from "react-icons/lu";

const pageLinks = [
  { href: "#about", label: "About", color: "red.400" },
  { href: "#skills", label: "Skills", color: "blue.400" },
  { href: "#projects", label: "Projects", color: "yellow.400" },
  { href: "#contact", label: "Contact", color: "green.400" },
];

export const MobileNavbar = () => (
  <Box
    as="nav"
    position="fixed"
    top="0"
    left="0"
    right="0"
    zIndex="100"
    bg="blackAlpha.900"
    backdropFilter="blur(10px)"
    display={{ base: "block", lg: "none" }}
    opacity={0}
    className="animate-nav"
    style={{ animationDelay: "2s" }}
  >
    <HStack
      justify="space-between"
      align="center"
      px="4"
      py="1"
    >
      {/* Page Links */}
      <HStack gap="1" flexWrap="wrap">
        {pageLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            px="2"
            py="1"
            borderRadius="full"
            fontSize="xs"
            fontWeight="medium"
            color={link.color}
            transition="all 0.3s ease"
            _hover={{ bg: "whiteAlpha.200" }}
          >
            {link.label}
          </Link>
        ))}
      </HStack>

      {/* Social Links */}
      <HStack gap="2">
        <Link
          href="https://github.com/andybello28"
          target="_blank"
          aria-label="GitHub"
          color="whiteAlpha.700"
          transition="all 0.3s ease"
          _hover={{ color: "white" }}
        >
          <Icon boxSize="4">
            <LuGithub />
          </Icon>
        </Link>
        <Link
          href="https://www.linkedin.com/in/andy-bello/"
          target="_blank"
          aria-label="LinkedIn"
          color="whiteAlpha.700"
          transition="all 0.3s ease"
          _hover={{ color: "cyan.300" }}
        >
          <Icon boxSize="4">
            <LuLinkedin />
          </Icon>
        </Link>
        <Link
          href="/Andy_Bello_Resume.pdf"
          download
          aria-label="Resume"
          px="2"
          py="1"
          borderRadius="md"
          border="1px solid"
          borderColor="cyan.500"
          color="cyan.300"
          fontSize="xs"
          transition="all 0.3s ease"
          _hover={{ color: "white", bg: "cyan.500" }}
        >
          <HStack gap="1">
            <Icon boxSize="3">
              <LuFileText />
            </Icon>
            <Text>CV</Text>
          </HStack>
        </Link>
      </HStack>
    </HStack>
  </Box>
);
