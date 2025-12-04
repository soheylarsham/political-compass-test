
/**
 * Generates a standardized validation code for exports.
 * Format: PC-TYPE-YYYYMMDD-HHMMSS
 * @param type - 'QB' for Question Bank, 'R' for Results.
 * @returns A formatted validation code string.
 */
export const generateValidationCode = (type) => {
    const now = new Date();
    const YYYY = now.getFullYear();
    const MM = String(now.getMonth() + 1).padStart(2, '0');
    const DD = String(now.getDate()).padStart(2, '0');
    const HH = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    
    // PC = Political Compass, QB = Question Bank, R = Results
    return `PC-${type}-${YYYY}${MM}${DD}-${HH}${mm}${ss}`;
};

/**
 * Normalizes text for comparison by trimming, removing extra spaces, and converting to lower case.
 * @param text The string to normalize.
 * @returns The normalized string.
 */
export const normalizeText = (text) => {
    if (typeof text !== 'string') return '';
    return text.trim().replace(/\s+/g, ' ').toLowerCase();
};


/**
 * A simple, non-standard hashing function for obfuscation purposes, as requested.
 * NOTE: This is NOT cryptographically secure and should not be used where real security is required.
 * It is designed to be a custom algorithm not easily reversible by standard tools.
 * @param text The string to hash (e.g., a password).
 * @param salt A secret string to add to the hash.
 * @returns An obfuscated string.
 */
export const simpleHash = (text, salt) => {
    if (typeof text !== 'string' || typeof salt !== 'string') return '';
    const saltedText = salt + text + salt;
    try {
        // Encode to Base64
        const base64 = btoa(unescape(encodeURIComponent(saltedText)));
        // Reverse the string and interleave with salt characters
        const reversed = base64.split('').reverse().join('');
        let result = '';
        for (let i = 0; i < reversed.length; i++) {
            result += reversed[i] + salt[i % salt.length];
        }
        return result;
    } catch (e) {
        console.error("Failed to hash:", e);
        // Fallback for environments where btoa might fail
        return saltedText.split('').reverse().join('');
    }
};