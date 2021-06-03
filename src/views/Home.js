//React
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
//Iconos
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
//Componentes
import ListNotes from '../components/ListNotes';
import style from '../../assets/style';
//Base de datos
import {openDatabase} from 'react-native-sqlite-storage';
const db = openDatabase({name: 'mydata.db'});

const Home = ({navigation}) => {
  //Verificar y crear la base de datos
  useEffect(() => {
    db.transaction(t => {
      t.executeSql(
        'CREATE TABLE IF NOT EXISTS notastext (' +
          'id_nota    INTEGER         PRIMARY KEY     AUTOINCREMENT,' +
          'titulo         VARCHAR(128)    NOT NULL,' +
          'texto         VARCHAR(255)    NOT NULL,' +
          'color VARCHAR(128) NOT NULL' +
          ');',
        [],
        () => console.log('CREATED TABLE notas'),
        error => console.log({error}),
      );
    });
  }, []);

  return (
    <SafeAreaView>
      <View style={style.contenedor_header}>
        <Text style={style.titulo}>Notas Rapidas</Text>
        <TouchableOpacity
          style={style.btnAdd}
          onPress={() =>
            navigation.navigate('AddNote', {navigation:navigation})
          }>
          <Text style={style.icono}>
            <FontAwesomeIcon icon={faPlus} size={30} color={'white'} />
          </Text>
        </TouchableOpacity>
      </View>
      <ListNotes navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
