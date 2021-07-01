//React
import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
//Alertas
import AwesomeAlert from 'react-native-awesome-alerts';
//Componentes
import style from '../../assets/style';
//Base de datos
import clienteAxios from '../config/axios';

const AddNote = ({route}) => {
  //Extraer valores de la ruta mediante destructuración
  const {navigation} = route.params;
  //State para la nota
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [color, setColor] = useState('#000');
  const [background, setBackground] = useState('transparent');
  //State para la alerta
  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);
  //Función para agregar la nota
  const btnAgregar = async function () {
    //Validaciones para los formularios
    if (!titulo) {
      setAlert(true);
      return;
    }
    if (!texto) {
      setAlert(true);
      return;
    }
    const note = {title: titulo, description: texto, color: background};
    //Ejecutar
    await clienteAxios.post('/api/notes/', note);
    navigation.goBack();
  };
  //Función para colocar el valor del codigo de color del Input
  const changeInput = (color, background) => {
    setBackground(background);
    setColor(color);
  };
  return (
    <SafeAreaView>
      {/* Alerta para saber si los formularios estan completos */}
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
      {/* Alerta para notificar al usuario que se guardo la nota  */}
      <AwesomeAlert
        show={alert2}
        showProgress={false}
        title="Nota guardada"
        confirmText="Okey"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmButtonColor="#216dc1"
        onConfirmPressed={() => {
          setAlert2(false);
          navigation.goBack();
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
        {/* Botones para cambiar el color del imput */}
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
        <TouchableOpacity style={style.btnAddNote} onPress={() => btnAgregar()}>
          <Text style={style.text_btn}>AGREGAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddNote;
