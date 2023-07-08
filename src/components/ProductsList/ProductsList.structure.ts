export interface IProductsListProps {
  products: IProductProps[];
}

export interface IProductProps {
  name: string;
  price: string;
  amount: string;
  type: 'kg' | 'ml' | 'unidade';
}
