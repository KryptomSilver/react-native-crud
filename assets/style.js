import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  /*---- Globales ----*/
  contenedor_header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
  },
  //Contenedor
  contenedor: {
    marginTop: 12,
    paddingLeft: 15,
    paddingRight: 15,
  },
  //Fila
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 30,
  },
  //Texto del boton
  text_btn: {
    fontSize: 15,
    color: '#fff',
  },
  //Texto de titulo
  titulo: {
    fontSize: 30,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  /*---- Home ----*/
  //Icono para ir a agregar una nota
  icono: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //Boton para ir a la pagina de agregar nota
  btnAdd: {
    backgroundColor: '#216dc1',
    width: 45,
    height: 45,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /*---- Notas ----*/
  //Titulo de la nota
  tituloNota: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  //Texto para notas
  text: {
    color: '#000',
    textAlign: 'justify',
  },
  //Input para agregar o editar notas
  input: {
    color: '#000',
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 4,
  },
  //Boton para eliminar nota
  botonDelete: {
    backgroundColor: '#ff0039',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    padding: 12,
    borderRadius: 4,
  },
  // Colores del imput
  color: {
    height: 50,
    width: 50,
    backgroundColor: '#a5ff9c',
  },
  color2: {
    height: 50,
    width: 50,
    backgroundColor: '#94a2ff',
  },
  color1: {
    height: 50,
    width: 50,
    backgroundColor: '#ffa3f7',
  },
  color3: {
    height: 50,
    width: 50,
    backgroundColor: '#fa78ff',
  },
  //Boton para agregar nota
  btnAddNote: {
    backgroundColor: '#216dc1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    padding: 12,
    borderRadius: 4,
  },
  //Boton para modificar la nota
  btnEdit: {
    backgroundColor: '#3fb618',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    padding: 12,
    borderRadius: 4,
  },
});

export default style;
