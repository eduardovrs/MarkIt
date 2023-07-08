import React from 'react';
import {styles} from './styles';
import {Text, View} from 'react-native';
import {IHeaderProps} from './Header.structure';

export default function Header({title}: IHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
