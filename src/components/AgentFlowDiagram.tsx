'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Agent {
    id: string;
    name: string;
    role: string;
    description: string;
}

interface Message {
    from: string;
    to: string;
    content: string;
    delay: number;
}

interface AgentFlowDiagramProps {
    agents: Agent[];
    messages: Message[];
}

export default function AgentFlowDiagram({ agents, messages }: AgentFlowDiagramProps) {
    const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
    const [activeMessages, setActiveMessages] = useState<Message[]>([]);

    // Start animation when component mounts
    React.useEffect(() => {
        let timeouts: NodeJS.Timeout[] = [];
        
        messages.forEach((message, index) => {
            const timeout = setTimeout(() => {
                setActiveMessages(prev => [...prev, message]);
            }, message.delay);
            timeouts.push(timeout);
        });

        return () => timeouts.forEach(timeout => clearTimeout(timeout));
    }, [messages]);

    return (
        <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            {/* Agents */}
            <div className="flex justify-around mb-8">
                {agents.map((agent) => (
                    <motion.div
                        key={agent.id}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedAgent(agent)}
                        className="cursor-pointer p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                    >
                        <h3 className="font-medium text-gray-900 dark:text-white">{agent.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-300">{agent.role}</p>
                    </motion.div>
                ))}
            </div>

            {/* Message Flow */}
            <div className="relative h-40">
                <AnimatePresence>
                    {activeMessages.map((message, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                <p className="text-sm text-blue-800 dark:text-blue-100">
                                    {message.content}
                                </p>
                                <div className="text-xs text-blue-600 dark:text-blue-300 mt-1">
                                    {message.from} → {message.to}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Agent Details Modal */}
            <AnimatePresence>
                {selectedAgent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedAgent(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full"
                            onClick={e => e.stopPropagation()}
                        >
                            <h2 className="text-xl font-bold mb-2">{selectedAgent.name}</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedAgent.role}</p>
                            <p className="text-gray-700 dark:text-gray-200">{selectedAgent.description}</p>
                            <button
                                onClick={() => setSelectedAgent(null)}
                                className="mt-4 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
