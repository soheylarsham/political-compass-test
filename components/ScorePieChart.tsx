
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useI18n } from '../contexts/I18nContext';

interface ScorePieChartProps {
  economicScore: number;
  socialScore: number;
}

const COLORS_ECONOMIC = ['#f43f5e', '#3b82f6']; // Left (Rose), Right (Blue)
const COLORS_SOCIAL = ['#10b981', '#f97316']; // Libertarian (Green), Authoritarian (Orange)

const ScorePieChart: React.FC<ScorePieChartProps> = ({ economicScore, socialScore }) => {
  const { t } = useI18n();

  const economicData = [
    { name: t('results.chart.left'), value: Math.max(0, -economicScore) },
    { name: t('results.chart.right'), value: Math.max(0, economicScore) },
  ].filter(d => d.value > 0);

  const socialData = [
    { name: t('results.chart.libertarian'), value: Math.max(0, -socialScore) },
    { name: t('results.chart.authoritarian'), value: Math.max(0, socialScore) },
  ].filter(d => d.value > 0);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900/80 border border-cyan-500/50 p-2 rounded-lg shadow-lg backdrop-blur-sm">
          <p className="text-white">{`${payload[0].name}: ${payload[0].value.toFixed(2)}`}</p>
        </div>
      );
    }
    return null;
  };
  
  const renderColorfulLegendText = (value: string, entry: any) => {
    const { color } = entry;
    return <span style={{ color, filter: `drop-shadow(0 0 2px ${color})` }}>{value}</span>;
  };


  return (
    <ResponsiveContainer width="100%" height="100%">
      <div className="flex flex-col md:flex-row items-center justify-around h-full text-white">
        <div className="w-full md:w-1/2 h-1/2 md:h-full">
            <h4 className="text-center font-bold text-cyan-300" style={{filter: 'drop-shadow(0 0 3px #0891b2)'}}>{t('results.pieChart.economic')}</h4>
            <PieChart>
                 <defs>
                    <filter id="glow-economic" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <Pie
                    data={economicData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    style={{ filter: 'url(#glow-economic)'}}
                >
                    {economicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS_ECONOMIC[economicData.length === 1 && economicScore > 0 ? 1 : index % COLORS_ECONOMIC.length]} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend formatter={renderColorfulLegendText}/>
            </PieChart>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full">
             <h4 className="text-center font-bold text-rose-300" style={{filter: 'drop-shadow(0 0 3px #f43f5e)'}}>{t('results.pieChart.social')}</h4>
            <PieChart>
                <defs>
                    <filter id="glow-social" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <Pie
                    data={socialData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#82ca9d"
                    dataKey="value"
                     style={{ filter: 'url(#glow-social)'}}
                >
                    {socialData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={COLORS_SOCIAL[socialData.length === 1 && socialScore > 0 ? 1 : index % COLORS_SOCIAL.length]} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend formatter={renderColorfulLegendText} />
            </PieChart>
        </div>
      </div>
    </ResponsiveContainer>
  );
};

export default ScorePieChart;