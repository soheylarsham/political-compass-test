
import { useState, useCallback, useMemo } from 'react';

export const useErrorLog = () => {
    const [errors, setErrors] = useState([]);

    const addError = useCallback((message) => {
        const newError = {
            id: Date.now(),
            message,
            timestamp: new Date().toLocaleTimeString('fa-IR'),
        };
        setErrors(prevErrors => [newError, ...prevErrors.slice(0, 9)]); // Keep max 10 errors
    }, []);

    const removeError = useCallback((id) => {
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