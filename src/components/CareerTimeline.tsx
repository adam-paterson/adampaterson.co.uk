import React, { useState, useRef, useEffect } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaChevronDown,
} from "react-icons/fa";

interface TimelineEvent {
  date: string;
  title: string;
  company?: string;
  logo?: string;
  description: string;
  type: "work" | "education" | "achievement";
}

const events: TimelineEvent[] = [
  {
    date: "2022 - Present",
    title: "Senior Technical Architect",
    company: "TechCorp",
    logo: "/public/logo-jh.jpg",
    description:
      "Leading complex e-commerce projects and driving digital transformation initiatives.",
    type: "work",
  },
  {
    date: "2018 - 2022",
    title: "Technical Solutions Architect",
    company: "E-Commerce Solutions Inc.",
    logo: "/path/to/ecommerce-solutions-logo.png",
    description:
      "Designed and implemented custom e-commerce solutions for enterprise clients.",
    type: "work",
  },
  // ... (add more events with company and logo fields)
];

const CareerTimeline: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<TimelineEvent | null>(null);
  const [visibleEvents, setVisibleEvents] = useState(3);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems =
      timelineRef.current?.querySelectorAll(".timeline-item");
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [visibleEvents]);

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <FaBriefcase />;
      case "education":
        return <FaGraduationCap />;
      case "achievement":
        return <FaAward />;
      default:
        return null;
    }
  };

  const showMoreEvents = () => {
    setVisibleEvents((prev) => Math.min(prev + 3, events.length));
  };

  return (
    <div className="relative" ref={timelineRef}>
      <h3 className="text-3xl font-bold mb-6 text-center text-not-quite-black dark:text-white font-handwriting">
        Career Timeline
      </h3>
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700"></div>
      <div className="space-y-8 relative">
        {events.slice(0, visibleEvents).map((event, index) => (
          <div
            key={index}
            className={`timeline-item relative flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } opacity-0 transition-all duration-500 ease-out`}
          >
            <div
              className={`w-5 h-5 absolute left-1/2 transform -translate-x-1/2 rounded-full bg-highlight dark:bg-dark-highlight z-10 cursor-pointer transition-all duration-300 hover:scale-125`}
              onMouseEnter={() => setActiveEvent(event)}
              onMouseLeave={() => setActiveEvent(null)}
            ></div>
            <div
              className={`w-5/12 p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                index % 2 === 0 ? "mr-8" : "ml-8"
              }`}
            >
              <div className="flex items-center mb-2">
                {event.logo && (
                  <img
                    src={event.logo}
                    alt={event.company}
                    className="w-8 h-8 mr-2 object-contain rounded-full"
                  />
                )}
                <span className="text-highlight dark:text-dark-highlight mr-2 text-2xl">
                  {getIcon(event.type)}
                </span>
                <h4 className="text-lg font-semibold">{event.date}</h4>
              </div>
              <h3 className="text-xl font-bold mb-1">{event.title}</h3>
              {event.company && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {event.company}
                </p>
              )}
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {visibleEvents < events.length && (
        <div className="text-center mt-8">
          <button
            onClick={showMoreEvents}
            className="bg-highlight dark:bg-dark-highlight text-white px-6 py-3 rounded-full hover:bg-opacity-80 transition-all duration-300 flex items-center mx-auto transform hover:scale-105"
          >
            Show More <FaChevronDown className="ml-2" />
          </button>
        </div>
      )}
      {activeEvent && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg z-20 max-w-md w-full animate-fadeIn">
          <h4 className="text-xl font-semibold mb-2">{activeEvent.title}</h4>
          <p className="text-sm mb-2">{activeEvent.company}</p>
          <p className="text-sm">{activeEvent.description}</p>
        </div>
      )}
    </div>
  );
};

export default CareerTimeline;
