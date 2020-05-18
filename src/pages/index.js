import React from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import logo from '../assets/img/logo.png';
import styles from './styles';
import {Toast} from '../components/toast';

import {storaClear} from '../components/asyncStorage';

const zerarVotacao = async () => {
  await storaClear();
  Toast('Enquete zerada com sucesso!');
};

const removerVotacao = () => {
  Alert.alert(
    'Atenção!',
    'Deseja zerar a enquete?',
    [
      {
        text: 'Não',
        onPress: () => console.log('OK Cancel'),
        style: 'cancel',
      },
      {text: 'Sim', onPress: () => zerarVotacao()},
    ],
    {cancelable: false},
  );
};

const Index = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor="#FF7722" barStyle="light-content" />
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.sectionTopo}>
            <Image source={logo} style={styles.imgem} />
          </View>

          <View style={styles.titulo}>
            <Text style={styles.textoTitulo}>Enquete</Text>
          </View>

          <View style={styles.sectionContainer}>
            <View>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => navigation.navigate('ListaOpcoes')}
                  color="#FF7722"
                  title="Cadastrar Opções"
                />
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => navigation.navigate('Enquete')}
                  color="#FF7722"
                  title="Realizar enquete"
                />
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => navigation.navigate('Resultado')}
                  color="#FF7722"
                  title="Verificar resultado da enquete"
                />
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => removerVotacao()}
                  color="#FF7722"
                  title="Zerar enquete"
                />
              </View>            
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Index;
