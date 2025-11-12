import { useState, useMemo, useCallback } from 'react';
import { simpleHash } from '../utils';

const AUTH_STORAGE_KEY = 'politicalCompassAuth';
// This salt is hardcoded in the client. It's for obfuscation, not true security.
const SALT = 'p0l1t1c4l-c0mp4ss-s4lt-v1'; 

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const [passwordExists, setPasswordExists] = useState(() => {
        try {
            return !!localStorage.getItem(AUTH_STORAGE_KEY);
        } catch {
            return false;
        }
    });

    const checkPassword = useCallback((password: string): boolean => {
        try {
            const storedHash = localStorage.getItem(AUTH_STORAGE_KEY);
            if (!storedHash) return false;
            const inputHash = simpleHash(password, SALT);
            return inputHash === storedHash;
        } catch {
            return false;
        }
    }, []);
    
    const login = useCallback((password: string): boolean => {
        if (checkPassword(password)) {
            setIsLoggedIn(true);
            return true;
        }
        return false;
    }, [checkPassword]);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    const setPassword = useCallback((password: string) => {
        const hash = simpleHash(password, SALT);
        try {
            localStorage.setItem(AUTH_STORAGE_KEY, hash);
            setPasswordExists(true);
            setIsLoggedIn(true);
        } catch (e) {
            console.error("Could not set password in localStorage:", e);
        }
    }, []);

    // Create a stable object for the action functions.
    const actions = useMemo(() => ({
        login,
        logout,
        setPassword,
    }), [login, logout, setPassword]);

    // Return state values and the stable actions object.
    return {
        isLoggedIn,
        hasPassword: passwordExists,
        actions,
    };
};
