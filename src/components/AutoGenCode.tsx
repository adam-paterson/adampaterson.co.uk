'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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
                <SyntaxHighlighter
                    language="python"
                    style={oneDark}
                    customStyle={{
                        margin: 0,
                        padding: '1.5rem',
                        background: 'transparent',
                    }}
                >
                    {examples[activeTab].code}
                </SyntaxHighlighter>

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
