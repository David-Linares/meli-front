interface AuthorData {
  name: string;
  lastname: string;
}

interface CategoryData {
  id: string;
  name: string;
}

interface ItemResult {
  author: AuthorData;
  categories: CategoryData[];
  items: ItemData[];
}

interface ItemData {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  address: string;
}

interface ItemDetailResult {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  address: string;
}
