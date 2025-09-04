export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    categoryId: string;
    imageUrl: string;
    inStock: boolean;
}

export interface Category {
    id: string;
    name: string;
    description?: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    role: 'customer' | 'admin';
}

export interface CartItem {
    productId: string;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
    totalAmount: number;
}