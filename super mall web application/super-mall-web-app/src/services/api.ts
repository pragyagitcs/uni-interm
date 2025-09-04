import axios from 'axios';
import { Product, Category } from '../types';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
};

export const fetchCategories = async (): Promise<Category[]> => {
    const response = await axios.get(`${API_BASE_URL}/categories`);
    return response.data;
};

export const fetchUserInfo = async (userId: string): Promise<any> => {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
};