import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffe600', 
  },
  image: {
    width: width * 0.85,
    height: height * 0.4,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'cover',
    backgroundColor: '#fff', 
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#c8102e', 
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 22,
    color: '#fff',
    backgroundColor: '#c8102e',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#c8102e', 
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 30,
    marginTop: 10,
  },
  buttonText: {
    color: '#ffe600', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
