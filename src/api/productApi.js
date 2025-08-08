import axiosClient from './axiosClient';

// Hàm lấy danh sách sản phẩm
const productApi = {
    getAll: () => {
        return axiosClient.get('/api/products');
    },

    getById: (id) => {
        return axiosClient.get(`/api/products/${id}`);
    },
};

export default productApi;