import { useState, useCallback, useMemo } from 'react';
import { type AppError } from '../types';

export const useErrorLog = () => {
    const [errors, setErrors] = useState<AppError[]>([]);

    const addError = useCallback((message: string) => {
        const newError: AppError = {
            id: Date.now(),
            message,
            timestamp: new Date().toLocaleTimeString('fa-IR'),
        };
        setErrors(prevErrors => [newError, ...prevErrors.slice(0, 9)]); // Keep max 10 errors
    }, []);

    const removeError = useCallback((id: number) => {
        setErrors(prevErrors => prevErrors.filter(error => error.id !== id));
    }, []);

    const clearErrors = useCallback(() => {
        setErrors([]);
    }, []);

    // Create a stable object for the action functions.
    // The dependency array is empty because the setter functions from useState are stable.
    const actions = useMemo(() => ({
        addError,
        removeError,
        clearErrors,
    }), [addError, removeError, clearErrors]);

    // Return the state and the stable actions object separately.
    return {
        errors,
        actions,
    };
};
