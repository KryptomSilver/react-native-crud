//React
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
//Alertas
import AwesomeAlert from 'react-native-awesome-alerts';
//Componentes
import style from '../../assets/style';
//Base de datos
import clienteAxios from '../config/axios';

const Edit = ({route}) => {
  //Extraer valores de la ruta mediante destructuración
  const {idnota, navigation} = route.params;
  //State de los imputs
  const [texto, setTexto] = useState('');
  const [titulo, setTitulo] = useState('');
  const [color, setColor] = useState('#000');
  const [background, setBackground] = useState('transparent');
  //State de alertas
  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);
  //Función para poner el state de la nota
  const nota = (_titulo, _texto, _color) => {
    setTexto(_texto);
    setBackground(_color);
    setTitulo(_titulo);
  };
  //Función para cargar la nota cuando se entre a la ruta Edit
  useEffect(() => {
    const getNoteAPI = async () => {
      const notasAPI = await clienteAxios.get(`/api/notes/${idnota}`);
      const {data} = notasAPI;
      nota(data.title, data.description, data.color);
    };
    getNoteAPI();
  }, []);
  //Función para colocar el valor del codigo de color del Input
  const changeInputColor = (color, background) => {
    setBackground(background);
    setColor(color);
  };
  //
  const btnModificar = async idnota => {
    if (!titulo || !texto) {
      setAlert2(true);
      return;
    }
    const note = {title: titulo, description: texto, color: background};
    console.log(idnota);
    await clienteAxios.put(`/api/notes/${idnota}`, note);
    setAlert(true);
  };
  //Función para eliminar la nota
  function onEliminarPress() {
    Alert.alert(
      '¿Desea elminar?',
      '¿Está seguro que desea elminar el registro?\nEsta acción no se puede deshacer',
      [
        {
          text: 'Sí',
          onPress: v => {
            const deleteNoteAPI = async () =>
              await clienteAxios.delete(`/api/notes/${idnota}`);
            deleteNoteAPI();
            navigation.goBack();
          },
        },
        {
          text: 'No',
        },
      ],
    );
  }
  return (
    <SafeAreaView>
      {/* Alerta para mostrar que los datos han sido actualizados*/}
      <AwesomeAlert
        show={alert}
        showProgress={false}
        title="Datos actualizados"
        confirmText="Okey"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmButtonColor="#216dc1"
        onConfirmPressed={() => {
          setAlert(false);
          navigation.goBack();
        }}
      />
      {/* Alerta para saber si los formularios estan completos */}
      <AwesomeAlert
        show={alert2}
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
          setAlert2(false);
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
          multiline={true}
          numberOfLines={10}
          placeholder="Texto de la nota"
          placeholderTextColor={`${color}`}
          onChangeText={t => setTexto(t)}
          value={texto}
        />
        {/* Botones para cambiar el color del imput */}
        <View style={style.row}>
          <TouchableOpacity
            style={style.color}
            onPress={() =>
              changeInputColor('#474747', '#a5ff9c')
            }></TouchableOpacity>
          <TouchableOpacity
            style={style.color1}
            onPress={() =>
              changeInputColor('#474747', '#ffa3f7')
            }></TouchableOpacity>
          <TouchableOpacity
            style={style.color2}
            onPress={() =>
              changeInputColor('#474747', '#94a2ff')
            }></TouchableOpacity>
          <TouchableOpacity
            style={style.color3}
            onPress={() =>
              changeInputColor('#474747', '#fa78ff')
            }></TouchableOpacity>
        </View>
        <View style={style.row}>
          <TouchableOpacity
            style={style.btnEdit}
            onPress={() => btnModificar(idnota)}>
            <Text style={style.text_btn}>MODIFICAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.botonDelete}
            onPress={() => onEliminarPress(idnota)}>
            <Text style={style.text_btn}>ELIMINAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Edit;
