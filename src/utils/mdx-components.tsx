import type { MDXComponents } from 'mdx/types';
import CodeBlock from '../components/CodeBlock';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: ({ children, ...props }) => {
      // Handle code blocks
      if (React.isValidElement(children) && children.type === 'code') {
        const { className, children: code } = children.props;
        const language = className?.replace('language-', '') || 'text';
        return <CodeBlock code={String(code)} language={language} />;
      }
      return <pre {...props}>{children}</pre>;
    },
    code: ({ children, className }) => {
      // Handle inline code
      if (className?.startsWith('language-')) {
        return null; // This will be handled by the pre component
      }
      return (
        <code className="px-1.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm">
          {children}
        </code>
      );
    },
  };
} 