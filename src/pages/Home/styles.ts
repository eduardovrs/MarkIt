import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.white,
  },
  registeredProducts: {
    height: '40%',
  },
  registerButtonContainer: {
    height: '8%',
    width: '80%',
    alignSelf: 'center',
    margin: 20,
  },
  registerProductButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: colors.primary_color,
    borderRadius: 16,
  },
  registerProductButtonText: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '700',
  },
  modalContainer: {
    height: '80%',
    width: '100%',
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    elevation: 1,
    backgroundColor: colors['light-gray'],
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 30,
  },

  modalAmountTypeTextInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    marginBottom: 60,
  },
  modalTextInput: {
    height: '10%',
    width: '70%',
    backgroundColor: colors.white,
    marginBottom: 10,
    borderRadius: 8,
  },
  modalAmountTextInput: {
    height: '60%',
    width: '40%',
    backgroundColor: colors.white,
    marginBottom: 10,
    borderRadius: 8,
    marginRight: 10,
    marginTop: 5,
    alignSelf: 'center',
  },
  modalButtonContainer: {
    height: '10%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 5,
  },
});
