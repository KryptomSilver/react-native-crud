//React
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
//Componentes
import style from '../../assets/style';

const Note = ({nota, navigation}) => {
  return (
    <TouchableOpacity
      style={{
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        marginTop: 20,
        backgroundColor: `${nota.color}`,
        borderRadius: 4,
      }}
      onPress={() =>
        navigation.navigate('EditNote', {idnota: nota.id_nota,navigation:navigation})
      }>
      <Text style={style.tituloNota}>{nota.titulo}</Text>
      <Text style={style.text}>{nota.texto}</Text>
    </TouchableOpacity>
  );
};

export default Note;
