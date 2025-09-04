export const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
};

export const filterProductsByCategory = (products: any[], category: string): any[] => {
    return products.filter(product => product.category === category);
};

export const sortProductsByPrice = (products: any[], ascending: boolean = true): any[] => {
    return products.sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
};

export const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};