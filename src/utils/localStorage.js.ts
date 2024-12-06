const setItem = <T>(key: string, value: T) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error storing key "${key}":`, error);
    }
};

const getItem = (key:string) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error(`Error retrieving key "${key}":`, error);
        return null;
    }
};

const removeItem = (key: string | string[]): boolean => {
    if (!key || (Array.isArray(key) && key.length === 0)) {
        console.warn("Invalid or empty key provided.");
        return false;
    }
    try {
        const keys = Array.isArray(key) ? key : [key];
        keys.forEach((itemKey: string) => {
            localStorage.removeItem(itemKey);
        })
        return true;
    } catch (error) {
        console.error(`Error removing key "${key}":`, error);
        return false;
    }
};

export default { setItem, getItem, removeItem };