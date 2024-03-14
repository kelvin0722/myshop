interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  currencyCode: string;
  currencySymbol: string;
  quantity: number;
  imageLocation: string;
  status: string;
}

interface AddProductPayload {
  name: string;
  description: string;
  price: number;
  currencyCode: string;
  currencySymbol: string;
  quantity: number;
}
