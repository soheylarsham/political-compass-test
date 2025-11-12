
import React from 'react';
import { useI18n } from '../contexts/I18nContext';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
    onReset: () => void;
}

const Header: React.FC<HeaderProps> = ({ onReset }) => {
  const { t } = useI18n();
  return (
    <header className="flex justify-between items-center pb-4 border-b border-cyan-500/30">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-rose-500">
          {t('header.title')}
        </h1>
        <LanguageSwitcher />
      </div>
      <button 
        onClick={onReset}
        className="bg-transparent hover:bg-rose-500/20 text-rose-400 font-semibold hover:text-white py-2 px-4 border border-rose-500/50 hover:border-transparent rounded-lg transition-all duration-300"
      >
        {t('header.resetButton')}
      </button>
    </header>
  );
};

export default Header;