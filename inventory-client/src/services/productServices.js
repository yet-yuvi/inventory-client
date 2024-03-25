import invAxios from "../common/axios";

const getProducts = async () => {
  const productResponse = await invAxios.get("/products");
  return productResponse.data;
};

const getProduct = async (productId) => {
  const productResponse = await invAxios.get(`/products/${productId}`);
  return productResponse.data;
};

const createProduct = (product) => invAxios.post("/products", product); //payload

const deleteProduct = (productId) => invAxios.delete(`/products/${productId}`); //path variable

const editProduct = async (productId, updatedProductData) => {
  const productResponse = await invAxios.put(
    `/products/${productId}`,
    updatedProductData
  );
  return productResponse.data;
};

export const ProductServices = {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  editProduct,
};
