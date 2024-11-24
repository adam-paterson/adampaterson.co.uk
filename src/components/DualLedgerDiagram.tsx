import React from 'react';

const DualLedgerDiagram: React.FC = () => {
    return (
        <div className="my-8 p-6 grid md:grid-cols-2 gap-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            {/* Task Ledger */}
            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-sky-500 rounded-full" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Task Ledger</h3>
                </div>
                <div className="space-y-2">
                    <div className="p-3 rounded-lg bg-sky-50 dark:bg-sky-950 border-2 border-sky-200 dark:border-sky-800">
                        <h4 className="font-medium text-sky-900 dark:text-sky-100">Facts</h4>
                        <ul className="mt-2 text-sm text-sky-700 dark:text-sky-300 space-y-1">
                            <li>• Current task state</li>
                            <li>• Verified information</li>
                            <li>• Resource availability</li>
                        </ul>
                    </div>
                    <div className="p-3 rounded-lg bg-sky-50 dark:bg-sky-950 border-2 border-sky-200 dark:border-sky-800">
                        <h4 className="font-medium text-sky-900 dark:text-sky-100">Educated Guesses</h4>
                        <ul className="mt-2 text-sm text-sky-700 dark:text-sky-300 space-y-1">
                            <li>• Potential approaches</li>
                            <li>• Expected outcomes</li>
                            <li>• Risk assessment</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Progress Ledger */}
            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Progress Ledger</h3>
                </div>
                <div className="space-y-2">
                    <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950 border-2 border-purple-200 dark:border-purple-800">
                        <h4 className="font-medium text-purple-900 dark:text-purple-100">Task Tracking</h4>
                        <ul className="mt-2 text-sm text-purple-700 dark:text-purple-300 space-y-1">
                            <li>• Step completion status</li>
                            <li>• Agent assignments</li>
                            <li>• Current activities</li>
                        </ul>
                    </div>
                    <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950 border-2 border-purple-200 dark:border-purple-800">
                        <h4 className="font-medium text-purple-900 dark:text-purple-100">Self-Reflection</h4>
                        <ul className="mt-2 text-sm text-purple-700 dark:text-purple-300 space-y-1">
                            <li>• Effectiveness analysis</li>
                            <li>• Strategy evaluation</li>
                            <li>• Adaptation triggers</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Feedback Arrows */}
            <div className="md:col-span-2 flex justify-center items-center pt-4">
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
                        Outer Loop
                    </span>
                    <span>⟷</span>
                    <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
                        Inner Loop
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DualLedgerDiagram;
