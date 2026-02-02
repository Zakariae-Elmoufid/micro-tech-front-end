import api from './api'; // ton instance axios

const productService = {
    getAllProducts: () => api.get('/admin/products').then(res => res.data.data),

    createProduct: (product) => api.post('/products', product).then(res => res.data),

    updateProduct: (id, product) => api.put(`/products/${id}`, product).then(res => res.data),

    deleteProduct: (id) => api.delete(`/products/${id}`).then(res => res.data),
};

export default productService;
