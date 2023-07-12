import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IProductsProps} from './Product.structure';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import {colors} from '../../utils/colors';

export default function Products({name, price, amount, type}: IProductsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.productNameText}>{name}</Text>
        <Text style={styles.productAmountText}>
          {amount} {type}
        </Text>
        <Text style={styles.productPriceText}>R$ {price}</Text>
      </View>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="pluscircle" size={20} color={colors.primary_color} />
      </TouchableOpacity>
    </View>
  );
}
