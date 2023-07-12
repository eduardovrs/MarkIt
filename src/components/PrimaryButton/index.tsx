import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import {IPrimaryButtonProps} from './PrimaryButton.structure';

export default function PrimaryButton({
  onPress,
  buttonText,
}: IPrimaryButtonProps) {
  return (
    <View style={styles.registerButtonContainer}>
      <TouchableOpacity style={styles.registerProductButton} onPress={onPress}>
        <Text style={styles.registerProductButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}
