import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-yaml';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'typescript', filename }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="relative group rounded-lg overflow-hidden">
      {filename && (
        <div className="absolute top-0 right-0 px-4 py-2 text-sm text-neutral-500 dark:text-neutral-400">
          {filename}
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative rounded-lg overflow-hidden">
        <pre className="!bg-white dark:!bg-neutral-900 !p-4">
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock; 