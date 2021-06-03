import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  nota: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  contenedor_header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
  },
  contenedor: {
    marginTop: 12,
    paddingLeft: 15,
    paddingRight: 15,
  },

  boton: {
    backgroundColor: '#216dc1',
    width: 45,
    height: 45,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  botonDelete: {
    backgroundColor: '#ff0039',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    padding: 12,
    borderRadius: 4,
  },
  btn: {
    backgroundColor: '#216dc1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    padding: 12,
    borderRadius: 4,
  },
  botonEdit: {
    backgroundColor: '#3fb618',
    width: 70,
    height: 28,
    padding: 2,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text_btn: {
    fontSize: 15,
    color: '#fff',
  },
  titulo: {
    fontSize: 30,
    color: '#000',
    textAlign: 'center',
  },
  icono: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nota: {
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    backgroundColor: '#3894',
    borderRadius: 4,
  },
  input: {
    color: '#000',
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 4,
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 30,
  },
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
});

export default style;
