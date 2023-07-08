import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Header from '../../components/Header';
import ProductsList from '../../components/ProductsList';
import {IProductProps} from '../../components/ProductsList/ProductsList.structure';

export default function Home() {
  const [productsList, setProductsList] = React.useState<IProductProps[]>([
    {name: 'Alface', price: '5,00', amount: '5', type: 'kg'},
    {
      name: 'Picanha',
      price: '37,00',
      amount: '1',
      type: 'kg',
    },
    {
      name: 'Picanha',
      price: '37,00',
      amount: '1',
      type: 'kg',
    },
    {
      name: 'Picanha',
      price: '37,00',
      amount: '1',
      type: 'kg',
    },
    {
      name: 'Picanha',
      price: '37,00',
      amount: '1',
      type: 'kg',
    },
  ]);

  return (
    <View style={styles.container}>
      <Header title={'Produtos'} />
      <ProductsList products={productsList} />
    </View>
  );
}
