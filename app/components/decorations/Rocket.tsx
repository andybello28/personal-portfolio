"use client";

import { Box } from "@chakra-ui/react";

interface RocketProps {
  top: string | Record<string, string>;
  left: string | Record<string, string>;
  delay?: number;
  display?: string | Record<string, string>;
}

export const Rocket = ({ top, left, delay = 0, display }: RocketProps) => (
  <Box
    position="absolute"
    top={top}
    left={left}
    display={display}
    pointerEvents="none"
    className="animate-rocket"
    style={{ animationDelay: `${delay}s` }}
  >
    {/* Dotted trail */}
    <Box
      position="absolute"
      top="60px"
      left="50%"
      transform="translateX(-50%)"
      w="4px"
      h="400px"
      background="repeating-linear-gradient(to bottom, rgba(255,255,255,0.8) 0px, rgba(255,255,255,0.8) 8px, transparent 8px, transparent 20px)"
      opacity={0.6}
    />
    {/* Rocket body */}
    <Box position="relative" w="40px" h="60px">
      {/* Nose cone */}
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        w="0"
        h="0"
        borderLeft="12px solid transparent"
        borderRight="12px solid transparent"
        borderBottom="20px solid #e0e0e0"
      />
      {/* Main body */}
      <Box
        position="absolute"
        top="18px"
        left="50%"
        transform="translateX(-50%)"
        w="24px"
        h="30px"
        bg="linear-gradient(90deg, #f5f5f5 0%, #e0e0e0 50%, #bdbdbd 100%)"
        borderRadius="4px"
      />
      {/* Window */}
      <Box
        position="absolute"
        top="24px"
        left="50%"
        transform="translateX(-50%)"
        w="10px"
        h="10px"
        bg="linear-gradient(135deg, #64b5f6 0%, #1976d2 100%)"
        borderRadius="full"
        border="2px solid #90caf9"
      />
      {/* Left fin */}
      <Box
        position="absolute"
        bottom="8px"
        left="2px"
        w="0"
        h="0"
        borderTop="12px solid transparent"
        borderRight="10px solid #ef5350"
        borderBottom="0px solid transparent"
      />
      {/* Right fin */}
      <Box
        position="absolute"
        bottom="8px"
        right="2px"
        w="0"
        h="0"
        borderTop="12px solid transparent"
        borderLeft="10px solid #ef5350"
        borderBottom="0px solid transparent"
      />
      {/* Flame */}
      <Box
        position="absolute"
        bottom="-20px"
        left="50%"
        transform="translateX(-50%)"
        w="16px"
        h="25px"
        background="linear-gradient(to bottom, #ff9800 0%, #ff5722 50%, #f44336 100%)"
        borderRadius="0 0 50% 50%"
        boxShadow="0 0 15px 5px rgba(255, 152, 0, 0.5), 0 0 30px 10px rgba(255, 87, 34, 0.3)"
      />
    </Box>
  </Box>
);
