import React from 'react';
import Products from '../Products';
import {IProductsListProps} from './ProductsList.structure';
import {ScrollView, View} from 'react-native';

export default function ProductsList({products}: IProductsListProps) {
  const renderProducts = React.useMemo(() => {
    return products.map((item, index) => {
      return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Products
            key={index}
            name={item.name}
            price={item.price}
            amount={item.amount}
            type={item.type}
          />
        </ScrollView>
      );
    });
  }, [products]);

  return <>{renderProducts}</>;
}
