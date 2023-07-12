import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import Header from '../../components/Header';
import ProductsList from '../../components/ProductsList';
import {SelectList} from 'react-native-dropdown-select-list';
import {typeOptionList} from '../../utils/lists';
import PrimaryButton from '../../components/PrimaryButton';
import SecondaryButton from '../../components/SecondaryButton';

export default function Home() {
  const [productsList, setProductsList] = React.useState<IProductProps[]>([]);
  const [currentRegisterProduct, setCurrentRegisterProduct] =
    React.useState<IProductProps>();
  const [registerProductModalVisible, setRegisterProductModalVisible] =
    React.useState(false as boolean);

  interface IProductProps {
    name: string;
    price: string;
    amount: string;
    type: 'kg' | 'ml' | 'unidade';
  }

  React.useEffect(() => {
    console.log(productsList);
  }, [productsList]);

  return (
    <View style={styles.container}>
      <Header title={'Produtos'} />
      <View style={styles.registerButtonContainer}>
        <PrimaryButton
          onPress={() => setRegisterProductModalVisible(true)}
          buttonText={'Cadastrar novo produto'}
        />
      </View>
      <ScrollView
        contentContainerStyle={{alignItems: 'center', height: '100%'}}
        style={styles.registeredProducts}>
        <Text>Produtos cadastrados</Text>
        {/* <ProductsList products={productsList} /> */}
      </ScrollView>
      <KeyboardAvoidingView>
        <Modal
          animationType="slide"
          visible={registerProductModalVisible}
          transparent={true}
          onRequestClose={() => setRegisterProductModalVisible(false)}>
          <Pressable
            style={{flex: 1}}
            onPress={() => setRegisterProductModalVisible(false)}
          />
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              Adicione as informações do produto
            </Text>
            <TextInput
              placeholder="Nome do produto"
              style={styles.modalTextInput}
              // onChangeText={(text: string) =>
              //   setCurrentRegisterProduct({
              //     ...currentRegisterProduct,
              //     name: text,
              //   })
              // }
              onChangeText={text => {
                setCurrentRegisterProduct(prevState => ({
                  ...prevState,
                  name: text,
                }));
              }}
            />
            <TextInput
              placeholder="Preço do produto"
              style={styles.modalTextInput}
              onChangeText={text => {
                setCurrentRegisterProduct(prevState => ({
                  ...prevState,
                  price: text,
                }));
              }}
            />
            <View style={styles.modalAmountTypeTextInputContainer}>
              <TextInput
                placeholder="Quantidade"
                style={styles.modalAmountTextInput}
                onChangeText={text => {
                  setCurrentRegisterProduct(prevState => ({
                    ...prevState,
                    amount: text,
                  }));
                }}
              />
              <SelectList
                placeholder=" "
                setSelected={(value: 'kg' | 'ml' | 'unidade') => {
                  setCurrentRegisterProduct(prevState => ({
                    ...prevState,
                    type: value,
                  }));
                }}
                data={typeOptionList}
                boxStyles={{width: 100}}
                dropdownStyles={{width: 100}}
                search={false}
                save="value"
                dropdownShown={false}
                defaultOption={{key: 'kg', value: 'kg'}}
              />
            </View>
            <View style={styles.modalButtonContainer}>
              <PrimaryButton
                onPress={() =>
                  // setProductsList({
                  //   ...productsList,
                  //   currentRegisterProduct,
                  // });
                  setProductsList(prevState => ({
                    ...prevState,
                    currentRegisterProduct,
                  }))
                }
                buttonText={'Confirmar'}
              />
              <SecondaryButton
                onPress={() => setRegisterProductModalVisible(false)}
                buttonText={'Cancelar'}
              />
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </View>
  );
}
