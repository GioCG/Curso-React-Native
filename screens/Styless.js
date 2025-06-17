import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe600',
    padding: 20,
  },

  header: {
  fontSize: 30,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#c8102e', 
  marginBottom: 20,
  padding: 10,
  backgroundColor: '#fff',
  borderRadius: 15,
  elevation: 4,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
},

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffe600',
    marginBottom: 20,
    backgroundColor: '#c8102e',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: width * 0.85,
    height: height * 0.25, 
    borderRadius: 15,
    marginBottom: 15,
  },
  itemContainer: {
    backgroundColor: '#c8102e',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    width: width * 0.9,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  itemName: {
    fontSize: 20,
    color: '#fff', 
    fontWeight: '600',
  },
  itemPrice: {
    fontSize: 18,
    color: '#fff',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#444',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#c8102e', 
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    width: width * 0.8,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
