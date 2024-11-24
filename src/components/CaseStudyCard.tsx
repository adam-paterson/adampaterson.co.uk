'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Metric {
    label: string;
    before: string | number;
    after: string | number;
    improvement: string;
}

interface CaseStudyCardProps {
    title: string;
    challenge: string;
    solution: string;
    metrics: Metric[];
    codeExample?: string;
}

export default function CaseStudyCard({
    title,
    challenge,
    solution,
    metrics,
    codeExample,
}: CaseStudyCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="my-8">
            <motion.div
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                initial={false}
                animate={{ height: isExpanded ? 'auto' : '120px' }}
            >
                {/* Header */}
                <div
                    className="p-4 bg-gray-50 dark:bg-gray-800 cursor-pointer"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            {title}
                        </h3>
                        <motion.button
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            className="text-gray-500 dark:text-gray-400"
                        >
                            ▼
                        </motion.button>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {challenge.substring(0, 100)}...
                    </p>
                </div>

                {/* Content */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="p-4 border-t border-gray-200 dark:border-gray-700"
                        >
                            {/* Challenge Section */}
                            <div className="mb-6">
                                <h4 className="text-md font-medium mb-2 text-gray-900 dark:text-white">
                                    The Challenge
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300">{challenge}</p>
                            </div>

                            {/* Solution Section */}
                            <div className="mb-6">
                                <h4 className="text-md font-medium mb-2 text-gray-900 dark:text-white">
                                    The Solution
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300">{solution}</p>
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                {metrics.map((metric, index) => (
                                    <div
                                        key={index}
                                        className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                                    >
                                        <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            {metric.label}
                                        </h5>
                                        <div className="flex justify-between items-center">
                                            <div className="text-gray-500 dark:text-gray-400">
                                                <div className="text-sm">Before: {metric.before}</div>
                                                <div className="text-sm">After: {metric.after}</div>
                                            </div>
                                            <div className="text-green-500 font-medium">
                                                {metric.improvement}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Code Example */}
                            {codeExample && (
                                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-gray-100 text-sm">{codeExample}</pre>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
