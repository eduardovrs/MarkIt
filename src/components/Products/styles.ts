import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    height: '10%',
    width: '90%',
    flexDirection: 'row',
    backgroundColor: 'pink',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageStyles: {
    height: '60%',
    width: '100%',
  },
  textContainer: {
    justifyContent: 'center',
  },
  productNameText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    alignSelf: 'flex-start',
  },
  productAmountText: {
    fontSize: 14,
    color: colors.gray,
  },
  productPriceText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },
  iconContainer: {
    alignSelf: 'center',
  },
});
