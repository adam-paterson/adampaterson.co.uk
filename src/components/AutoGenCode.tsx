'use client';

import { useState } from 'react';

interface CodeExample {
    title: string;
    description: string;
    code: string;
}

interface AutoGenCodeProps {
    examples: CodeExample[];
}

export default function AutoGenCode({ examples }: AutoGenCodeProps) {
    const [activeTab, setActiveTab] = useState(0);
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="my-8 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Tabs */}
            <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-700">
                {examples.map((example, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                            activeTab === index
                                ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                        }`}
                    >
                        {example.title}
                    </button>
                ))}
            </div>

            {/* Code Content */}
            <div className="relative">
                <pre className="m-0 overflow-x-auto p-6 text-sm leading-6">
                    <code>{examples[activeTab].code}</code>
                </pre>

                {/* Copy Button */}
                <button
                    onClick={() => copyToClipboard(examples[activeTab].code)}
                    className="absolute top-4 right-4 px-3 py-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded"
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>

                {/* Description */}
                <div className="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        {examples[activeTab].description}
                    </p>
                </div>
            </div>
        </div>
    );
}
