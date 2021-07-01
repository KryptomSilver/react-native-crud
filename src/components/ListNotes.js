//React
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
//Componentes
import Note from './Note';
import style from '../../assets/style';
import clienteAxios from '../config/axios';

const ListNotes = ({navigation}) => {
  //State para las notas
  const [notas, setNotas] = useState([]);

  //Función para obtener las notas de la base de datos
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const notasAPI = await clienteAxios.get('/api/notes/');
      setNotas(notasAPI.data);
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView style={style.contenedor}>
        {Object.keys(notas).length === 0 ? (
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              fontWeight: '500',
              marginTop: 15,
            }}>
            No hay notas crea una...
          </Text>
        ) : (
          notas.map(nota => (
            <Note key={nota._id} nota={nota} navigation={navigation} />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListNotes;
