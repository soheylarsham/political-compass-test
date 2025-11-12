import React, { useRef, useState } from 'react';
import PoliticalCompassChart from './PoliticalCompassChart';
import ScorePieChart from './ScorePieChart';
import { type AnalysisResult, type QuizLevel, type UserAnswer } from '../types';
import { ShareIcon, LinkIcon, ClipboardIcon, ChevronDownIcon, DocumentArrowDownIcon } from './Icons';
import { generateValidationCode } from '../utils';
import { useI18n } from '../contexts/I18nContext';

interface ResultsScreenProps {
  result: AnalysisResult;
  level: QuizLevel;
  answers: UserAnswer[];
  onNextLevel: () => void;
  onReset: () => void;
  isLastLevel: boolean;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ result, level, answers, onNextLevel, onReset, isLastLevel }) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [showExportMenu, setShowExportMenu] = useState(false);
    const { t, language } = useI18n();
    const currentLang = language as 'fa' | 'en';

    const [copyLinkStatus, setCopyLinkStatus] = useState(t('results.copyLink'));
    const [copyResultStatus, setCopyResultStatus] = useState(t('results.copyResults'));
    
    const createDownload = (data: string, filename: string, type: string) => {
        const blob = new Blob([data], { type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const generateTextSummary = (validationCode?: string) => {
      const header = validationCode ? `Validation Code: ${validationCode}\n` : '';
      return `
${header}${t('results.export.title', {level})}
------------------------------------
${t('results.export.ideology')}: ${result.politicalIdeology}
${t('results.export.economicScore')}: ${result.scores.economic.toFixed(2)}
${t('results.export.socialScore')}: ${result.scores.social.toFixed(2)}

${t('results.export.summary')}:
${result.summary}

${t('results.export.traits')}:
${result.behavioralTraits.map(t => `- ${t}`).join('\n')}

${t('results.export.analysis')}:
${result.detailedAnalysis}
      `.trim();
    }
    
    const handleExport = async (format: 'image' | 'json' | 'txt' | 'csv' | 'html' | 'doc') => {
        setShowExportMenu(false);
        const validationCode = generateValidationCode('R');
        const stateToExport = { answers, result, level };
        
        switch (format) {
            case 'image':
                try {
                    const { default: html2canvas } = await import('html2canvas');
                    if (chartRef.current) {
                        const canvas = await html2canvas(chartRef.current, { backgroundColor: '#1a202c' });
                        const a = document.createElement('a');
                        a.href = canvas.toDataURL('image/png');
                        a.download = `political_compass_chart_${validationCode}.png`;
                        a.click();
                    }
                } catch (error) {
                    console.error("Failed to load or use html2canvas:", error);
                    alert(t('errors.exportImage'));
                }
                break;
            case 'json':
                const exportData = { validationCode, payload: stateToExport };
                createDownload(JSON.stringify(exportData, null, 2), `political_compass_results_${validationCode}.json`, 'application/json');
                break;
            case 'txt':
                createDownload(generateTextSummary(validationCode), `political_compass_results_${validationCode}.txt`, 'text/plain');
                break;
             case 'csv':
                const csvHeader = `validation_code,axis,score,ideology\n`;
                const csvData = `${validationCode},Economic,${result.scores.economic.toFixed(2)},${result.politicalIdeology}\n${validationCode},Social,${result.scores.social.toFixed(2)},${result.politicalIdeology}`;
                createDownload(csvHeader + csvData, `political_compass_scores_${validationCode}.csv`, 'text/csv');
                break;
            case 'html':
                const htmlContent = `
                    <!DOCTYPE html>
                    <html lang="${t('langCode')}" dir="${t('dir')}">
                    <head>
                        <meta charset="UTF-8">
                        <title>${t('results.export.htmlTitle')}</title>
                        <!-- Validation Code: ${validationCode} -->
                        <style>body { font-family: sans-serif; line-height: 1.6; padding: 20px; } h1, h2 { color: #333; }</style>
                    </head>
                    <body>
                        <h1>${t('results.export.title', { level })}</h1>
                        <h2>${t('results.export.ideology')}: ${result.politicalIdeology}</h2>
                        <p><strong>${t('results.export.economicScore')}:</strong> ${result.scores.economic.toFixed(2)} | <strong>${t('results.export.socialScore')}:</strong> ${result.scores.social.toFixed(2)}</p>
                        <h3>${t('results.summaryTitle')}</h3>
                        <p>${result.summary}</p>
                        <h3>${t('results.traitsTitle')}</h3>
                        <ul>${result.behavioralTraits.map(trait => `<li>${trait}</li>`).join('')}</ul>
                        <h3>${t('results.analysisTitle')}</h3>
                        <p style="white-space: pre-wrap;">${result.detailedAnalysis}</p>
                    </body>
                    </html>
                `;
                createDownload(htmlContent, `political_compass_results_${validationCode}.html`, 'text/html');
                break;
            case 'doc':
                 const docContent = `
                    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
                    <head><meta charset='utf-8'><title>${t('results.export.htmlTitle')}</title></head>
                    <body dir="${t('dir')}">
                        <!-- Validation Code: ${validationCode} -->
                        <h1>${t('results.export.title', { level })}</h1>
                        <h2>${t('results.export.ideology')}: ${result.politicalIdeology}</h2>
                        <p><b>${t('results.export.economicScore')}:</b> ${result.scores.economic.toFixed(2)} | <b>${t('results.export.socialScore')}:</b> ${result.scores.social.toFixed(2)}</p>
                        <h3>${t('results.summaryTitle')}</h3>
                        <p>${result.summary}</p>
                        <h3>${t('results.traitsTitle')}</h3>
                        <ul>${result.behavioralTraits.map(trait => `<li>${trait}</li>`).join('')}</ul>
                        <h3>${t('results.analysisTitle')}</h3>
                        <p>${result.detailedAnalysis.replace(/\n/g, '<br>')}</p>
                    </body>
                    </html>
                `;
                createDownload(docContent, `political_compass_results_${validationCode}.doc`, 'application/msword');
                break;
        }
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: t('results.share.title'),
                text: t('results.share.text', { ideology: result.politicalIdeology }),
                url: window.location.href,
            }).catch(console.error);
        } else {
            alert(t('results.share.notSupported'));
        }
    }

    const handleCopyLink = () => {
        const stateToExport = { answers, result, level };
        const validationCode = generateValidationCode('R');
        const wrapper = { validationCode, payload: stateToExport };
        const encoded = btoa(JSON.stringify(wrapper));
        const url = `${window.location.origin}${window.location.pathname}#data=${encoded}`;
        
        window.history.pushState(null, '', url);

        navigator.clipboard.writeText(url).then(() => {
            setCopyLinkStatus(t('results.copied'));
            setTimeout(() => setCopyLinkStatus(t('results.copyLink')), 2000);
        });
    }
    
    const handleCopyResults = () => {
        navigator.clipboard.writeText(generateTextSummary()).then(() => {
            setCopyResultStatus(t('results.copied'));
            setTimeout(() => setCopyResultStatus(t('results.copyResults')), 2000);
        });
    }

    return (
    <div className="animate-fade-in">
        <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-300">{t('results.title', { level })}</h2>
            <p className="text-lg text-gray-400 mt-2">{t('results.yourIdeology')}: <span className="font-bold text-rose-400">{result.politicalIdeology}</span></p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div id="compass-chart-container" ref={chartRef} className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400 border-b border-cyan-500/30 pb-2">{t('results.chartTitle')}</h3>
                <div className="w-full h-80 md:h-96">
                    <PoliticalCompassChart data={result.scores} />
                </div>
            </div>
             <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm flex flex-col">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400 border-b border-cyan-500/30 pb-2">{t('results.summaryTitle')}</h3>
                <p className="text-gray-300 leading-relaxed">{result.summary}</p>
                <h3 className="text-2xl font-semibold mt-6 mb-4 text-cyan-400 border-b border-cyan-500/30 pb-2">{t('results.traitsTitle')}</h3>
                 <ul className="list-disc list-inside space-y-2 text-gray-300">
                     {result.behavioralTraits.map((trait, index) => (
                         <li key={index}><span className="text-rose-300 mr-2">{trait}</span></li>
                     ))}
                 </ul>
            </div>
        </div>

        <div className="mt-8 bg-gray-800/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm">
             <h3 className="text-2xl font-semibold mb-4 text-cyan-400 border-b border-cyan-500/30 pb-2">{t('results.scoresTitle')}</h3>
             <div className="w-full h-64">
                <ScorePieChart economicScore={result.scores.economic} socialScore={result.scores.social} />
             </div>
        </div>

        <div className="mt-8 bg-gray-800/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400 border-b border-cyan-500/30 pb-2">{t('results.analysisTitle')}</h3>
            <p className="text-gray-300 whitespace-pre-line leading-loose">{result.detailedAnalysis}</p>
        </div>
        
        <div className="mt-8 bg-gray-800/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400 border-b border-cyan-500/30 pb-2">{t('results.toolsTitle')}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
                 <div className="relative inline-block text-left">
                    <button
                        onClick={() => setShowExportMenu(!showExportMenu)}
                        className="inline-flex items-center justify-center w-full rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none"
                    >
                        <DocumentArrowDownIcon />
                        <span className="mx-2">{t('results.exportButton')}</span>
                        <ChevronDownIcon />
                    </button>
                    {showExportMenu && (
                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-20">
                            <div className="py-1" role="menu" aria-orientation="vertical">
                                <a href="#" onClick={() => handleExport('image')} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700" role="menuitem">{t('results.exportOptions.image')}</a>
                                <a href="#" onClick={() => handleExport('json')} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700" role="menuitem">{t('results.exportOptions.json')}</a>
                                <a href="#" onClick={() => handleExport('txt')} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700" role="menuitem">{t('results.exportOptions.txt')}</a>
                                <a href="#" onClick={() => handleExport('csv')} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700" role="menuitem">{t('results.exportOptions.csv')}</a>
                                <a href="#" onClick={() => handleExport('html')} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700" role="menuitem">{t('results.exportOptions.html')}</a>
                                <a href="#" onClick={() => handleExport('doc')} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700" role="menuitem">{t('results.exportOptions.doc')}</a>
                            </div>
                        </div>
                    )}
                </div>
                 <button onClick={handleShare} className="inline-flex items-center justify-center rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-600"><ShareIcon /><span className="mx-2">{t('results.shareButton')}</span></button>
                 <button onClick={handleCopyLink} className="inline-flex items-center justify-center rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-600"><LinkIcon /><span className="mx-2">{copyLinkStatus}</span></button>
                 <button onClick={handleCopyResults} className="inline-flex items-center justify-center rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-600"><ClipboardIcon /><span className="mx-2">{copyResultStatus}</span></button>
            </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {!isLastLevel && (
                <button 
                    onClick={onNextLevel}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg py-3 px-8 rounded-lg shadow-lg shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300"
                >
                    {t('results.nextLevelButton', { level: level + 1 })}
                </button>
            )}
            <button
                onClick={onReset}
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold text-lg py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-300"
            >
                {t('results.retakeButton')}
            </button>
        </div>
    </div>
  );
};

export default ResultsScreen;