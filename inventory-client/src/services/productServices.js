import invAxios from "../common/axios";

const getProducts = async () => {

  const productResponse = await invAxios.get(
    'http://localhost:7000/api/products'
  )
  return productResponse.data;
};

export const ProductServices = {
  getProducts,
};
