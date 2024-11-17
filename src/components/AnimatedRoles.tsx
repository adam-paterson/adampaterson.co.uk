import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedRolesProps {
  roles: string[];
}

const AnimatedRoles: React.FC<AnimatedRolesProps> = ({ roles }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define roles with occasional typos that will be "corrected"
  const roleVariations = [
    { 
      text: "build e-commerce solutions",
      sequence: ["buid", "buil", "build e-commerce solutions"]
    },
    { 
      text: "am a Technical Solution Engineer",
      sequence: ["am a Tecnical", "am a Techical", "am a Technical Solution Engineer"]
    },
    { 
      text: "specialize in digital commerce",
      sequence: ["specialize in digital commerce"] // This one types normally
    },
    { 
      text: "explore AI technologies",
      sequence: ["explre", "explore", "explore AI technologies"]
    },
    { 
      text: "solve complex problems",
      sequence: ["solve complex problems"] // This one types normally
    },
    { 
      text: "architect scalable systems",
      sequence: ["architect scalble", "architect scalabe", "architect scalable systems"]
    }
  ];

  useEffect(() => {
    const currentRole = roleVariations[currentIndex];
    const sequence = currentRole.sequence;
    let currentStep = 0;
    let currentChar = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const typeNextCharacter = () => {
      const currentText = sequence[currentStep];

      if (!isDeleting && currentChar < currentText.length) {
        // Typing
        setDisplayText(currentText.slice(0, currentChar + 1));
        currentChar++;
        timeout = setTimeout(typeNextCharacter, Math.random() * 100 + 50);
      } else if (!isDeleting && currentChar === currentText.length) {
        // Finished typing current step
        if (currentStep < sequence.length - 1) {
          // Need to delete and try again
          isDeleting = true;
          timeout = setTimeout(typeNextCharacter, 1000); // Pause before deleting
        } else {
          // Finished all steps for this role
          timeout = setTimeout(() => {
            isDeleting = true;
            typeNextCharacter();
          }, 2000);
        }
      } else if (isDeleting && currentChar > 0) {
        // Deleting
        setDisplayText(sequence[currentStep].slice(0, currentChar - 1));
        currentChar--;
        timeout = setTimeout(typeNextCharacter, 50);
      } else if (isDeleting && currentChar === 0) {
        // Finished deleting
        isDeleting = false;
        if (currentStep < sequence.length - 1) {
          // Move to next step in sequence
          currentStep++;
          timeout = setTimeout(typeNextCharacter, 200);
        } else {
          // Move to next role
          setCurrentIndex((prev) => (prev + 1) % roleVariations.length);
        }
      }
    };

    timeout = setTimeout(typeNextCharacter, 500);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <span className="inline-block min-w-[200px]">
      <span className="inline-block">
        {displayText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="ml-1 inline-block"
      >
        |
      </motion.span>
    </span>
  );
};

export default AnimatedRoles;
