"use client";

import { Box, HStack } from "@chakra-ui/react";

interface CloudProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  scale?: number;
  opacity?: number;
}

export const Cloud = ({
  top,
  left,
  right,
  bottom,
  scale = 1,
  opacity = 1,
}: CloudProps) => (
  <HStack
    position="absolute"
    top={top}
    left={left}
    right={right}
    bottom={bottom}
    gap="0"
    transform={`scale(${scale})`}
    opacity={opacity}
    pointerEvents="none"
  >
    <Box w="60px" h="60px" borderRadius="full" bg="white" boxShadow="md" />
    <Box
      w="90px"
      h="90px"
      borderRadius="full"
      bg="white"
      boxShadow="md"
      ml="-6"
      mt="-4"
    />
    <Box w="70px" h="70px" borderRadius="full" bg="white" boxShadow="md" ml="-7" />
  </HStack>
);
