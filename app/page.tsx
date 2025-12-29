"use client";

import { Box } from "@chakra-ui/react";
import {
  Star,
  Sun,
  Planet,
  Rocket,
  Cloud,
  MobileNavbar,
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from "./components";

export default function Home() {
  return (
    <Box
      id="home"
      minH="100vh"
      position="relative"
      overflowX="hidden"
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
        )`,
      }}
    >
      {/* Stars in galaxy section */}
      <Star top="50px" left="10%" size={3} glow opacity={0.9} />
      <Star top="80px" left="25%" size={2} opacity={0.7} />
      <Star top="30px" left="40%" size={4} color="cyan.200" glow opacity={0.85} />
      <Star top="120px" left="55%" size={2} opacity={0.75} />
      <Star top="60px" left="70%" size={5} glow opacity={0.95} />
      <Star top="100px" left="85%" size={3} opacity={0.8} />
      <Star top="150px" left="15%" size={4} color="yellow.200" glow opacity={0.9} />
      <Star top="200px" left="35%" size={2} opacity={0.7} />
      <Star top="180px" left="60%" size={3} glow opacity={0.85} />
      <Star top="220px" left="80%" size={4} color="blue.200" opacity={0.8} />
      <Star top="250px" left="5%" size={2} opacity={0.75} />
      <Star top="275px" left="30%" size={5} glow opacity={0.9} />
      <Star top="280px" left="45%" size={3} color="cyan.100" opacity={0.85} />
      <Star top="350px" left="65%" size={2} opacity={0.7} />
      <Star top="320px" left="90%" size={4} glow opacity={0.95} />
      <Star top="400px" left="12%" size={3} opacity={0.8} />
      <Star top="380px" left="50%" size={2} color="yellow.100" glow opacity={0.85} />
      <Star top="450px" left="75%" size={3} opacity={0.75} />
      <Star top="500px" left="30%" size={2} opacity={0.7} />
      <Star top="550px" left="88%" size={3} glow opacity={0.9} />

      {/* Sun - largest, positioned prominently */}
      <Sun top="80px" right="12%" size={100} delay={0.1} />

      {/* Saturn - second largest with prominent rings (tan/beige) */}
      <Planet
        top="180px"
        left="40%"
        size={85}
        gradient="linear-gradient(135deg, #f5e6d3 0%, #d4a574 40%, #c4956a 70%, #a67c52 100%)"
        hasRing
        ringColor="rgba(210, 180, 140, 0.7)"
        ringTilt={70}
        delay={0.2}
      />

      {/* Uranus - third largest with subtle rings (cyan/ice blue) */}
      <Planet
        top="280px"
        left="6%"
        size={65}
        gradient="linear-gradient(135deg, #b2ebf2 0%, #4dd0e1 40%, #26c6da 70%, #00acc1 100%)"
        hasRing
        ringColor="rgba(178, 235, 242, 0.5)"
        ringTilt={85}
        delay={0.4}
      />

      {/* Venus - yellowish/cream colored */}
      <Planet
        top="100px"
        left="94%"
        size={35}
        gradient="linear-gradient(135deg, #fff8e1 0%, #ffe082 40%, #ffca28 70%, #ffb300 100%)"
        delay={0.3}
      />

      {/* Mars - red/rust colored, smaller */}
      <Planet
        top="350px"
        right="8%"
        size={30}
        gradient="linear-gradient(135deg, #d84315 0%, #bf360c 40%, #a1260a 70%, #8b1a08 100%)"
        delay={0.5}
      />

      {/* Rocket launching from About section */}
      <Rocket
        top={{ base: "850px", md: "700px", lg: "520px" }}
        left={{ base: "10%", md: "15%", lg: "45%" }}
        delay={1}
      />

      {/* Clouds appear in sky section (after space) */}
      <Cloud top="1000px" left="3%" scale={1} />
      <Cloud top="1150px" right="5%" scale={1.3} opacity={0.85} />
      <Cloud top="1350px" left="8%" scale={0.9} />
      <Cloud top="1500px" right="3%" scale={1.1} />
      <Cloud top="1700px" left="5%" scale={1.4} opacity={0.8} />
      <Cloud top="1900px" right="10%" scale={0.85} />
      <Cloud top="2100px" left="2%" scale={1.2} />
      <Cloud top="2300px" right="6%" scale={1} opacity={0.9} />

      {/* Mobile Navbar - only visible on mobile/tablet */}
      <MobileNavbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer - Earth/Ground */}
      <Footer />
    </Box>
  );
}
