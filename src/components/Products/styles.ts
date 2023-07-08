import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    height: '30%',
    width: '30%',
  },
  imageStyles: {
    height: '60%',
    width: '100%',
  },
  bottomContainer: {
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textContainer: {
    marginTop: 5,
    paddingLeft: 5,
    justifyContent: 'space-evenly',
  },
  productNameText: {
    fontSize: 21,
    lineHeight: 24,
    fontWeight: '700',
    color: colors.black,
  },
  productAmountText: {
    fontSize: 16,
    lineHeight: 21,
    color: colors.gray,
  },
  productPriceText: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '700',
    color: colors.black,
  },
  iconContainer: {
    alignSelf: 'center',
  },
});
