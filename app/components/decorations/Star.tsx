"use client";

import { Box } from "@chakra-ui/react";

interface StarProps {
  top?: string;
  left?: string;
  right?: string;
  size?: number;
  color?: string;
  glow?: boolean;
  opacity?: number;
}

export const Star = ({
  top,
  left,
  right,
  size = 4,
  color = "white",
  glow = false,
  opacity = 0.8,
}: StarProps) => (
  <Box
    position="absolute"
    top={top}
    left={left}
    right={right}
    w={`${size}px`}
    h={`${size}px`}
    borderRadius="full"
    bg={color}
    opacity={opacity}
    boxShadow={
      glow
        ? `0 0 ${size * 2}px ${size}px ${color === "white" ? "rgba(255,255,255,0.5)" : color}`
        : undefined
    }
    pointerEvents="none"
  />
);
