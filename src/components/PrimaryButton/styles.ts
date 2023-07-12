import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  registerButtonContainer: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  registerProductButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: colors.primary_color,
    borderRadius: 10,
  },
  registerProductButtonText: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '700',
  },
});
