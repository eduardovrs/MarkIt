import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import {ISecondaryButtonProps} from './SecondaryButton.structure';

export default function SecondaryButton({
  onPress,
  buttonText,
}: ISecondaryButtonProps) {
  return (
    <View style={styles.registerButtonContainer}>
      <TouchableOpacity style={styles.registerProductButton} onPress={onPress}>
        <Text style={styles.registerProductButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}
