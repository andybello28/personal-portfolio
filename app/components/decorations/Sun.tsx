"use client";

import { Box } from "@chakra-ui/react";

interface SunProps {
  top?: string;
  left?: string;
  right?: string;
  size?: number;
  delay?: number;
}

export const Sun = ({ top, left, right, size = 80, delay = 0 }: SunProps) => (
  <Box
    position="absolute"
    top={top}
    left={left}
    right={right}
    w={`${size}px`}
    h={`${size}px`}
    borderRadius="full"
    bg="linear-gradient(135deg, #fff7ae 0%, #ffd54f 30%, #ffb300 70%, #ff8f00 100%)"
    boxShadow={`
      0 0 ${size / 2}px ${size / 4}px rgba(255, 193, 7, 0.6),
      0 0 ${size}px ${size / 2}px rgba(255, 152, 0, 0.4),
      0 0 ${size * 1.5}px ${size}px rgba(255, 87, 34, 0.2),
      inset -${size / 6}px -${size / 6}px ${size / 3}px rgba(255, 143, 0, 0.5)
    `}
    pointerEvents="none"
    className="animate-planet"
    style={{ animationDelay: `${delay}s` }}
  />
);
