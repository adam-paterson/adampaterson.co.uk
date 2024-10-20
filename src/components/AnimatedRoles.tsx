import React, { useState, useEffect } from "react";

interface AnimatedRolesProps {
  roles: string[];
  typingSpeed?: number;
  pauseDuration?: number;
}

const AnimatedRoles: React.FC<AnimatedRolesProps> = ({
  roles,
  typingSpeed = 100,
  pauseDuration = 2000,
}) => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const getRandomIndex = (currentIndex: number, max: number) => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * max);
    } while (newIndex === currentIndex && max > 1);
    return newIndex;
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (text.length < roles[roleIndex].length) {
        timer = setTimeout(() => {
          setText(roles[roleIndex].slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        setIsTyping(false);
        timer = setTimeout(() => {
          setIsTyping(true);
          setText("");
          setRoleIndex((prevIndex) => getRandomIndex(prevIndex, roles.length));
        }, pauseDuration);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(text.slice(0, -1));
        }, typingSpeed / 2);
      } else {
        setIsTyping(true);
        setRoleIndex((prevIndex) => getRandomIndex(prevIndex, roles.length));
      }
    }

    return () => clearTimeout(timer);
  }, [text, roleIndex, isTyping, roles, typingSpeed, pauseDuration]);

  return (
    <span className="animated-role">
      {text}
      <span className="cursor">|</span>
    </span>
  );
};

export default AnimatedRoles;
