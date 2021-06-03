import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {openDatabase} from 'react-native-sqlite-storage';
import style from '../../assets/style';
const db = openDatabase({name: 'mydata.db'});
const Edit = ({route}) => {
  const {idnota, navigation} = route.params;
  const [texto, setTexto] = useState('');
  const [titulo, setTitulo] = useState('');
  const [color, setColor] = useState('#000');
  const [background, setBackground] = useState('transparent');
  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);
  const nota = (_titulo, _texto, _color) => {
    setTexto(_texto);
    setBackground(_color);
    setTitulo(_titulo);
  };
  useEffect(() => {
    db.transaction(t => {
      t.executeSql(
        'SELECT * FROM notastext where id_nota = ?',
        [idnota],
        function (tx, res) {
          let notaDB = res.rows.item(0);
          //   setNota(data);
          console.log(notaDB.titulo);
          nota(notaDB.titulo, notaDB.texto, notaDB.color);
        },
        error => {
          console.log({error});
        },
      );
    });
  }, []);
  const changeInput = (color, background) => {
    setBackground(background);
    setColor(color);
  };
  const btnModificar = idnota => {
    if (!titulo || !texto) {
      setAlert2(true);
      return;
    }
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE notastext SET titulo = ?, texto = ? ,color = ?WHERE id_nota = ?',
        [titulo, texto, background, idnota],
        (tx, result) => {
          if (result.rowsAffected.length === 0) {
            Alert.alert('No se actualizaron los datos. Intente de nuevo');
            return;
          } else {
            setAlert(true);
            setTimeout(() => {
              navigation.goBack();
            }, 1000);
          }
        },
        error => console.log(error),
      );
    });
  };
  
  function onEliminarPress() {
    Alert.alert('¿Desea elminar?',
        '¿Está seguro que desea elminar el registro?\nEsta acción no se puede deshacer',
        [
            {
                text: "Sí",
                onPress: (v) => {
                    db.transaction(tx => {
                        tx.executeSql(
                            'DELETE FROM notastext WHERE id_nota = ?',
                            [idnota],
                            (tx, res) => {
                                if (res.rowsAffected === 0) {
                                    Alert.alert('Fallo al eliminar', 'No se eliminó el registro')
                                    return;
                                }

                                navigation.goBack()
                            },
                            error => console.log(error)
                        )
                    })
                }
            },
            {
                text: 'No'
            }
        ])
}
  return (
    <SafeAreaView>
      <AwesomeAlert
        show={alert}
        showProgress={true}
        title="Datos actualizados"
        // message="Datos actualizados"
        // confirmText="Okey"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={false}
        // confirmButtonColor="#216dc1"
        // onConfirmPressed={() => {
        //   setAlert(false);
        // }}
      />
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
        <View style={style.row}>
          <TouchableOpacity
            style={style.btn}
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
