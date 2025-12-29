"use client";

import { Box } from "@chakra-ui/react";

interface PlanetProps {
  top?: string;
  left?: string;
  right?: string;
  size?: number;
  gradient: string;
  ringColor?: string;
  hasRing?: boolean;
  ringTilt?: number;
  delay?: number;
}

export const Planet = ({
  top,
  left,
  right,
  size = 60,
  gradient,
  ringColor,
  hasRing = false,
  ringTilt = 75,
  delay = 0,
}: PlanetProps) => (
  <Box
    position="absolute"
    top={top}
    left={left}
    right={right}
    w={`${size}px`}
    h={`${size}px`}
    borderRadius="full"
    bg={gradient}
    boxShadow={`inset -${size / 4}px -${size / 4}px ${size / 2}px rgba(0,0,0,0.4), 0 0 ${size / 3}px ${size / 8}px rgba(255,255,255,0.08)`}
    pointerEvents="none"
    className="animate-planet"
    style={{ animationDelay: `${delay}s` }}
    _before={
      hasRing
        ? {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) rotateX(${ringTilt}deg)`,
            w: `${size * 2}px`,
            h: `${size * 2}px`,
            borderRadius: "full",
            border: `${Math.max(3, size / 20)}px solid`,
            borderColor: ringColor || "rgba(210, 180, 140, 0.6)",
            boxShadow: `0 0 ${size / 4}px ${ringColor || "rgba(210, 180, 140, 0.3)"}`,
          }
        : undefined
    }
  />
);
