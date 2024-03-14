import Requester from '@/services/requester';

const requester = new Requester();

const API_ENDPOINTS_URLS: Record<string, string> = {
  GET_PRODUCTS: '/productBundles',
  POST_PRODUCTS: '/productBundles',
};

export async function getProduct(id: string): Promise<Product> {
  const products = await getProductList();
  return products.find((product) => product.id === parseInt(id)) as Product;
}

export async function getProductList(): Promise<Product[]> {
  return await requester.get(API_ENDPOINTS_URLS.GET_PRODUCTS);
}

export async function addProduct(productPayload: AddProductPayload) {
  return await requester.post(API_ENDPOINTS_URLS.POST_PRODUCTS, productPayload);
}
