"use client";

import {
  Box,
  Heading,
  Text,
  Carousel,
  VStack,
  HStack,
  Button,
  Link,
  Icon,
} from "@chakra-ui/react";
import { LuGithub, LuLinkedin, LuFileText, LuMail, LuChevronLeft, LuChevronRight } from "react-icons/lu";

const items = Array.from({ length: 5 })

// Reusable Star component for galaxy section
const Star = ({ top, left, right, size = 4, color = "white", glow = false }: {
  top?: string;
  left?: string;
  right?: string;
  size?: number;
  color?: string;
  glow?: boolean;
}) => (
  <Box
    position="absolute"
    top={top}
    left={left}
    right={right}
    w={`${size}px`}
    h={`${size}px`}
    borderRadius="full"
    bg={color}
    opacity={0.7 + Math.random() * 0.3}
    boxShadow={glow ? `0 0 ${size * 2}px ${size}px ${color === "white" ? "rgba(255,255,255,0.5)" : color}` : undefined}
    pointerEvents="none"
  />
)

// Sun component with glow effect
const Sun = ({ top, left, right, size = 80, delay = 0 }: {
  top?: string;
  left?: string;
  right?: string;
  size?: number;
  delay?: number;
}) => (
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
      0 0 ${size/2}px ${size/4}px rgba(255, 193, 7, 0.6),
      0 0 ${size}px ${size/2}px rgba(255, 152, 0, 0.4),
      0 0 ${size * 1.5}px ${size}px rgba(255, 87, 34, 0.2),
      inset -${size/6}px -${size/6}px ${size/3}px rgba(255, 143, 0, 0.5)
    `}
    pointerEvents="none"
    className="animate-planet"
    style={{ animationDelay: `${delay}s` }}
  />
)

// Reusable Planet component for space section
const Planet = ({ top, left, right, size = 60, gradient, ringColor, hasRing = false, ringTilt = 75, delay = 0 }: {
  top?: string;
  left?: string;
  right?: string;
  size?: number;
  gradient: string;
  ringColor?: string;
  hasRing?: boolean;
  ringTilt?: number;
  delay?: number;
}) => (
  <Box
    position="absolute"
    top={top}
    left={left}
    right={right}
    w={`${size}px`}
    h={`${size}px`}
    borderRadius="full"
    bg={gradient}
    boxShadow={`inset -${size/4}px -${size/4}px ${size/2}px rgba(0,0,0,0.4), 0 0 ${size/3}px ${size/8}px rgba(255,255,255,0.08)`}
    pointerEvents="none"
    className="animate-planet"
    style={{ animationDelay: `${delay}s` }}
    _before={hasRing ? {
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
      boxShadow: `0 0 ${size/4}px ${ringColor || "rgba(210, 180, 140, 0.3)"}`,
    } : undefined}
  />
)

// Rocket ship component with dotted trail
const Rocket = ({ top, left, delay = 0 }: { top: string; left: string; delay?: number }) => (
  <Box
    position="absolute"
    top={top}
    left={left}
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
)

// Reusable Cloud component
const Cloud = ({ top, left, right, bottom, scale = 1, opacity = 1 }: {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  scale?: number;
  opacity?: number;
}) => (
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
    <Box w="90px" h="90px" borderRadius="full" bg="white" boxShadow="md" ml="-6" mt="-4" />
    <Box w="70px" h="70px" borderRadius="full" bg="white" boxShadow="md" ml="-7" />
  </HStack>
)

export default function Home() {
  return (
    <Box
      minH="100vh"
      position="relative"
      overflowX="hidden"
      bgGradient="to-b"
      gradientFrom="#1a1a2e"
      gradientVia="#6b3fa0"
      gradientTo="#f7fafc"
      style={{
        background: `linear-gradient(
          to bottom,
          #0a0a1a 0%,
          #0d1b2a 8%,
          #1b263b 18%,
          #264653 30%,
          #2a6f97 42%,
          #61a5c2 55%,
          #89c2d9 68%,
          #a9d6e5 78%,
          #caf0f8 88%,
          #f7fafc 100%
        )`
      }}
    >
      {/* Stars in galaxy section */}
      <Star top="50px" left="10%" size={3} glow />
      <Star top="80px" left="25%" size={2} />
      <Star top="30px" left="40%" size={4} color="cyan.200" glow />
      <Star top="120px" left="55%" size={2} />
      <Star top="60px" left="70%" size={5} glow />
      <Star top="100px" left="85%" size={3} />
      <Star top="150px" left="15%" size={4} color="yellow.200" glow />
      <Star top="200px" left="35%" size={2} />
      <Star top="180px" left="60%" size={3} glow />
      <Star top="220px" left="80%" size={4} color="blue.200" />
      <Star top="250px" left="5%" size={2} />
      <Star top="300px" left="20%" size={5} glow />
      <Star top="280px" left="45%" size={3} color="cyan.100" />
      <Star top="350px" left="65%" size={2} />
      <Star top="320px" left="90%" size={4} glow />
      <Star top="400px" left="12%" size={3} />
      <Star top="380px" left="50%" size={2} color="yellow.100" glow />
      <Star top="450px" left="75%" size={3} />
      <Star top="500px" left="30%" size={2} />
      <Star top="550px" left="88%" size={3} glow />

      {/* Sun - largest, positioned prominently */}
      <Sun top="80px" right="12%" size={100} delay={0.1} />

      {/* Saturn - second largest with prominent rings (tan/beige) */}
      <Planet
        top="180px"
        left="5%"
        size={85}
        gradient="linear-gradient(135deg, #f5e6d3 0%, #d4a574 40%, #c4956a 70%, #a67c52 100%)"
        hasRing
        ringColor="rgba(210, 180, 140, 0.7)"
        ringTilt={70}
        delay={0.2}
      />

      {/* Uranus - third largest with subtle rings (cyan/ice blue) */}
      <Planet
        top="320px"
        right="6%"
        size={65}
        gradient="linear-gradient(135deg, #b2ebf2 0%, #4dd0e1 40%, #26c6da 70%, #00acc1 100%)"
        hasRing
        ringColor="rgba(178, 235, 242, 0.5)"
        ringTilt={85}
        delay={0.4}
      />

      {/* Venus - yellowish/cream colored */}
      <Planet
        top="140px"
        left="75%"
        size={35}
        gradient="linear-gradient(135deg, #fff8e1 0%, #ffe082 40%, #ffca28 70%, #ffb300 100%)"
        delay={0.3}
      />

      {/* Mars - red/rust colored, smaller */}
      <Planet
        top="420px"
        left="8%"
        size={30}
        gradient="linear-gradient(135deg, #d84315 0%, #bf360c 40%, #a1260a 70%, #8b1a08 100%)"
        delay={0.5}
      />

      {/* Rocket launching from About section */}
      <Rocket top="520px" left="45%" delay={1} />

      {/* Clouds appear in sky section (after space) */}
      <Cloud top="750px" left="5%" scale={1.2} />
      <Cloud top="850px" right="8%" scale={0.9} opacity={0.9} />
      <Cloud top="1000px" left="3%" scale={1} />
      <Cloud top="1150px" right="5%" scale={1.3} opacity={0.85} />
      <Cloud top="1350px" left="8%" scale={0.9} />
      <Cloud top="1500px" right="3%" scale={1.1} />
      <Cloud top="1700px" left="5%" scale={1.4} opacity={0.8} />
      <Cloud top="1900px" right="10%" scale={0.85} />
      <Cloud top="2100px" left="2%" scale={1.2} />
      <Cloud top="2300px" right="6%" scale={1} opacity={0.9} />

      {/* Navigation */}
      <HStack
        as="nav"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="1000"
        bg="transparent"
        backdropFilter="blur(12px)"
        justify="space-between"
        align="center"
        px="12"
        py="6"
        className="animate-nav"
        style={{ animationDelay: "1.8s" }}
      >
        <Text fontWeight="semibold" fontSize="lg" color="white">
          Andy Bello
        </Text>
        <HStack gap="8">
          <Link href="#about" color="cyan.200" _hover={{ color: "white" }}>
            About
          </Link>
          <Link href="#skills" color="cyan.200" _hover={{ color: "white" }}>
            Skills
          </Link>
          <Link href="#projects" color="cyan.200" _hover={{ color: "white" }}>
            Projects
          </Link>
          <Link href="#contact" color="cyan.200" _hover={{ color: "white" }}>
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

      {/* Hero Section */}
      <HStack
        position="relative"
        minH="100vh"
        pt="24"
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
          <Box flex="1" p="4">
                <Carousel.Root slideCount={items.length} maxW="md" mx="auto" gap="4">
      <Carousel.ItemGroup>
        {items.map((_, index) => (
          <Carousel.Item key={index} index={index}>
            <Box w="100%" h="300px" rounded="lg" fontSize="2.5rem">
              {index + 1}
            </Box>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control justifyContent="center" gap="4">
        <Carousel.Indicators />
      </Carousel.Control>
    </Carousel.Root>
          </Box>
        </Box>
      </HStack>

      {/* About Section */}
      <Box id="about" py="24" px="12">
        <VStack gap="8" maxW="800px" mx="auto" bg="whiteAlpha.800" p="10" borderRadius="2xl" backdropFilter="blur(8px)">
          <Heading as="h2" fontSize="4xl" fontWeight="bold" color="gray.800">
            About Me
          </Heading>
          <Text fontSize="lg" color="gray.600" textAlign="center" lineHeight="tall">
            Your about content goes here. Describe your background, skills, and
            what makes you unique.
          </Text>
        </VStack>
      </Box>

      {/* Skills Section */}
      <Box id="skills" py="24" px="12">
        <VStack gap="12" maxW="1000px" mx="auto">
          <Heading as="h2" fontSize="4xl" fontWeight="bold" color="gray.800">
            Skills
          </Heading>
          <HStack gap="8" align="flex-start" wrap="wrap" justify="center">
            {[
              { title: "Languages", skills: ["JavaScript", "TypeScript", "Python", "Java"], color: "blue.400" },
              { title: "Frameworks", skills: ["React", "Next.js", "Node.js", "Express"], color: "purple.400" },
              { title: "Tools", skills: ["Git", "Docker", "AWS", "VS Code"], color: "green.400" },
              { title: "Databases", skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"], color: "orange.400" },
            ].map((category) => (
              <VStack
                key={category.title}
                p="6"
                bg="whiteAlpha.800"
                borderRadius="xl"
                backdropFilter="blur(8px)"
                minW="200px"
                align="flex-start"
                gap="4"
              >
                <HStack>
                  <Box w="2" h="2" borderRadius="full" bg={category.color} />
                  <Text fontWeight="semibold" color="gray.800">
                    {category.title}
                  </Text>
                </HStack>
                <VStack align="flex-start" gap="2">
                  {category.skills.map((skill) => (
                    <Text key={skill} fontSize="sm" color="gray.600">
                      {skill}
                    </Text>
                  ))}
                </VStack>
              </VStack>
            ))}
          </HStack>
        </VStack>
      </Box>

      {/* Projects Section */}
      <Box id="projects" py="24" px="12">
        <VStack gap="12" maxW="1000px" mx="auto">
          <Heading as="h2" fontSize="4xl" fontWeight="bold" color="gray.800">
            Projects
          </Heading>
          <HStack gap="6" wrap="wrap" justify="center">
            {[1, 2, 3, 4].map((i) => (
              <VStack
                key={i}
                p="6"
                bg="whiteAlpha.800"
                borderRadius="xl"
                backdropFilter="blur(8px)"
                w="280px"
                align="flex-start"
                gap="3"
                _hover={{ bg: "whiteAlpha.900", shadow: "md" }}
                transition="all 0.2s"
              >
                <Box
                  w="full"
                  h="140px"
                  bg="gray.200"
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text color="gray.500" fontSize="sm">
                    Image
                  </Text>
                </Box>
                <Text fontWeight="semibold" color="gray.800">
                  Project {i}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Project description goes here
                </Text>
              </VStack>
            ))}
          </HStack>
        </VStack>
      </Box>

      {/* Contact Section */}
      <Box id="contact" py="24" px="12">
        <VStack gap="8" maxW="600px" mx="auto" textAlign="center" bg="whiteAlpha.800" p="10" borderRadius="2xl" backdropFilter="blur(8px)">
          <Heading as="h2" fontSize="4xl" fontWeight="bold" color="gray.800">
            Get in Touch
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Interested in working together? Let's connect.
          </Text>
          <Button
            size="lg"
            bg="green.600"
            color="white"
            _hover={{ bg: "green.500" }}
            px="8"
          >
            Say Hello
          </Button>
        </VStack>
      </Box>

      {/* Footer - Earth/Ground */}
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
            background: "repeating-linear-gradient(90deg, transparent 0px, transparent 8px, green.500 8px, green.500 10px), linear-gradient(to bottom, transparent 0%, green.400 100%)",
          }}
        >
          {/* Grass blades */}
          <HStack position="absolute" top="-12px" left="0" right="0" justify="space-around" px="4">
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
        </Box>

        {/* Dirt layer */}
        <Box
          py="8"
          px="12"
          bg="orange.800"
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background: "radial-gradient(circle at 20% 30%, orange.700 2px, transparent 2px), radial-gradient(circle at 60% 70%, orange.900 3px, transparent 3px), radial-gradient(circle at 80% 20%, orange.700 2px, transparent 2px), radial-gradient(circle at 40% 80%, orange.900 2px, transparent 2px)",
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

          <HStack justify="space-between" maxW="1000px" mx="auto" position="relative" zIndex="1">
            <Text fontSize="sm" color="orange.100">
              © 2024 Andy Bello
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
    </Box>
  );
}
