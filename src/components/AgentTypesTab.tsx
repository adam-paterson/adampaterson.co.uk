import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';

interface AgentTab {
  title: string;
  description: string;
  code: string;
}

const agentTabs: AgentTab[] = [
  {
    title: "Assistant Agent",
    description: "The primary AI agent that processes requests and generates responses. Can be customized with different LLM configurations and system messages.",
    code: `assistant = AssistantAgent(
    name="assistant",
    llm_config={
        "temperature": 0.7,
        "model": "gpt-4"
    },
    system_message="I am a helpful AI assistant"
)`
  },
  {
    title: "User Proxy Agent",
    description: "Bridges human interaction and code execution. Can operate autonomously or with human input, and handles code execution in safe environments.",
    code: `user_proxy = UserProxyAgent(
    name="user_proxy",
    human_input_mode="NEVER",
    code_execution_config={
        "work_dir": "coding_tasks",
        "use_docker": False,
        "timeout": 60
    }
)`
  },
  {
    title: "Group Chat Manager",
    description: "Orchestrates conversations between multiple agents, managing turn-taking and conversation flow.",
    code: `group_chat = GroupChat(
    agents=[user_proxy, assistant],
    messages=[],
    max_round=10
)
manager = GroupChatManager(groupchat=group_chat)`
  }
];

const AgentTypesTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  React.useEffect(() => {
    Prism.highlightAll();
  }, [activeTab]);

  return (
    <div className="my-8 rounded-2xl overflow-hidden bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50">
      {/* Tab Navigation */}
      <div className="flex space-x-4 p-4 border-b border-neutral-200/50 dark:border-neutral-800/50">
        {agentTabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-lg transition-all duration-200 relative
              ${activeTab === index 
                ? 'text-teal-600 dark:text-teal-400' 
                : 'text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400'
              }`}
          >
            {tab.title}
            {activeTab === index && (
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 dark:bg-teal-400"
                initial={false}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="p-6 space-y-4"
      >
        <p className="text-neutral-600 dark:text-neutral-300">
          {agentTabs[activeTab].description}
        </p>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
          <div className="relative rounded-lg overflow-hidden">
            <pre className="!bg-white dark:!bg-neutral-900 !p-4">
              <code className="language-python">
                {agentTabs[activeTab].code}
              </code>
            </pre>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AgentTypesTab; 