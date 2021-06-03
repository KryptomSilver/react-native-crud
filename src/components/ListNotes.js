import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Note from './Note';
import {openDatabase} from 'react-native-sqlite-storage';
const db = openDatabase({name: 'mydata.db'});
import style from '../../assets/style';
const ListNotes = ({navigation}) => {
  const [notas, setNotas] = useState([]);
  useEffect(() => {
    db.transaction(t => {
      t.executeSql(
        'SELECT * FROM notastext',
        [],
        function (tx, res) {
          let data = [];
          for (let i = 0; i < res.rows.length; i++) {
            data.push(res.rows.item(i));
          }
          setNotas(data);
        },
        error => {
          console.log({error});
        },
      );
    });
  }, [notas]);

  return (
    <SafeAreaView>
      <ScrollView style={style.contenedor}>
        {notas.map(nota => (
          <Note key={nota.id_nota} nota={nota} navigation={navigation} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListNotes;
