
import React from 'react';
import { useI18n } from '../contexts/I18nContext.tsx';

const ErrorLog = ({ errors, removeError, clearErrors }) => {
    const { t } = useI18n();

    if (errors.length === 0) {
        return null;
    }

    return (
        <div className="fixed bottom-4 left-4 w-full max-w-sm z-50">
            <div className="bg-gray-800/80 backdrop-blur-md border border-rose-500/50 rounded-lg shadow-2xl overflow-hidden">
                <div className="p-3 flex justify-between items-center border-b border-rose-500/30">
                    <h4 className="font-bold text-rose-400">{t('errorLog.title')}</h4>
                    <button
                        onClick={clearErrors}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                        {t('errorLog.clearAll')}
                    </button>
                </div>
                <ul className="max-h-60 overflow-y-auto p-3 space-y-2">
                    {errors.map(error => (
                        <li key={error.id} className="bg-red-900/40 p-2 rounded-md text-sm text-red-200 flex justify-between items-start gap-2 animate-fade-in">
                           <div>
                             <span className="font-mono text-xs text-red-400 block">{error.timestamp}</span>
                             <p>{error.message}</p>
                           </div>
                            <button
                                onClick={() => removeError(error.id)}
                                className="text-red-300 hover:text-white font-bold text-lg leading-none flex-shrink-0"
                                aria-label={t('errorLog.closeError')}
                            >
                                &times;
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ErrorLog;
