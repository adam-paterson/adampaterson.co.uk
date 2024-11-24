import React, { useState } from 'react';

interface AgentDetail {
    name: string;
    description: string;
    capabilities: string[];
    techStack: string[];
}

const agentDetails: Record<string, AgentDetail> = {
    orchestrator: {
        name: 'Orchestrator Agent',
        description: 'The strategic center of the Magentic-One system, coordinating all other agents and maintaining the dual ledger system.',
        capabilities: [
            'Task decomposition and planning',
            'Agent delegation and coordination',
            'Progress monitoring',
            'Plan adaptation',
            'Ledger maintenance'
        ],
        techStack: ['GPT-4', 'AutoGen Core', 'Task Ledger System', 'Progress Ledger System']
    },
    websurfer: {
        name: 'WebSurfer Agent',
        description: 'A specialized web interaction agent that navigates and extracts information from web-based resources.',
        capabilities: [
            'Browser control',
            'Web navigation',
            'Content extraction',
            'Accessibility tree processing',
            'Set-of-marks prompting'
        ],
        techStack: ['Chromium', 'Accessibility APIs', 'Web Scraping Tools', 'HTML/DOM Processing']
    },
    filesurfer: {
        name: 'FileSurfer Agent',
        description: 'File system specialist that handles various file operations and content interpretation.',
        capabilities: [
            'File format interpretation',
            'Directory navigation',
            'Markdown preview generation',
            'File system operations',
            'Content analysis'
        ],
        techStack: ['File System APIs', 'Format Parsers', 'Markdown Processors', 'Content Analyzers']
    },
    coder: {
        name: 'Coder Agent',
        description: 'Development-focused agent that handles code-related tasks and artifact creation.',
        capabilities: [
            'Code writing',
            'Code analysis',
            'Information processing',
            'Artifact creation',
            'System prompting'
        ],
        techStack: ['Language Models', 'Code Analysis Tools', 'Development Frameworks', 'Build Systems']
    },
    computerterminal: {
        name: 'ComputerTerminal Agent',
        description: 'System-level execution agent that manages terminal operations and environment setup.',
        capabilities: [
            'Console shell access',
            'Package management',
            'Code execution',
            'Environment maintenance',
            'System commands'
        ],
        techStack: ['Shell Interfaces', 'Package Managers', 'Virtual Environments', 'System APIs']
    }
};

const AgentDetails: React.FC<{ agentId: string }> = ({ agentId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const agent = agentDetails[agentId.toLowerCase()];

    if (!agent) return null;

    return (
        <div className="my-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
                <span className="flex items-center justify-between">
                    <span className="font-semibold">{agent.name}</span>
                    <span className="text-gray-500">
                        {isOpen ? '▼' : '▶'}
                    </span>
                </span>
            </button>
            
            {isOpen && (
                <div className="mt-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {agent.description}
                    </p>
                    
                    <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Capabilities</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                            {agent.capabilities.map((capability, index) => (
                                <li key={index}>{capability}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {agent.techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 rounded-full text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AgentDetails;
