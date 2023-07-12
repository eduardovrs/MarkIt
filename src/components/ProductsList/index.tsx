import React from 'react';
import Products from '../Products';
import {IProductsListProps} from './ProductsList.structure';
import {ScrollView, View} from 'react-native';

export default function ProductsList({products}: IProductsListProps) {
  const renderProducts = React.useMemo(() => {
    return products.map((item, index) => {
      return (
        <Products
          key={index}
          name={item.name}
          price={item.price}
          amount={item.amount}
          type={item.type}
        />
      );
    });
  }, [products]);

  return <>{renderProducts}</>;
}
