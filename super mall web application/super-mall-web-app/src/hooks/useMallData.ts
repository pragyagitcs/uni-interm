import { useEffect, useState } from 'react';
import { fetchProducts, fetchCategories } from '../services/api';
import { Product, Category } from '../types';

const useMallData = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const productsData = await fetchProducts();
                const categoriesData = await fetchCategories();
                setProducts(productsData);
                setCategories(categoriesData);
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return { products, categories, loading, error };
};

export default useMallData;