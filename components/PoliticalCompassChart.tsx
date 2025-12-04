
import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, ReferenceLine } from 'recharts';
import { useI18n } from '../contexts/I18nContext.tsx';

// FIX: Add 'any' type to props to satisfy TypeScript, as props are injected by Recharts.
const CustomTooltip = ({ active, payload }: any) => {
  const { t } = useI18n();
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900/80 border border-cyan-500/50 p-3 rounded-lg shadow-lg backdrop-blur-sm">
        <p className="text-cyan-300">{t('results.chart.economic', { score: payload[0].value.toFixed(2) })}</p>
        <p className="text-rose-300">{t('results.chart.social', { score: payload[1].value.toFixed(2) })}</p>
      </div>
    );
  }
  return null;
};


const PoliticalCompassChart = ({ data }) => {
  const chartData = [{ x: data.economic, y: data.social, z: 200 }];
  const { t } = useI18n();

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Quadrant Labels */}
      <div style={{ position: 'absolute', top: '10px', left: '10px', color: '#f43f5e', fontSize: '0.8rem', fontWeight: 'bold', filter: 'drop-shadow(0 0 3px #f43f5e)' }}>{t('results.chart.authLeft')}</div>
      <div style={{ position: 'absolute', top: '10px', right: '10px', color: '#3b82f6', fontSize: '0.8rem', fontWeight: 'bold', textAlign: 'right', filter: 'drop-shadow(0 0 3px #3b82f6)' }}>{t('results.chart.authRight')}</div>
      <div style={{ position: 'absolute', bottom: '30px', left: '10px', color: '#10b981', fontSize: '0.8rem', fontWeight: 'bold', filter: 'drop-shadow(0 0 3px #10b981)' }}>{t('results.chart.libLeft')}</div>
      <div style={{ position: 'absolute', bottom: '30px', right: '10px', color: '#f59e0b', fontSize: '0.8rem', fontWeight: 'bold', textAlign: 'right', filter: 'drop-shadow(0 0 3px #f59e0b)' }}>{t('results.chart.libRight')}</div>


      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 40,
            right: 40,
            bottom: 40,
            left: 40,
          }}
        >
          <defs>
            <radialGradient id="gradStar" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="1"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="1"/>
            </radialGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" strokeOpacity={0.3} />
           <ReferenceLine x={0} stroke="#a0aec0" strokeOpacity={0.5} />
           <ReferenceLine y={0} stroke="#a0aec0" strokeOpacity={0.5} />
          <XAxis 
            type="number" 
            dataKey="x" 
            name="Economic" 
            domain={[-10, 10]} 
            tick={{ fill: '#a0aec0', fontSize: 12 }} 
            stroke="#4a5568"
            axisLine={false}
            tickLine={false}
          >
             <Label value={t('results.chart.left')} offset={-25} position="insideBottomLeft" fill="#a0aec0" />
             <Label value={t('results.chart.right')} offset={-25} position="insideBottomRight" fill="#a0aec0"/>
          </XAxis>
          <YAxis 
            type="number" 
            dataKey="y" 
            name="Social" 
            domain={[-10, 10]} 
            tick={{ fill: '#a0aec0', fontSize: 12 }}
            stroke="#4a5568"
            axisLine={false}
            tickLine={false}
          >
            <Label value={t('results.chart.libertarian')} angle={-90} offset={25} position="insideLeft" fill="#a0aec0" />
            <Label value={t('results.chart.authoritarian')} angle={-90} offset={25} position="insideRight" fill="#a0aec0" />
          </YAxis>
          <ZAxis type="number" dataKey="z" range={[200, 500]} />
          <Tooltip 
            cursor={{ stroke: '#0891b2', strokeDasharray: '3 3', strokeOpacity: 0.5 }} 
            content={<CustomTooltip />}
          />
          <Scatter name={t('results.chart.yourPosition')} data={chartData} fill="url(#gradStar)" shape="star" style={{ filter: 'drop-shadow(0 0 8px #0891b2)' }} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PoliticalCompassChart;
