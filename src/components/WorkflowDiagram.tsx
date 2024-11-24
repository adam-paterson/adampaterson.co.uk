import React, { memo } from 'react';
import ReactFlow, { Background, Controls, Handle, Position } from 'reactflow';
import type { Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';

const AgentNode = memo(({ data }: { data: { label: string; icon: string; color: string } }) => {
    return (
        <div className={`w-40 h-40 flex items-center justify-center rounded-xl border-2 ${data.color} shadow-lg transition-transform hover:scale-105`}>
            <Handle type="target" position={Position.Top} className="!bg-current" />
            <div className="flex flex-col items-center gap-3 p-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/90 to-white/50 dark:from-black/90 dark:to-black/50 p-3 ring-2 ring-current shadow-lg">
                    <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: data.icon }} />
                </div>
                <span className="text-sm font-medium text-center">{data.label}</span>
            </div>
            <Handle type="source" position={Position.Bottom} className="!bg-current" />
        </div>
    );
});

const nodeTypes = {
    agent: AgentNode,
};

const initialNodes: Node[] = [
    {
        id: '1',
        type: 'agent',
        data: { 
            label: 'Orchestrator Agent',
            color: 'border-sky-600 dark:border-sky-400 text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>'
        },
        position: { x: 250, y: 125 }  
    },
    {
        id: '2',
        type: 'agent',
        data: { 
            label: 'WebSurfer Agent',
            color: 'border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>'
        },
        position: { x: 50, y: 25 }
    },
    {
        id: '3',
        type: 'agent',
        data: { 
            label: 'FileSurfer Agent',
            color: 'border-red-600 dark:border-red-400 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>'
        },
        position: { x: 450, y: 25 }
    },
    {
        id: '4',
        type: 'agent',
        data: { 
            label: 'Coder Agent',
            color: 'border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>'
        },
        position: { x: 50, y: 225 }
    },
    {
        id: '5',
        type: 'agent',
        data: { 
            label: 'ComputerTerminal Agent',
            color: 'border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>'
        },
        position: { x: 450, y: 225 }
    }
];

const initialEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', animated: true, className: 'stroke-sky-600 dark:stroke-sky-400' },
    { id: 'e1-3', source: '1', target: '3', animated: true, className: 'stroke-sky-600 dark:stroke-sky-400' },
    { id: 'e1-4', source: '1', target: '4', animated: true, className: 'stroke-sky-600 dark:stroke-sky-400' },
    { id: 'e1-5', source: '1', target: '5', animated: true, className: 'stroke-sky-600 dark:stroke-sky-400' },
    { id: 'e2-4', source: '2', target: '4', animated: true, className: 'stroke-green-600 dark:stroke-green-400' },
    { id: 'e3-4', source: '3', target: '4', animated: true, className: 'stroke-red-600 dark:stroke-red-400' },
    { id: 'e4-5', source: '4', target: '5', animated: true, className: 'stroke-purple-600 dark:stroke-purple-400' }
];

const WorkflowDiagram: React.FC = () => {
    return (
        <div className="my-8 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4" style={{ width: '100%', height: '400px' }}>
            <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
                nodeTypes={nodeTypes}
                fitView
                attributionPosition="bottom-left"
                proOptions={{ hideAttribution: true }}
                className="[&_.react-flow__controls]:bg-white [&_.react-flow__controls]:dark:bg-gray-900 [&_.react-flow__controls]:border-2 [&_.react-flow__controls]:border-gray-200 [&_.react-flow__controls]:dark:border-gray-800 [&_.react-flow__controls-button]:border-gray-200 [&_.react-flow__controls-button]:dark:border-gray-800 [&_.react-flow__controls-button]:hover:bg-gray-50 [&_.react-flow__controls-button]:dark:hover:bg-gray-800"
            >
                <Background className="dark:bg-gray-950" color="#94a3b8" gap={16} />
                <Controls />
            </ReactFlow>
        </div>
    );
};

export default WorkflowDiagram;
