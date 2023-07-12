import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  registerButtonContainer: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.primary_color,
  },
  registerProductButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 16,
  },
  registerProductButtonText: {
    fontSize: 18,
    color: colors.primary_color,
    fontWeight: '700',
  },
});
