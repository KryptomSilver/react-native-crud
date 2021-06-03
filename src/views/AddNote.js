import React, {useState} from 'react';
import {
  Alert,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {openDatabase} from 'react-native-sqlite-storage';
import style from '../../assets/style';
import AwesomeAlert from 'react-native-awesome-alerts';
const db = openDatabase({name: 'mydata.db'});
const AddNote = () => {
  const [titulo, setTitulo] = useState('');
  const [alert, setAlert] = useState(false);
  const [color, setColor] = useState('#000');
  const [background, setBackground] = useState('transparent');
  const [texto, setTexto] = useState('');

  const btnAgregarOnPress = function () {
    console.log({titulo});
    if (!titulo) {
      setAlert(true);
      return;
    }
    if (!texto) {
      setAlert(true);
      return;
    }
    db.transaction(t => {
      t.executeSql(
        'INSERT INTO notastext (titulo,texto,color) VALUES (?,?,?)',
        [titulo, texto, background],
        (tx, res) => {
          Alert.alert('Nota guardada satisfactoriamente');
        },
        error => console.log({error}),
      );
    });
  };
  const changeInput = (color, background) => {
    setBackground(background);
    setColor(color);
  };
  return (
    <SafeAreaView>
      <AwesomeAlert
        show={alert}
        showProgress={false}
        title="Faltan campos!!"
        message="Por favor completa los campos"
        confirmText="Okey"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmButtonColor="#216dc1"
        onConfirmPressed={() => {
          setAlert(false);
        }}
      />
      <View style={style.contenedor}>
        <Text style={style.titulo}>Agregar nota</Text>
        <TextInput
          style={style.input}
          value={titulo}
          placeholder="Titulo de la nota"
          placeholderTextColor="#808080"
          onChangeText={t => setTitulo(t)}
        />
        <TextInput
          style={{
            padding: 10,
            borderWidth: 1,
            marginTop: 12,
            marginBottom: 12,
            borderRadius: 4,
            color: `${color}`,
            backgroundColor: `${background}`,
            borderColor: '#000',
          }}
          value={texto}
          multiline={true}
          numberOfLines={10}
          placeholder="Texto de la nota"
          placeholderTextColor={`${color}`}
          onChangeText={t => setTexto(t)}
        />
        <View style={style.row}>
          <TouchableOpacity
            style={style.color}
            onPress={() =>
              changeInput('#474747', '#a5ff9c')
            }></TouchableOpacity>
          <TouchableOpacity
            style={style.color1}
            onPress={() =>
              changeInput('#474747', '#ffa3f7')
            }></TouchableOpacity>
          <TouchableOpacity
            style={style.color2}
            onPress={() =>
              changeInput('#474747', '#94a2ff')
            }></TouchableOpacity>
          <TouchableOpacity
            style={style.color3}
            onPress={() =>
              changeInput('#474747', '#fa78ff')
            }></TouchableOpacity>
        </View>
        <TouchableOpacity style={style.btn} onPress={() => btnAgregarOnPress()}>
          <Text style={style.text_btn}>AGREGAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddNote;
