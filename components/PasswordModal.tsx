import React, { useState } from 'react';
import { useI18n } from '../contexts/I18nContext';

interface PasswordModalProps {
    hasPassword: boolean;
    login: (password: string) => boolean;
    setPassword: (password: string) => void;
    onClose: () => void;
    onSuccess: () => void;
}

const PasswordModal: React.FC<PasswordModalProps> = ({ hasPassword, login, setPassword, onClose, onSuccess }) => {
    const [password, setPasswordState] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { t } = useI18n();

    const isSettingPassword = !hasPassword;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (isSettingPassword) {
            if (password !== confirmPassword) {
                setError(t('passwordModal.mismatchError'));
                return;
            }
            setPassword(password);
        } else {
            if (!login(password)) {
                setError(t('passwordModal.error'));
                return;
            }
        }
        onSuccess();
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fade-in">
            <div className="bg-gray-800 border border-cyan-500/50 rounded-lg shadow-xl p-8 w-full max-w-sm">
                <h3 className="text-2xl font-bold mb-6 text-cyan-300 text-center">
                    {isSettingPassword ? t('passwordModal.setPasswordTitle') : t('passwordModal.enterPasswordTitle')}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-300 mb-2">{t('passwordModal.passwordLabel')}</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPasswordState(e.target.value)}
                            className="w-full bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required
                            autoFocus
                        />
                    </div>
                    {isSettingPassword && (
                        <div>
                            <label className="block text-gray-300 mb-2">{t('passwordModal.confirmPasswordLabel')}</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full bg-gray-700 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                required
                            />
                        </div>
                    )}

                    {error && <p className="text-red-400 text-center">{error}</p>}
                    
                    <div className="flex gap-4 pt-4">
                        <button type="button" onClick={onClose} className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                            {t('common.cancel')}
                        </button>
                        <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                            {isSettingPassword ? t('passwordModal.setButton') : t('passwordModal.enterButton')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PasswordModal;
