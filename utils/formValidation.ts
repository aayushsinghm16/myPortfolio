// Validation conditions
export const VALIDATION_RULES = {
    NAME: {
        MIN_LENGTH: 2,
        MAX_LENGTH: 50,
        PATTERN: /^[a-zA-Z\s'-]+$/,
    },
    EMAIL: {
        PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    MESSAGE: {
        MIN_LENGTH: 10,
        MAX_LENGTH: 1000,
    }
} as const;

// Error messages
export const ERROR_MESSAGES = {
    NAME: {
        REQUIRED: 'Name is required',
        INVALID: `Please enter a valid name (${VALIDATION_RULES.NAME.MIN_LENGTH}-${VALIDATION_RULES.NAME.MAX_LENGTH} characters, letters only)`,
    },
    EMAIL: {
        REQUIRED: 'Email is required',
        INVALID: 'Please enter a valid email address',
    },
    MESSAGE: {
        REQUIRED: 'Message is required',
        INVALID: `Message must be between ${VALIDATION_RULES.MESSAGE.MIN_LENGTH} and ${VALIDATION_RULES.MESSAGE.MAX_LENGTH} characters`,
    },
    FORM: {
        FIX_ERRORS: 'Please fix the errors in the form',
        RATE_LIMIT: (seconds: number) => `Please wait ${seconds} seconds before sending another message.`,
    }
} as const;

// Validation functions
export const validateEmail = (email: string): boolean => {
    return VALIDATION_RULES.EMAIL.PATTERN.test(email);
};

export const validateName = (name: string): boolean => {
    return (
        name.length >= VALIDATION_RULES.NAME.MIN_LENGTH &&
        name.length <= VALIDATION_RULES.NAME.MAX_LENGTH &&
        VALIDATION_RULES.NAME.PATTERN.test(name)
    );
};

export const validateMessage = (message: string): boolean => {
    return (
        message.length >= VALIDATION_RULES.MESSAGE.MIN_LENGTH &&
        message.length <= VALIDATION_RULES.MESSAGE.MAX_LENGTH
    );
};

// Types
export interface FormErrors {
    name: string;
    email: string;
    message: string;
}

export interface FormData {
    name: string;
    email: string;
    message: string;
} 